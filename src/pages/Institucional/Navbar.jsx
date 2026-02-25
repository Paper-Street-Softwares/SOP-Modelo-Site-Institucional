import React, { useState, useEffect } from "react";
import { Menu, ChevronDown, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [closeTimer, setCloseTimer] = useState(null);

  const location = useLocation();

  const sections = ["home", "office", "service", "team", "reconhecimento"];

  useEffect(() => {
    if (location.pathname !== "/") return;

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
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(null);
    }
  }, [location.pathname]);

  const routeActive = () => {
    if (location.pathname === "/") return "home";
    if (location.pathname === "/contato") return "contato";
    if (location.pathname === "/about") return "office";
    if (location.pathname.startsWith("/features")) return "service";
    return null;
  };

  const currentRoute = routeActive();

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

  // ======================
  // CLASSES
  // ======================
  const linkClass = (id) =>
    `relative hover:text-primaryLight transition duration-500`;

  const underline = (id) =>
    (activeSection === id || currentRoute === id) && (
      <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-primaryLight" />
    );

  return (
    <div className="bg-primaryDark fixed w-full z-50 border-b-2 border-[#C03D1A]">
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex items-center justify-between py-0">
          {/* LOGO */}
          <div className="w-[45%] tablet2:w-[20%] desktop1ex:w-[20%]">
            <Link to="/">
              <img
                src="https://miguelneto.com.br/wp-content/uploads/2025/04/MiguelNeto-LogoNegativo-Color-FundoTransparente.png"
                alt="Miguel Neto Advogados"
                className="w-full"
              />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden desktop1ex:flex items-center gap-5 text-white text-sm tracking-wide font-mainFont font-light">
            <Link to="/" className={linkClass("home")}>
              HOME
              {underline("home")}
            </Link>

            <span className="text-primaryLight">•</span>

            {/* NOSSO ESCRITÓRIO */}
            <div
              className="relative"
              onMouseEnter={() => handleOpen("escritorio")}
              onMouseLeave={handleClose}
            >
              <Link to="/about" className={linkClass("office")}>
                NOSSO ESCRITÓRIO{" "}
                <ChevronDown size={16} className="inline ml-1" />
                {underline("office")}
              </Link>

              <div
                className={`absolute top-full left-0 mt-4 bg-primaryDark uppercase text-white shadow-xl w-56 py-3 transition-all duration-300
                ${
                  openDropdown === "escritorio"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <Link
                  to="/about"
                  className="block px-4 py-2 hover:text-primaryLight duration-500 transition-all"
                >
                  Sobre Nós
                </Link>
                <a
                  href="#office"
                  className="block px-4 py-2 hover:text-primaryLight duration-500 transition-all"
                >
                  Track Record
                </a>
                <a
                  href="#office"
                  className="block px-4 py-2 hover:text-primaryLight duration-500 transition-all"
                >
                  Carreira
                </a>
              </div>
            </div>

            <span className="text-primaryLight">•</span>

            {/* ÁREAS DE ATUAÇÃO */}
            <div
              className="relative"
              onMouseEnter={() => handleOpen("areas")}
              onMouseLeave={handleClose}
            >
              <Link to="/features" className={linkClass("service")}>
                ÁREAS DE ATUAÇÃO{" "}
                <ChevronDown size={16} className="inline ml-1" />
                {underline("service")}
              </Link>

              <div
                className={`absolute top-full left-0 mt-4 bg-primaryDark uppercase text-white shadow-xl w-64 py-3 transition-all duration-300
                ${
                  openDropdown === "areas"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <Link
                  to="/features/ambiental"
                  className="block px-4 py-2 hover:text-primaryLight duration-500 transition-all"
                >
                  Ambiental, ESG e Energia
                </Link>
                <Link
                  to="/features/compliance"
                  className="block px-4 py-2 hover:text-primaryLight duration-500 transition-all"
                >
                  Compliance e Investigações Corporativas
                </Link>
                <Link
                  to="/features/concorrencial"
                  className="block px-4 py-2 hover:text-primaryLight duration-500 transition-all"
                >
                  Concorrencial
                </Link>
                <Link
                  to="/features/contencioso"
                  className="block px-4 py-2 hover:text-primaryLight duration-500 transition-all"
                >
                  Contencioso
                </Link>
              </div>
            </div>

            <span className="text-primaryLight">•</span>

            <a href="#team" className={linkClass("team")}>
              ADVOGADOS
              {underline("team")}
            </a>

            <span className="text-primaryLight">•</span>

            <a href="#reconhecimento" className={linkClass("reconhecimento")}>
              RECONHECIMENTOS
              {underline("reconhecimento")}
            </a>

            <span className="text-primaryLight">•</span>

            <Link to="/contato" className={linkClass("contato")}>
              CONTATO
              {underline("contato")}
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <section className="flex gap-4">
            <div className="desktop1ex:hidden flex items-center gap-4">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-primaryLight"
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
        <div className="xl:hidden bg-primaryDark text-white px-6 pb-6 space-y-4">
          <Link to="/" className="block">
            HOME
          </Link>
          <Link to="/about" className="block">
            NOSSO ESCRITÓRIO
          </Link>
          <Link to="/features" className="block">
            ÁREAS DE ATUAÇÃO
          </Link>
          <a href="#team" className="block">
            ADVOGADOS
          </a>
          <a href="#reconhecimento" className="block">
            RECONHECIMENTOS
          </a>
          <Link to="/contato" className="block">
            CONTATO
          </Link>

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
