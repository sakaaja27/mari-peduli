import { articleData } from "../Array";
import ContentCard from "./ContentCard";
import ContentText from "./ContentText";

export default function MateriSection() {
  return (
    <section
      id="topik"
      className="pt-14 relative flex flex-col md:flex-row items-center justify-center gap-8 px-4 w-full"
    >
      <div className="w-full text-center md:text-center z-10">
        <ContentText />
        <ContentCard articleData={articleData} />
      </div>
    </section>
  );
}
