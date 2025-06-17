import { socialLinks } from "../Array";

export default function FooterSosmed() {
  return (
    <div className="lg:w-1/4 w-full">
      <h4 className="text-lg font-semibold mb-2">Sosial Media</h4>
      <FooterLinkList items={socialLinks} />
    </div>
  );
}

function FooterLinkList({ items = [] }) {
  return (
    <ul className="space-y-2 text-sm">
      {items.map((item, index) => (
        <li key={index}>
          <i className={`bx ${item.icon || "bx-chevron-right"}`}></i>{" "}
          <a
            href={item.href}
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
