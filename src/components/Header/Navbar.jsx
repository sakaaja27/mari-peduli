import { useState } from "react";

export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggleOnClick = () => {
    setIsToggle((prev) => !prev);
  };
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md fixed top-0 z-40">
      <LogoHeader />
      <ItemNavbar className="hidden md:flex space-x-6 justify-center flex-1" />
      <HamburgerButton onToggleClick={handleToggleOnClick} />
      <MobileNav isVisible={isToggle} />
    </nav>
  );
}

function LogoHeader() {
  return (
    <div className="logo-header flex items-center">
      <a href="#hero">
        <img
          src="Peduli_icon.png"
          alt="maripeduli"
          className="h-12 w-auto"
          draggable="false"
        />
      </a>
    </div>
  );
}

function ItemNavbar({ className = "" }) {
  return (
    <div className={`nav-item ${className}`}>
      <a
        href="#topik"
        className="text-gray-700 hover:text-green-600 font-medium"
      >
        Topik Belajar
      </a>
      <a
        href="#wawasan"
        className="text-gray-700 hover:text-green-600 font-medium"
      >
        Sumber Daya
      </a>
      <a
        href="#aksi_kami"
        className="text-gray-700 hover:text-green-600 font-medium"
      >
        Aksi Kami
      </a>
      <a
        href="#pertanyaan"
        className="text-gray-700 hover:text-green-600 font-medium"
      >
        Pertanyaan
      </a>
    </div>
  );
}

function HamburgerButton({ onToggleClick }) {
  return (
    <div className="hamburger-button md:hidden flex items-center">
      <button onClick={onToggleClick}>
        <svg
          className="w-8 h-8 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}

export function MobileNav({ isVisible }) {
  return (
    <div
      id="mobile-nav"
      className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-lg z-30 px-6 py-4 transition-all duration-300 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <ItemNavbar className="flex flex-col space-y-2" />
    </div>
  );
}
