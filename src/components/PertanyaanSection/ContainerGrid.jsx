import { faqList } from "../Array";
import FaqItem from "./FaqItem";
export default function ContainerGrid({ activeFaqId, handleFaqClick }) {
  return (
    <div className="q-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 px-4 mb-20 ">
        {faqList.map((item) => (
          <div key={item.id}>
            <FaqItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={activeFaqId === item.id}
              onToggle={() => handleFaqClick(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
