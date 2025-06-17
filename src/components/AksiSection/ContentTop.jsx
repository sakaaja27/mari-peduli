export default function ContentTop() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mb-12 px-4 w-full">
      <div className="w-full text-center z-10">
        <TitleTop />
      </div>
    </div>
  );
}
function TitleTop() {
  return (
    <div className="max-w-xl w-full mx-auto">
      <h1
        id="typing-text"
        className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-4 break-words"
      >
        <span id="typed" className="block text-blue-400">
          Yuk, Jadi Bagian dari
        </span>
        <span id="typed-span" className="block text-green-400">
          Gerakan MariPeduli
        </span>
      </h1>
    </div>
  );
}
