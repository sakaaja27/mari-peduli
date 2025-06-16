import { carouselData } from "../Array";

export default function WawasanSection() {
  return (
    <section class="pt-14 relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-4 w-full">
      <ContentLeft />
      <ContentRight />
    </section>
  );
}

function ContentLeft() {
  return (
    <div class="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left z-10">
      <div class="max-w-xl w-full mx-auto">
        <TitleLeft />
        <DescribeLeft />
        <ButtonLeft />
      </div>
    </div>
  );
}

function TitleLeft() {
  return (
    <h1
      id="typing-text"
      class="text-3xl md:text-3xl font-bold text-blue-400 mb-6 break-words"
      data-aos="fade-right"
      data-aos-delay="500"
    >
      <div className="text-green-500">
        <span id="typed_wawasan" class="text-blue-400">
          Perkaya Wawasanmu di Pojok
        </span>{" "}
        Artikel MariPeduli
      </div>
    </h1>
  );
}

function DescribeLeft() {
  return (
    <p class="mb-6" data-aos="fade-right" data-aos-delay="1000">
      Temukan artikel menarik, tips praktis, dan cerita inspiratif untuk
      memperdalam pengetahuanmu dan mendukung aksi nyata bagi lingkungan.
    </p>
  );
}

function ButtonLeft() {
  return (
    <a href="./content/jurnalWawasan/Wawasan.html">
      <button class="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2.5 text-sm rounded-lg shadow">
        Mulai Membaca Artikel
      </button>
    </a>
  );
}

function ContentRight() {
  return (
    <div class="w-full md:w-1/2 flex justify-center md:justify-end overflow-hidden">
      <div class="relative w-full max-w-2xl overflow-hidden">
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
      </div>
    </div>
  );
}
