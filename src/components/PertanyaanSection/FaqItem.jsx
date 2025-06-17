import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./ModalFaqItem";

export default function FaqItem({ question, answer, isOpen, onToggle }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white border border-gray-600/30 rounded-xl min-h-20 p-4 q-card">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onToggle} // Jika diklik, ubah status isOpen
      >
        <p className="text-sm mx-auto font-semibold text-gray-700 mb-2">
          {question}
        </p>
      </div>

      {/* Hanya tampilkan bagian ini jika 'isOpen' true */}
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
      {/* <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        modalContent={
          <>
            <h3 className="text-lg font-bold mb-2">{question}</h3>
            <p className="text-sm text-gray-600">{answer}</p>
          </>
        }
      /> */}
    </div>
  );
}
