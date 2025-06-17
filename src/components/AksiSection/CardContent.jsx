import { useEffect, useRef, useState } from "react";
import CardImageLeft from "./components/CardImageLeft";
import ContentRight from "./components/ContentRight";
export default function CardContent({ itemData, isFirstCard }) {
  const cardRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    if (isFirstCard) return; 

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null, // Mengamati viewport sebagai root
        threshold: 0.1, // Pemicu saat 10% elemen terlihat
      }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Cleanup function untuk IntersectionObserver
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isFirstCard]); // Dependensi: hanya re-run jika isFirstCard berubah

  // Kelas untuk transformasi (naik/turun)
  const cardTransformClass = isFirstCard
    ? "" //card pertama tidak ada perubahan
    : isIntersecting
    ? "-translate-y-[80%] md:-translate-y-[80%]"
    : "translate-y-0 md:translate-y-0";

  // Kelas untuk pointer events (agar kartu tidak bisa diklik saat "turun" sebagian)
  const pointerEventsClass =
    !isIntersecting && !isFirstCard
      ? "pointer-events-none"
      : "pointer-events-auto";

  // Gabungkan kelas-kelas transisi dan transformasi
  const cardClasses = `
    bg-gray-100 shadow-xl rounded-xl p-4 sm:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 border border-gray-400/30
    ${!isFirstCard ? "transition-transform duration-700 ease-out" : ""}
    ${cardTransformClass}
    ${!isFirstCard ? pointerEventsClass : ""}
  `;

  return (
    <div
      ref={cardRef}
      className={`relative z-20 mb-0 pb-0 w-full max-w-6xl mx-auto px-4 ${
        isFirstCard ? "" : "mb-[-300px] md:mb-[-400px]"
      }`}
    >
      <div className={cardClasses}>
        <CardImageLeft
          imgAlt={itemData.imgAlt}
          imgSrc={itemData.imgSrc}
          tagIcon={itemData.tagIcon}
          tagText={itemData.tagText}
          heading={itemData.heading}
          subheading={itemData.subheading}
        />
        <ContentRight
          title={itemData.title}
          description={itemData.description}
          ctaLink={itemData.ctaLink}
          lottieSrc={itemData.lottieSrc}
        />
      </div>
    </div>
  );
}
