import { motion,AnimatePresence } from "framer-motion";

export default function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40" // Memenuhi layar, transparan hitam, di belakang modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-xl bg-white rounded-xl shadow-xl p-6" // center posisi
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
            {/* children di FaqItem itu ngirim h3 dan p sbgai children untuk ditampilkan di modal */}
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
