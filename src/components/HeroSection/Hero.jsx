import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="pt-28 relative min-h-screen flex items-center"
    >
      <Content />
    </section>
  );
}

function Content() {
  return (
    <div className="content-hero flex flex-col md:flex-row items-start justify-between gap-8 px-4 w-full">
      <ContentLeft />
      <ContentRight />
    </div>
  );
}
