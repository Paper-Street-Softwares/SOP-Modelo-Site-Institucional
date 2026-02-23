import React, { useState, useEffect } from "react";
import { Menu, ChevronDown, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState("home");

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
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* LOGO */}
          <div className="w-[200px]">
            <img
              src="https://miguelneto.com.br/wp-content/uploads/2025/04/MiguelNeto-LogoNegativo-Color-FundoTransparente.png"
              alt="Miguel Neto Advogados"
              className="w-full"
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-5 text-white text-sm tracking-wide font-mainFont font-light">
            {/* HOME */}
            <a href="#home" className={linkClass("home")}>
              HOME
              {underline("home")}
            </a>

            <span className="text-[#C03D1A]">•</span>

            {/* NOSSO ESCRITÓRIO */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("escritorio")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a href="#office" className={linkClass("office")}>
                NOSSO ESCRITÓRIO{" "}
                <ChevronDown size={16} className="inline ml-1" />
                {underline("office")}
              </a>

              {openDropdown === "escritorio" && (
                <div className="absolute top-full left-0 mt-4 bg-[#07202D] text-white shadow-xl w-56 py-3">
                  <a
                    href="#office"
                    className="block px-4 py-2 hover:text-[#C03D1A]"
                  >
                    História
                  </a>
                  <a
                    href="#office"
                    className="block px-4 py-2 hover:text-[#C03D1A]"
                  >
                    Missão e Valores
                  </a>
                  <a
                    href="#office"
                    className="block px-4 py-2 hover:text-[#C03D1A]"
                  >
                    Estrutura
                  </a>
                </div>
              )}
            </div>

            <span className="text-[#C03D1A]">•</span>

            {/* ÁREAS DE ATUAÇÃO */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("areas")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a href="#service" className={linkClass("service")}>
                ÁREAS DE ATUAÇÃO{" "}
                <ChevronDown size={16} className="inline ml-1" />
                {underline("service")}
              </a>

              {openDropdown === "areas" && (
                <div className="absolute top-full left-0 mt-4 bg-[#07202D] text-white shadow-xl w-64 py-3">
                  <a
                    href="#service"
                    className="block px-4 py-2 hover:text-[#C03D1A]"
                  >
                    Direito Empresarial
                  </a>
                  <a
                    href="#service"
                    className="block px-4 py-2 hover:text-[#C03D1A]"
                  >
                    Direito Tributário
                  </a>
                  <a
                    href="#service"
                    className="block px-4 py-2 hover:text-[#C03D1A]"
                  >
                    Contencioso Estratégico
                  </a>
                </div>
              )}
            </div>

            <span className="text-[#C03D1A]">•</span>

            {/* ADVOGADOS */}
            <a href="#team" className={linkClass("team")}>
              ADVOGADOS
              {underline("team")}
            </a>

            <span className="text-[#C03D1A]">•</span>

            {/* RECONHECIMENTOS */}
            <a href="#reconhecimento" className={linkClass("reconhecimento")}>
              RECONHECIMENTOS
              {underline("reconhecimento")}
            </a>

            <span className="text-[#C03D1A]">•</span>

            {/* CONTATO */}
            <a
              href="#contato"
              className="hover:text-[#C03D1A] transition duration-500"
            >
              CONTATO
            </a>

            {/* LANG */}
            <div className="flex gap-2 ml-4">
              <button className="text-white">PT</button>
              <button className="text-white/40 hover:text-white">EN</button>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-[#C03D1A]"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#07202D] text-white px-6 pb-6 space-y-4">
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
