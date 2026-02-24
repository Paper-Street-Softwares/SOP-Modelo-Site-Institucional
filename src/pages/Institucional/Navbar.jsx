import React, { useState, useEffect } from "react";
import { Menu, ChevronDown, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [closeTimer, setCloseTimer] = useState(null);

  const sections = ["home", "office", "service", "team", "reconhecimento"];

  // SCROLL SPY
  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          root: null,
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        },
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const handleOpen = (menu) => {
    if (closeTimer) clearTimeout(closeTimer);
    setOpenDropdown(menu);
  };

  const handleClose = () => {
    const timer = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
    setCloseTimer(timer);
  };

  const linkClass = (id) =>
    `relative hover:text-[#C03D1A] transition duration-500 ${
      activeSection === id ? "" : ""
    }`;

  const underline = (id) =>
    activeSection === id && (
      <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#C03D1A]" />
    );

  return (
    <div className="bg-[#07202D] fixed w-full z-50 border-b border-[#C03D1A]">
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex items-center justify-between py-0">
          {/* LOGO */}
          <div className="w-[45%] tablet2:w-[20%]">
            <img
              src="https://miguelneto.com.br/wp-content/uploads/2025/04/MiguelNeto-LogoNegativo-Color-FundoTransparente.png"
              alt="Miguel Neto Advogados"
              className="w-full"
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden desktop1ex:flex items-center gap-5 text-white text-sm tracking-wide font-mainFont font-light">
            <a href="#home" className={linkClass("home")}>
              HOME
              {underline("home")}
            </a>

            <span className="text-[#C03D1A]">•</span>

            {/* NOSSO ESCRITÓRIO */}
            <div
              className="relative"
              onMouseEnter={() => handleOpen("escritorio")}
              onMouseLeave={handleClose}
            >
              <a href="#office" className={linkClass("office")}>
                NOSSO ESCRITÓRIO{" "}
                <ChevronDown size={16} className="inline ml-1" />
                {underline("office")}
              </a>

              <div
                className={`absolute top-full left-0 mt-4 bg-[#07202D] text-white shadow-xl w-56 py-3 transition-all duration-300
                ${
                  openDropdown === "escritorio"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <a
                  href="#office"
                  className="block px-4 py-2 hover:text-[#C03D1A] duration-500 transition-all"
                >
                  História
                </a>
                <a
                  href="#office"
                  className="block px-4 py-2 hover:text-[#C03D1A] duration-500 transition-all"
                >
                  Missão e Valores
                </a>
                <a
                  href="#office"
                  className="block px-4 py-2 hover:text-[#C03D1A] duration-500 transition-all"
                >
                  Estrutura
                </a>
              </div>
            </div>

            <span className="text-[#C03D1A]">•</span>

            {/* ÁREAS DE ATUAÇÃO */}
            <div
              className="relative"
              onMouseEnter={() => handleOpen("areas")}
              onMouseLeave={handleClose}
            >
              <a href="#service" className={linkClass("service")}>
                ÁREAS DE ATUAÇÃO{" "}
                <ChevronDown size={16} className="inline ml-1" />
                {underline("service")}
              </a>

              <div
                className={`absolute top-full left-0 mt-4 bg-[#07202D] text-white shadow-xl w-64 py-3 transition-all duration-300
                ${
                  openDropdown === "areas"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <a
                  href="#service"
                  className="block px-4 py-2 hover:text-[#C03D1A] duration-500 transition-all"
                >
                  Direito Empresarial
                </a>
                <a
                  href="#service"
                  className="block px-4 py-2 hover:text-[#C03D1A] duration-500 transition-all"
                >
                  Direito Tributário
                </a>
                <a
                  href="#service"
                  className="block px-4 py-2 hover:text-[#C03D1A] duration-500 transition-all"
                >
                  Contencioso Estratégico
                </a>
              </div>
            </div>

            <span className="text-[#C03D1A]">•</span>

            <a href="#team" className={linkClass("team")}>
              ADVOGADOS
              {underline("team")}
            </a>

            <span className="text-[#C03D1A]">•</span>

            <a href="#reconhecimento" className={linkClass("reconhecimento")}>
              RECONHECIMENTOS
              {underline("reconhecimento")}
            </a>

            <span className="text-[#C03D1A]">•</span>

            <a
              href="#contato"
              className="hover:text-[#C03D1A] transition duration-500"
            >
              CONTATO
            </a>
          </div>

          <section className="flex gap-4">
            {" "}
            {/* MOBILE BUTTON */}
            <div className="desktop1ex:hidden flex items-center gap-4">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-[#C03D1A]"
              >
                {mobileOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
            <div className="flex flex-col gap-0">
              <button className="text-white">PT</button>
              <button className="text-white/40 hover:text-white">EN</button>
            </div>
          </section>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#07202D] text-white px-6 pb-6 space-y-4">
          <a href="#home" className="block">
            HOME
          </a>
          <a href="#office" className="block">
            NOSSO ESCRITÓRIO
          </a>
          <a href="#service" className="block">
            ÁREAS DE ATUAÇÃO
          </a>
          <a href="#team" className="block">
            ADVOGADOS
          </a>
          <a href="#reconhecimento" className="block">
            RECONHECIMENTOS
          </a>
          <a href="#contato" className="block">
            CONTATO
          </a>

          <div className="flex gap-3 pt-4 border-t border-white/20">
            <button>PT</button>
            <button className="text-white/50">EN</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
