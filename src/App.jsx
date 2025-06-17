import AksiSection from "./components/AksiSection/Aksi";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/HeroSection/Hero";
import MateriSection from "./components/MateriSection/Materi";
import PertanyaanSection from "./components/PertanyaanSection/Pertanyaan";
import WawasanSection from "./components/WawasanSection/Wawasan";

export default function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <MateriSection/>
      <WawasanSection/>
      <AksiSection/>
      <PertanyaanSection/>
    </>
  )
}
