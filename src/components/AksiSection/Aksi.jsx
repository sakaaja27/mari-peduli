import { contentAksi } from "../Array";

import ContentTop from "./ContentTop";
import CardContent from "./CardContent";
export default function AksiSection() {
  return (
    <section className="pt-24 relative">
      <ContentTop />
      {contentAksi.map((item) => (
        <CardContent key={item.id} {...item} />
      ))}
    </section>
  );
}




