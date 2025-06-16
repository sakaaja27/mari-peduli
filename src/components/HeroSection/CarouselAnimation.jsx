
import { useEffect, useRef, useState } from "react";

export default function useCarouselAnimation() {
  const trackRef = useRef(null);

  const [cards, setCards] = useState([]);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const initialCards = Array.from(
      trackRef.current.querySelectorAll(".c-card")
    );

    setCards(initialCards);
  }, []);

  useEffect(() => {
    if (cards.length < 3) return;

    function setupCards(cards) {
      cards.forEach((card) => {
        card.classList.remove("highlight", "opacity-60", "fliped");

        card.querySelector(".sector-content")?.classList.add("hidden");

        card.querySelector(".sector-content")?.classList.remove("flex");

        card.querySelector("img")?.classList.add("grayscale");

        card.querySelector("img")?.classList.remove("grayscale-0");
      });

      cards[0].classList.add("opacity-20");

      cards[1].classList.add("highlight");

      cards[1].querySelector(".sector-content")?.classList.remove("hidden");

      cards[1].querySelector(".sector-content")?.classList.add("flex");

      cards[1].querySelector("img")?.classList.remove("grayscale");

      cards[1].querySelector("img")?.classList.add("grayscale-0");

      cards[2].classList.add("opacity-20");
    }

    function animateCard() {
      setCards((prevCards) => {
        if (prevCards.length < 3) return prevCards;

        const movedCard = prevCards[0];

        const newCards = [...prevCards.slice(1), movedCard];

        setupCards(newCards);

        return newCards;
      });
    }

    setupCards(cards);

    intervalRef.current = setInterval(() => animateCard(), 3000);

    return () => clearInterval(intervalRef.current);
  }, [cards]);

  return trackRef;
}
