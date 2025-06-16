import { useEffect, useRef, useState } from "react";

export default function ContentLeft() {
  return (
    <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left z-10">
      <div className="max-w-xl w-full mx-auto">
        <ContentTextLeft />
        <ButtonContentLeft />
      </div>
    </div>
  );
}

export function ContentTextLeft() {
  const [text1State, setText1State] = useState("");
  const [text2State, setText2State] = useState("");
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);

  const text1 = "Belajar Peduli Bumi,";
  const text2 = "Mulai dari Sini";
  const fullText = text1 + text2;
  const text1Length = text1.length;

  useEffect(() => {
    function typeText() {
      if (indexRef.current < fullText.length) {
        const currentChar = fullText.charAt(indexRef.current);

        if (indexRef.current < text1Length) {
          setText1State((prev) => prev + currentChar);
        } else {
          setText2State((prev) => prev + currentChar);
        }

        indexRef.current++;
        timeoutRef.current = setTimeout(typeText, 70);
      }
    }

    typeText();

    return () => clearTimeout(timeoutRef.current);
  }, [fullText,text1Length]);

  return (
    <>
      <h1 className="text-3xl md:text-5xl font-bold text-blue-400 mb-6 break-words">
        <span className="text-blue-400">{text1State}</span>
        <span className="text-green-400">{text2State}</span>
      </h1>
      <p className="mb-6 text-black">
        Platform edukasi digital interaktif untuk memahami isu lingkungan dan
        menemukan solusi berkelanjutan.
      </p>
    </>
  );
}

function ButtonContentLeft() {
  return (
    <a href="#topik">
      <button
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2.5 text-sm rounded-lg shadow"
        data-aos="fade-right"
        data-aos-delay="1500"
      >
        Mulai Pembelajaran
      </button>
    </a>
  );
}
