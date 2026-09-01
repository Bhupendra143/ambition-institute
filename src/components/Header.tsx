import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/ambition-logo.png";
import { ChevronDown, Menu, X, Home, GraduationCap, Info, Phone, ExternalLink } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface SubLink {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: SubLink[];
  isExternal?: boolean;
  isButton?: boolean;
  icon?: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: <Home className="w-4 h-4 shrink-0" /> },
  {
    label: "Courses",
    icon: <GraduationCap className="w-4 h-4 shrink-0" />,
    children: [
      { label: "MDCT (Computer IT)", href: "/courses/mdct" },
      { label: "Hardware & Networking", href: "/courses/hardware" },
    ],
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
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Filter out buttons for index positioning
  const mainNavItems = NAV_ITEMS.filter((item) => !item.isButton);

  // Match the active index automatically based on current URL path
  const getActiveIndex = () => {
    const currentPath = location.pathname;
    const index = mainNavItems.findIndex((item) => {
      if (item.href === currentPath) return true;
      if (item.children) {
        return item.children.some((child) => child.href === currentPath);
      }
      return false;
    });
    return index !== -1 ? index : 0;
  };

  const activeIndex = getActiveIndex();
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const navItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Update sliding pill position when path changes or on resize
  useEffect(() => {
    const activeEl = navItemRefs.current[activeIndex];
    if (activeEl) {
      setPillStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [activeIndex, location.pathname]);

  return (
    <header className="relative z-50 w-full px-2 pb-6 sm:px-6">
      <div className="relative max-w-7xl mx-auto bg-transparent text-foreground">
        <div className="px-2 sm:px-4 py-2 flex items-center justify-between min-h-16 gap-4">
          
          {/* ====== Brightened Logo + Purple ATI Text ====== */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="group flex items-center gap-3 focus:outline-none py-1">
              <img
                src={logo}
                alt="Ambition Technical Institute Logo"
                className="w-auto h-12 sm:h-16 object-contain filter brightness-125 contrast-125 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300 ease-out group-hover:scale-105 group-hover:brightness-150 block"
              />
              <span className="text-2xl sm:text-3xl font-black tracking-wider text-[#9d72ff] drop-shadow-[0_0_10px_rgba(157,114,255,0.3)] transition-all duration-300 group-hover:scale-105 select-none">
                ATI
              </span>
            </Link>
          </div>

          {/* ====== Navigation Capsule ====== */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <nav className="relative bg-card/80 backdrop-blur-md border border-border/80 p-1.5 rounded-full flex items-center shadow-md">
              
              {/* Animated Sliding Pill Background Indicator */}
              <div
                className="absolute h-[calc(100%-12px)] top-1.5 bg-secondary rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border border-border shadow-sm"
                style={{
                  left: `${pillStyle.left}px`,
                  width: `${pillStyle.width}px`,
                }}
              />

              {mainNavItems.map((item, index) => (
                <div
                  key={item.label}
                  ref={(el) => {
                    if (el) navItemRefs.current[index] = el;
                  }}
                  className="relative z-10"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => item.children && setActiveDropdown(null)}
                >
                  {item.children ? (
                    <button
                      className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                        activeIndex === index ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:scale-105"
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                          activeDropdown === item.label ? "rotate-180 text-foreground" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <NavLink
                      to={item.href || "/"}
                      className={({ isActive }) =>
                        `inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                          isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:scale-105"
                        }`
                      }
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </NavLink>
                  )}

                  {/* Dropdown Menu Animated */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-3 w-52 z-50 animate-in fade-in zoom-in-95 duration-200">
                      <div className="bg-card/95 backdrop-blur-md text-card-foreground rounded-xl shadow-2xl border border-border py-2 overflow-hidden">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.label}
                            to={child.href}
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-xs font-semibold transition-colors duration-150 ${
                                isActive ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* ====== Right Actions Capsule ====== */}
          <div className="hidden md:flex items-center shrink-0">
            <div className="bg-card/80 backdrop-blur-md border border-border/80 p-1.5 rounded-full flex items-center gap-2 shadow-md">
              <ThemeToggle />

              {NAV_ITEMS.filter((item) => item.isButton).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="px-4 py-2 text-xs font-semibold rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary active:scale-95 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ====== Mobile Menu Button ====== */}
          <div className="md:hidden ml-auto flex items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:opacity-80 active:scale-90 transition-transform focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* ====== Mobile Navigation Drawer ====== */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border border-border rounded-2xl px-6 py-4 space-y-3 mt-2 text-card-foreground animate-in fade-in slide-in-from-top-4 duration-300">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <span className="text-xs font-bold uppercase text-muted-foreground tracking-wider inline-flex items-center gap-2">
                      {item.icon} {item.label}
                    </span>
                    <div className="mt-1 pl-5 space-y-1">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            `block py-1 text-xs font-semibold transition-colors ${
                              isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : item.isButton ? (
                  <a
                    href={item.href}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 mt-2 px-4 py-2 text-xs font-bold rounded-full bg-secondary text-foreground border border-border hover:bg-secondary/80 active:scale-95 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    to={item.href || "/"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `inline-flex items-center gap-2 py-1 text-sm font-semibold transition-colors ${
                        isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
                      }`
                    }
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
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