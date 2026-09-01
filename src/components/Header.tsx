import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/ambition-logo.png"; // Replace with your logo path
import { ChevronDown, Menu, X, Sun, Moon, Home, GraduationCap, Info, Phone, ExternalLink } from "lucide-react";

interface SubLink {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  active?: boolean;
  children?: SubLink[];
  isExternal?: boolean;
  isButton?: boolean;
  icon?: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", active: true, icon: <Home className="w-4 h-4 shrink-0" /> },
  {
  label: "Courses",
  href: "/courses",
  icon: <GraduationCap className="w-4 h-4 shrink-0" />,
},
  { label: "About Us", href: "/about", icon: <Info className="w-4 h-4 shrink-0" /> },
  { label: "Contact", href: "/contact", icon: <Phone className="w-4 h-4 shrink-0" /> },
  {
    label: "Student Portal",
    href: "https://students.ambition.com.np/",
    isExternal: true,
    isButton: true,
  },
];

export const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // States & Refs for sliding active pill indicator
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const navItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Recalculate sliding pill indicator position on index change or window resize
  useEffect(() => {
    const activeEl = navItemRefs.current[activeIndex];
    if (activeEl) {
      setPillStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [activeIndex]);

  return (
    <header className="relative z-50 w-full pt-2 sm:pt-4 px-2 sm:px-6">
      {/* Outer Header Container */}
      <div className="relative max-w-7xl mx-auto bg-transparent text-white">
        
        {/* Three-column layout: Left (Logo), Center (Nav Links), Right (Actions Capsule) */}
        <div className="px-2 sm:px-4 py-2 flex items-center justify-between min-h-14 gap-4">
          
          {/* ====== Left: Logo Container ====== */}
          <div className="flex items-center shrink-0">
            <a href="/" className="block focus:outline-none">
              <img
                src={logo}
                alt="Ambition Technical Institute Logo"
                className="w-auto h-10 sm:h-12 object-contain drop-shadow-md transition-transform hover:scale-105 block"
              />
            </a>
          </div>

          {/* ====== Center: Navigation Capsule ====== */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <nav className="relative bg-slate-900/80 backdrop-blur-md border border-white/10 p-1.5 rounded-full flex items-center shadow-inner">
              
              {/* Animated Sliding Background Pill */}
              <div
                className="absolute h-[calc(100%-12px)] top-1.5 bg-slate-800 rounded-full transition-all duration-300 ease-out border border-white/10 shadow-md"
                style={{
                  left: `${pillStyle.left}px`,
                  width: `${pillStyle.width}px`,
                }}
              />

              {NAV_ITEMS.filter((item) => !item.isButton).map((item, index) => (
                <div
                  key={item.label}
                  ref={(el) => {
                    if (el) navItemRefs.current[index] = el;
                  }}
                  className="relative z-10"
                  onMouseEnter={() => {
                    if (item.children) setActiveDropdown(item.label);
                  }}
                  onMouseLeave={() => {
                    if (item.children) setActiveDropdown(null);
                  }}
                >
                  {item.children ? (
                    <button
                      onClick={() => setActiveIndex(index)}
                      className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                        activeIndex === index ? "text-white" : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setActiveIndex(index)}
                      className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-colors ${
                        activeIndex === index ? "text-white" : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-3 w-52 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="bg-slate-900/95 backdrop-blur-md text-slate-100 rounded-xl shadow-2xl border border-white/10 py-2 overflow-hidden">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-xs font-semibold hover:bg-slate-800 hover:text-white transition-colors"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* ====== Right: Actions Capsule (Matching Middle Nav Style) ====== */}
          <div className="hidden md:flex items-center shrink-0">
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-1.5 rounded-full flex items-center gap-2 shadow-inner">
              
              {/* Theme Switcher Button */}
              <button
                onClick={toggleTheme}
                className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-all focus:outline-none cursor-pointer"
                aria-label="Toggle Theme"
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-200" />
                )}
              </button>

              {/* Student Portal CTA Button */}
              {NAV_ITEMS.filter((item) => item.isButton).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="px-4 py-2 text-xs font-semibold rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.label}</span>
                </a>
              ))}

            </div>
          </div>

          {/* ====== Mobile Controls ====== */}
          <div className="md:hidden ml-auto flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-200" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* ====== Mobile Navigation Drawer ====== */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 space-y-3 mt-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400 tracking-wider inline-flex items-center gap-2">
                      {item.icon} {item.label}
                    </span>
                    <div className="mt-1 pl-5 space-y-1">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block py-1 text-xs font-semibold text-slate-200 hover:text-emerald-400"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : item.isButton ? (
                  <a
                    href={item.href}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 mt-2 px-4 py-2 text-xs font-bold rounded-full bg-slate-800 text-white border border-white/10 hover:bg-slate-700 transition-opacity"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {item.label}
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 py-1 text-sm font-semibold text-slate-200 hover:text-emerald-400"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;