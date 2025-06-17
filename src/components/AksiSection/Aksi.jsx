import { contentAksi } from "../Array";

import ContentTop from "./ContentTop";
import CardContent from "./CardContent";
export default function AksiSection() {
  return (
    <section id="aksi_kami" className="pt-24 relative">
      <ContentTop />
      {contentAksi.map((item, index) => (
        <CardContent
          itemData={item}
          key={item.id}
          isFirstCard={index === 0}
        />
      ))}
    </section>
  );
}
