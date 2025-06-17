
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";

export default function WawasanSection() {
  return (
    <section className="pt-14 relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-4 w-full">
      <ContentLeft />
      <ContentRight />
    </section>
  );
}




