import { carouselData } from "../Array";
export default function ContentRight() {
  return (
    <div className="w-full md:w-1/2 flex justify-center md:justify-end overflow-hidden">
      <div className="relative w-full max-w-2xl overflow-hidden">
        <CarouselRight />
      </div>
    </div>
  );
}

function CarouselRight() {
  return (
    <div className="flex space-x-4">
      {carouselData.map((item, index) => (
        <CarouselCard {...item} isActive={index === 0} key={index} />
      ))}
    </div>
  );
}

function CarouselCard({ imgSrc, alt, title, description, link, isActive }) {
  return (
    <div
      className={`carousel-card ${
        isActive ? "active-card" : "inactive-card"
      } flex-shrink-0 w-72 md:w-80 transition-all duration-500`}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 h-full flex flex-col">
        <img src={imgSrc} alt={alt} className="w-full h-48 object-cover" />
        <CardBody title={title} description={description} link={link} />
      </div>
    </div>
  );
}

function CardBody({ title, description, link }) {
  return (
    <div className="card-body p-4 flex-1 flex flex-col transition-all duration-300">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3 flex-1">{description}</p>
      <a
        href={link}
        className="text-green-600 text-sm font-medium hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Baca Jurnal
      </a>
    </div>
  );
}
