export default function CardImageLeft({
  imgSrc,
  imgAlt,
  tagText,
  tagIcon,
  heading,
  subheading,
}) {
  return (
    <div className="w-full md:w-1/2 relative">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="rounded-xl object-cover w-full h-auto"
      />
      <ContentTag tagText={tagText} tagIcon={tagIcon} />
      <ContentHead heading={heading} subheading={subheading}/>
    </div>
  );
}

function ContentTag({ tagIcon, tagText }) {
  return (
    <div className="absolute top-3 mx-3 bg-white px-2 py-1 rounded-full text-xs sm:text-sm font-semibold shadow flex items-center gap-1">
      {tagText} <span className="text-yellow-500">{tagIcon}</span>
    </div>
  );
}

function ContentHead({heading, subheading}) {
  return (
    <div className="absolute bottom-4 left-4 text-white" data-aos="fade-right">
      <h3 className="text-base sm:text-xl font-semibold">{heading}</h3>
      <p className="text-xs sm:text-sm">{subheading}</p>
    </div>
  );
}
