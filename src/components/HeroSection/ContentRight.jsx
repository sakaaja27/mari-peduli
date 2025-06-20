import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import { carouselImages as initialCarouselData } from "../Array";

export default function ContentRight() {
  return (
    <div className="w-full md:w-2/3 flex justify-center md:justify-end overflow-hidden">
      <ContentCard />
    </div>
  );
}

function ContentCard() {
  return (
    <div className="card relative w-full h-[300px] sm:h-[400px] md:h-[510px] overflow-hidden">
      <CarouselTrack />
    </div>
  );
}

function CarouselTrack() {
  const [items, setItems] = useState([]);
  const trackRef = useRef(null);
  const cardRefForWidthMeasurement = useRef(null);
  const [singleCardWidth, setSingleCardWidth] = useState(0);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    const numItemsToDuplicate = 3;
    const duplicatedData = [
      ...initialCarouselData,
      ...initialCarouselData.slice(0, numItemsToDuplicate),
    ];
    setItems(duplicatedData);
    const measureCardWidth = () => {
      if (cardRefForWidthMeasurement.current) {
        const width = cardRefForWidthMeasurement.current.offsetWidth;
        const gap = 8;
        if (width > 0 && width + gap !== singleCardWidth) {
          
          setSingleCardWidth(width + gap);
        } else if (width === 0) {
          // Jika lebar masih 0, coba lagi
          setTimeout(measureCardWidth, 100);
        }
      }
    };
    measureCardWidth();
    window.addEventListener("resize", measureCardWidth);
    return () => {
      window.removeEventListener("resize", measureCardWidth);
    };
  }, [singleCardWidth]);

  useEffect(() => {
    if (singleCardWidth === 0) return;
    const animateCard = () => {
      if (!trackRef.current) return;
      gsap.to(trackRef.current, {
        x: -singleCardWidth,
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => {
          setItems((prevItems) => {
            const newItems = [...prevItems];
            const firstItem = newItems.shift();
            newItems.push(firstItem);
            gsap.set(trackRef.current, { x: 0, transition: "none" });

            return newItems;
          });
        },
      });
    };
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
    intervalIdRef.current = setInterval(animateCard, 3000);
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [singleCardWidth, items.length]);
  return (
    <div id="carousel-track" ref={trackRef} className="flex space-x-4">
      {items.map((image, index) => (
        <CarouselCard
          key={`${image.id}-${index}`}
          ref={index === 0 ? cardRefForWidthMeasurement : null}
          {...image}
          isActive={index === 0}
        />
      ))}
    </div>
  );
}
const CarouselCard = forwardRef(function CarouselCard(
  { image, alt, title, description, isActive },
  ref
) {
  const cardElementRef = useRef(null);
  const initialAnimationDone = useRef(false);
  const setCombinedRef = (element) => {
    cardElementRef.current = element;
    if (typeof ref === "function") {
      ref(element);
    } else if (ref) {
      ref.current = element;
    }
  };
  useEffect(() => {
    let ctx;
    if (cardElementRef.current) {
      ctx = gsap.context(() => {
        // gsap.set(cardElementRef.current, { opacity: 0, y: 300 });
        if (isActive && !initialAnimationDone.current) {
          gsap.to(cardElementRef.current, {
            
            opacity: 1,
            y: 500,
            ease: "power3.out",
            duration: 2,
            delay: 0.8,
            overwrite: "auto",
            onComplete: () => {
              initialAnimationDone.current = true;
            }
          });
        } else if(!isActive && initialAnimationDone.current) {
          gsap.to(cardElementRef.current, { opacity: 0, y: 300, duration: 0.8 });
        }
      }, cardElementRef);
    }
    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, [isActive]);
  return (
    <motion.div
      ref={setCombinedRef}
      className="c-card flex-shrink-0 w-36 sm:w-52 md:w-80 h-full px-1 md:px-2 relative"
    >
      <img
        src={image}
        alt={alt}
        draggable="false"
        className="rounded-xl w-full h-full object-cover transition-all duration-700 ease-in-out"
      />
      <div className="sector-content absolute left-1 right-1 top-0 bottom-0 flex flex-col items-center justify-center text-white text-center rounded-xl ">
        <p className="text-xs sm:text-sm md:text-xl font-bold">{title}</p>
        <span className="text-[10px] sm:text-sm md:text-base text-center">
          {description}
        </span>
      </div>
    </motion.div>
  );
});

