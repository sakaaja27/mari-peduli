import FooterAboutMe from "./FooterAboutMe";
import FooterFitures from "./FooterFeature";
import FooterMap from "./FooterMap";
import FooterSosmed from "./FooterSosialMeda";

export default function GridSection() {
  return (
    <div className="mt-6 flex flex-col lg:flex-row lg:items-start gap-8">
      <FooterMap />
      <FooterAboutMe />
      <FooterFitures />
      <FooterSosmed />
    </div>
  );
}
