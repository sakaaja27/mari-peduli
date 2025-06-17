import { useEffect, useState } from "react";
import { faqList } from "../Array";
import { motion,AnimatePresence } from "framer-motion";
export default function PertanyaanSection() {
  return (
    <section className="pt-14 relative transition-all duration-1000 ease-in-out flex flex-col md:flex-row items-center justify-center gap-8 mb-12 px-4 w-full">
      <div className="w-full mb-8 md:mb-8 text-center z-10">
        <div className="max-w-xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6 break-words">
            <span className="block text-blue-400">Pertanyaan Umum</span>
            <span className="block text-green-400">Pengguna</span>
          </h1>
        </div>
        <div className="q-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mb-20">
            {faqList.map((item) => (
              <FaqItem
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white border border-gray-600/30 rounded-xl p-4 q-card">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <p className="text-sm font-semibold text-gray-700 mb-2">{question}</p>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden text-sm text-gray-600 mt-2"
          >
            <p className="line-clamp-3">{answer}</p>
            <button
              onClick={openModal}
              className="text-blue-500 text-sm mt-2 underline"
            >
              Selengkapnya
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h3 className="text-lg font-bold mb-2">{question}</h3>
        <p className="text-sm text-gray-600">{answer}</p>
      </Modal>
    </div>
  );
}

function Modal({ isOpen, onClose,children }) {
  useEffect(() => {
    const HandleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", HandleKeyDown);
    return () => document.removeEventListener("keydown", HandleKeyDown);
  }, [onClose]);
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-xl bg-white rounded-xl shadow-xl p-6"
            initial={{
              opacity: 0,
              scale: 0.9,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              translateX: "-50%",
              translateY: "-50%",
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              translateX: "-50%",
              translateY: "-50%",
            }}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
              onClick={onClose}
            >
              ×
            </button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
