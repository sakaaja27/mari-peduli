export default function FooterMap() {
  return (
    <div className="lg:w-1/2 w-full">
      <div className="mb-4">
        <IframeMap />
      </div>
      <AdrressMap />
    </div>
  );
}

function IframeMap() {
  return (
    <iframe
      loading="lazy"
      title="mapsgedungti"
      className="w-full h-[170px] rounded shadow"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.4475411397284!2d113.72020707434469!3d-8.15758328172425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695b6ea0e8375%3A0x4618d7137a4cf5c1!2sGedung%20Jurusan%20TI%20Politeknik%20Negeri%20Jember!5e0!3m2!1sid!2ssg!4v1685635062443!5m2!1sid!2ssg"
      frameBorder="0"
       allowFullScreen={true}
    ></iframe>
  );
}

function AdrressMap() {
  return (
    <p className="text-sm leading-relaxed">
      Gd. Teknologi Informasi, Politeknik Negeri Jember,
      <br />
      Lingkungan Panji, Tegalgede, Kec. Kaliwates,
      <br />
      Kabupaten Jember, Jawa Timur 68124
    </p>
  );
}
