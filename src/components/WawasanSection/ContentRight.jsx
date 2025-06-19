import { useEffect, useRef, useState, forwardRef } from "react";
import { carouselData } from "../Array";
import { gsap } from "gsap";

export default function ContentRight() {
  return (
    <div className="w-full md:w-1/2 flex justify-center md:justify-end overflow-hidden">
      <div className="relative w-full max-w-2xl overflow-hidden">
        <CarouselRight />
      </div>
    </div>
  );
}

function CarouselRight() {
  const [items, setItems] = useState([]);
  const carouselRef = useRef(null);
  const firstCardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const numVisibleCardsForSmoothTransition = 2;
    const initialItems = [
      ...carouselData,
      ...carouselData.slice(0, numVisibleCardsForSmoothTransition),
    ];
    setItems(initialItems);

    const measureCardWidth = () => {
      if (firstCardRef.current) {
        const width = firstCardRef.current.offsetWidth;
        const gap = 16;
        if (width > 0) {
          setCardWidth(width + gap);
        } else {
          setTimeout(measureCardWidth, 100);
        }
      } else {
        setTimeout(measureCardWidth, 50);
      }
    };

    measureCardWidth();
    window.addEventListener("resize", measureCardWidth);
    return () => {
      window.removeEventListener("resize", measureCardWidth);
    };
  }, []);

  useEffect(() => {
    if (cardWidth === 0) return;
    let intervalId;
    let timeoutId;

    const startCarousel = () => {
      intervalId = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.style.transition = "transform 0.7s ease-in-out";
          carouselRef.current.style.transform = `translateX(-${cardWidth}px)`;
        }

        timeoutId = setTimeout(() => {
          setItems((prevItems) => {
            const newItems = [...prevItems];
            const firstItem = newItems.shift();
            newItems.push(firstItem);

            if (carouselRef.current) {
              carouselRef.current.style.transition = "none";
              carouselRef.current.style.transform = "translateX(0)";
            }

            return newItems;
          });
        }, 700);
      }, 2000);
    };

    startCarousel();
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [cardWidth]);

  return (
    <div ref={carouselRef} className="flex space-x-4">
      {items.map((item, index) => (
        <CarouselCard
          key={item.id + "-" + index}
          ref={index === 0 ? firstCardRef : null}
          {...item}
          isActive={index === 0}
        />
      ))}
    </div>
  );
}

const CarouselCard = forwardRef(function CarouselCard(
  { imgSrc, alt, title, description, link, isActive },
  ref
) {
  const cardElementRef = useRef(null);
  const setRefs = (element) => {
    cardElementRef.current = element;
    if (typeof ref === "function") {
      ref(element);
    } else if (ref) {
      ref.current = element;
    }
  };
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (isActive) {
        gsap.fromTo(
          cardElementRef.current,
          { scale: 1, opacity: 1, y:0 },
          {
            y: 500,
            duration: 1,
            ease: "power3.out",
            overwrite: "auto",
          }
        );
      } else {
        gsap.to(cardElementRef.current, {
          scale: 1,
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    }, cardElementRef);
    return () => ctx.revert();
  }, [isActive]);
  return (
    <div
      ref={setRefs}
      className={`carousel-card flex-shrink-0 w-72 md:w-80 transition-all duration-500`}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 h-full flex flex-col">
        <img src={imgSrc} alt={alt} className="w-full h-48 object-cover" />
        <CardBody title={title} description={description} link={link} />
      </div>
    </div>
  );
});

function CardBody({ title, description, link }) {
  return (
    <div className="card-body p-4 flex-1 flex flex-col transition-all duration-300">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3 flex-1">{description}</p>
      <a
        href={link}
        className="text-green-600 text-sm font-medium hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Baca Jurnal
      </a>
    </div>
  );
}
