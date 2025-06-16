export default function ContentCard({ articleData }) {
  return (
    <div className="grid place-items-center px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-14 md:gap-x-6">
        {articleData.map((item, index) => (
          <CardArticle
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            link={item.link}
            delay={item.delay}
          />
        ))}
      </div>
    </div>
  );
}

function CardArticle({ imgSrc, title, link, delay }) {
  return (
    <article
      className="relative overflow-hidden group"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <CardImage imgSrc={imgSrc} title={title} />
      <CardText link={link} title={title} />
    </article>
  );
}

function CardImage({ imgSrc, title }) {
  return (
    <div tabIndex={0} className="focus:outline-none">
      <img src={imgSrc} alt={title} className="w-[328px] rounded-2xl" />
    </div>
  );
}

function CardText({ link, title }) {
  return (
    <div className="absolute bottom-[-5rem] left-0 right-0 mx-auto w-[230px] bg-white p-6 shadow-lg rounded-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-[-7rem] group-focus-within:opacity-100 group-focus-within:translate-y-[-7rem] group-active:opacity-100 group-active:translate-y-[-7rem] transition-all duration-700">
      <span className="block text-sm mb-1 text-gray-500">{title}</span>
      <CardLink link={link} />
    </div>
  );
}

function CardLink({ link }) {
  return (
    <a
      href={link}
      className="text-sm font-medium text-blue-500 hover:underline"
    >
      Ayo Belajar
    </a>
  );
}
