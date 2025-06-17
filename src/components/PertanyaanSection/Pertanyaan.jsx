import { useState } from "react";
import ContainerGrid from "./ContainerGrid";

export default function PertanyaanSection() {
  const [activeFaqId, setActiveFaqId] = useState(null);
  const handleFaqClick = (id) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };
  return (
    <section className="pt-14 relative transition-all duration-1000 ease-in-out flex flex-col md:flex-row items-center justify-center gap-8 mb-12 px-4 w-full">
      <div className="w-full mb-8 md:mb-8 text-center z-10">
        <div className="max-w-xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6 break-words">
            <span className="block text-blue-400">Pertanyaan Umum</span>
            <span className="block text-green-400">Pengguna</span>
          </h1>
        </div>
        <ContainerGrid activeFaqId={activeFaqId} handleFaqClick={handleFaqClick}/>
      </div>
    </section>
  );
}
