export default function ContentText() {
  return (
    <div className="max-w-xl w-full mx-auto">
      <TitleText />
      <TextDescription />
    </div>
  );
}

function TitleText() {
  return (
    <h1
      id="typing-text"
      className="text-2xl md:text-3xl font-bold text-blue-400 break-words"
    >
      <span id="typed" className="block text-blue-400">
        Mulai Petualangan
      </span>
      <span id="typed-span" className="block text-green-400">
        Belajarmu!
      </span>
    </h1>
  );
}

function TextDescription() {
  return (
    <p className=" mx-auto text-center max-w-md">
      Temukan beragam modul interaktif untuk memahami isu lingkungan terkini dan
      bagaimana kamu bisa menjadi bagian dari solusi.
    </p>
  );
}
