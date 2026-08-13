import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["GitHub", "github"],
  ["Contact", "contact"],
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const cursor = window.scrollY + 120;
      let current = "about";

      navItems.forEach(([, id]) => {
        const section = document.getElementById(id);
        if (section && cursor >= section.offsetTop) current = id;
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-slate-200/90 bg-white/[0.92] shadow-[0_4px_24px_rgba(15,23,42,0.035)]"
          : "border-transparent bg-slate-50/80"
      }`}
    >
      <div className="section-shell flex h-16 items-center justify-between">
        <ScrollLink to="about" smooth duration={420} offset={-68} className="cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-slate-950 font-mono text-[12px] font-bold text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
              RA
            </div>
            <div className="hidden sm:block">
              <p className="text-[13px] font-bold leading-tight text-slate-950">Md. Rajon Ahamad</p>
              <p className="mt-0.5 text-[10px] font-medium text-slate-500">Software Engineer</p>
            </div>
          </div>
        </ScrollLink>

        <nav className="hidden items-center lg:flex">
          {navItems.map(([label, id]) => {
            const active = activeSection === id;
            return (
              <ScrollLink key={id} to={id} smooth duration={420} offset={-64} className="cursor-pointer">
                <span
                  className={`relative block px-3 py-2 text-[12px] font-semibold transition-colors duration-200 ${
                    active ? "text-slate-950" : "text-slate-500 hover:text-slate-950"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-brand-600 transition-all duration-200 ${
                      active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                    }`}
                  />
                </span>
              </ScrollLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:rajon.zhsust15@gmail.com"
            className="hidden h-9 items-center gap-2 rounded-lg bg-slate-950 px-4 text-[12px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 md:inline-flex"
          >
            Contact <FiArrowUpRight size={14} />
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50 lg:hidden"
          >
            {isOpen ? <FiX size={19} /> : <FiMenu size={19} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[440px] opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="section-shell flex flex-col gap-1 py-3">
          {navItems.map(([label, id]) => (
            <ScrollLink
              key={id}
              to={id}
              smooth
              duration={420}
              offset={-64}
              onClick={() => setIsOpen(false)}
              className={`cursor-pointer rounded-lg px-3 py-2.5 text-[13px] font-semibold transition-colors ${
                activeSection === id
                  ? "bg-brand-50 text-brand-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              {label}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
