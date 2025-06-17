import { footerLinks } from "../Array";
export default function FooterFitures() {
  return (
    <div className="lg:w-1/6 w-full">
      <h4 className="text-lg font-bold mb-2">MariPeduli</h4>
      <FooterLinkList items={footerLinks} />
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
