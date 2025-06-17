export default function ContentLeft() {
  return (
    <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left z-10">
      <div className="max-w-xl w-full mx-auto">
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
      className="text-3xl md:text-3xl font-bold text-blue-400 mb-6 break-words"
      data-aos="fade-right"
      data-aos-delay="500"
    >
      <div className="text-green-500">
        <span id="typed_wawasan" className="text-blue-400">
          Perkaya Wawasanmu di Pojok
        </span>{" "}
        Artikel MariPeduli
      </div>
    </h1>
  );
}

function DescribeLeft() {
  return (
    <p className="mb-6" data-aos="fade-right" data-aos-delay="1000">
      Temukan artikel menarik, tips praktis, dan cerita inspiratif untuk
      memperdalam pengetahuanmu dan mendukung aksi nyata bagi lingkungan.
    </p>
  );
}

function ButtonLeft() {
  return (
    <a href="./content/jurnalWawasan/Wawasan.html">
      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2.5 text-sm rounded-lg shadow">
        Mulai Membaca Artikel
      </button>
    </a>
  );
}
