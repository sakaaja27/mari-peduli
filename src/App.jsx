import AksiSection from "./components/AksiSection/Aksi";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/HeroSection/Hero";
import MateriSection from "./components/MateriSection/Materi";
import PertanyaanSection from "./components/PertanyaanSection/Pertanyaan";
import WawasanSection from "./components/WawasanSection/Wawasan";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <MateriSection/>
      <WawasanSection/>
      <AksiSection/>
      <PertanyaanSection/>
      <Footer/>
    </>
  )
}
