
import { motion } from "framer-motion";

import useCarouselAnimation from "./CarouselAnimation";
import { carouselImages } from "../Array";

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
  const trackRef = useCarouselAnimation();

  return (
    <div
      id="carousel-track"
      ref={trackRef}
      className="flex transition-transform duration-700 ease-in-out w-fit"
    >
      {carouselImages.map((image) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="c-card flex-shrink-0 w-36 sm:w-52 md:w-80 h-full px-1 md:px-2 relative transition-all duration-700 ease-in-out"
        >
          <img
            src={image.src}
            alt={image.alt}
            draggable="false"
            className="rounded-xl w-full h-full object-cover transition-all duration-700 ease-in-out"
          />
          <div className="sector-content absolute left-1 right-1 top-0 bottom-0 flex flex-col items-center justify-center text-white text-center rounded-xl hidden">
            <p className="text-xs sm:text-sm md:text-x  l font-bold">
               {image.title}
            </p>
            <span className="text-[10px] sm:text-sm md:text-base text-center">
              {image.description}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
