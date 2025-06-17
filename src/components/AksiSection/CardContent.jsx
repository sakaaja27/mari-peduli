
import CardImageLeft from "./components/CardImageLeft";
import ContentRight from "./components/ContentRight";
export default function CardContent({
  imgSrc,
  imgAlt,
  tagText,
  tagIcon,
  heading,
  subheading,
  title,
  description,
  ctaLink,
  lottieSrc,
}) {
  return (
    <div className="relative z-20 w-full max-w-6xl mx-auto px-4">
      <div className="bg-gray-100 shadow-xl rounded-xl p-4 sm:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 border border-gray-400/30">
        <CardImageLeft
          imgAlt={imgAlt}
          imgSrc={imgSrc}
          tagIcon={tagIcon}
          tagText={tagText}
          heading={heading}
          subheading={subheading}
        />
        <ContentRight
          title={title}
          description={description}
          ctaLink={ctaLink}
          lottieSrc={lottieSrc}
        />
      </div>
    </div>
  );
}




