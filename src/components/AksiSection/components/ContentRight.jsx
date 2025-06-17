import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function ContentRight({
  description,
  ctaLink,
  title,
  lottieSrc,
}) {
  return (
    <div className="w-full md:w-1/2 space-y-4">
      <TextDescription title={title} description={description} />
      <LinkSrc ctaLink={ctaLink} lottieSrc={lottieSrc} />
    </div>
  );
}

function TextDescription({ title, description }) {
  return (
    <>
      <h2 className="text-green-600 font-bold text-lg sm:text-2xl">{title}</h2>
      <div className="text-gray-600 text-sm">
        {description.map((text, idx) => (
          <p key={idx} className={idx !== 0 ? "mt-2" : ""}>
            {text}
          </p>
        ))}
      </div>
    </>
  );
}

function LinkSrc({ ctaLink, lottieSrc }) {
  return (
    <div className="bg-white rounded-xl p-2 flex items-center justify-center shadow-md w-[100px] h-[40px] sm:w-[120px] sm:h-[50px]">
      <a
        href={ctaLink}
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center w-full h-full"
      >
        <div className="flex items-center justify-center">
          <DotLottieReact
            src={lottieSrc}
            background="transparent"
            speed="1"
            className="w-25 h-25"
            style={{ objectFit: "contain" }}
            loop
            autoplay
          />
        </div>
      </a>
    </div>
  );
}
