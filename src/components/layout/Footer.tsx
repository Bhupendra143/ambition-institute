import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import logo from "../../assets/ambition-logo.png";
const footerLinks = {
  institute: [
    { label: "About ATI", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Facilities", href: "/facilities" },
    { label: "Contact", href: "/contact" },
  ],
  courses: [
    { label: "All Courses", href: "/courses" },
    { label: "MDCT", href: "/courses/mdct" },
    { label: "CDCT", href: "/courses/cdct" },
    { label: "Web Development", href: "/courses/web-development" },
  ],
  resources: [
    { label: "Student Portal", href: "/students" },
    { label: "Blog", href: "/blog" },
    { label: "Downloads", href: "/downloads" },
    { label: "Typing Test", href: "https://typing.ambition.com.np" },
  ],
};

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="
        group
        inline-flex
        items-center
        gap-1
        text-sm
        text-[hsl(var(--muted-foreground))]
        transition-colors
        duration-300
        hover:text-[hsl(var(--primary))]
      "
    >
      {children}

      <ArrowUpRight
        size={13}
        className="
          opacity-0
          -translate-x-1
          translate-y-1
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-70
          [background-image:var(--gradient-mesh)]
        "
      />

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-[hsl(var(--primary-glow)/0.12)]
          blur-3xl
        "
      />

      <div className="container relative mx-auto px-4">
        {/* Main footer */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            {/* Logo */}
            <a
              href="/"
              className="
                inline-flex
                items-center
                gap-3
                transition-transform
                duration-300
                hover:-translate-y-0.5
              "
            >
              <img src={logo} alt="Ambition Logo" className="h-11 w-11" />
              {/* <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-[var(--gradient-primary)]
                  font-bold
                  text-white
                  shadow-[var(--shadow-glow)]
                "
              >
                ATI
              </div> */}

              <div>
                <div className="font-bold tracking-tight">Ambition</div>

                <div className="text-xs text-[hsl(var(--muted-foreground))]">
                  Technical Institute
                </div>
              </div>
            </a>

            <p className="mt-6 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
              Building practical technical skills and creating opportunities
              through quality education and career-focused training.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="
    flex h-10 w-10 items-center justify-center
    rounded-xl
    border border-[hsl(var(--border))]
    bg-[hsl(var(--card)/0.7)]
    text-[hsl(var(--muted-foreground))]
    transition-all duration-300
    hover:-translate-y-1
    hover:border-[hsl(var(--primary)/0.4)]
    hover:text-[hsl(var(--primary))]
    hover:shadow-[var(--shadow-card-hover)]
  "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.7.3-1 1-1Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="
    flex h-10 w-10 items-center justify-center
    rounded-xl
    border border-[hsl(var(--border))]
    bg-[hsl(var(--card)/0.7)]
    text-[hsl(var(--muted-foreground))]
    transition-all duration-300
    hover:-translate-y-1
    hover:border-[hsl(var(--accent)/0.4)]
    hover:text-[hsl(var(--accent))]
    hover:shadow-[var(--shadow-card-hover)]
  "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.75"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              <a
                href="mailto:info@ambition.com.np"
                aria-label="Email"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[hsl(var(--border))]
                  bg-[hsl(var(--card)/0.7)]
                  text-[hsl(var(--muted-foreground))]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[hsl(var(--primary)/0.4)]
                  hover:text-[hsl(var(--primary))]
                  hover:shadow-[var(--shadow-card-hover)]
                "
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Institute */}
          <div>
            <h3 className="text-sm font-semibold">Institute</h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.institute.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-sm font-semibold">Courses</h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact strip */}
        <div
          className="
            grid
            gap-4
            rounded-2xl
            border
            border-[hsl(var(--border))]
            bg-[hsl(var(--card)/0.65)]
            p-5
            backdrop-blur-sm
            md:grid-cols-3
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[hsl(var(--primary)/0.1)]
                text-[hsl(var(--primary))]
              "
            >
              <MapPin size={18} />
            </div>

            <div>
              <p className="text-xs text-[hsl(var(--muted-foreground))]">
                Visit us
              </p>

              <p className="text-sm font-medium">
                Bhimdatta, Kanchanpur, Nepal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[hsl(var(--primary)/0.1)]
                text-[hsl(var(--primary))]
              "
            >
              <Phone size={18} />
            </div>

            <div>
              <p className="text-xs text-[hsl(var(--muted-foreground))]">
                Call us
              </p>

              <p className="text-sm font-medium">+977-XXXXXXXXXX</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[hsl(var(--primary)/0.1)]
                text-[hsl(var(--primary))]
              "
            >
              <Mail size={18} />
            </div>

            <div>
              <p className="text-xs text-[hsl(var(--muted-foreground))]">
                Email us
              </p>

              <p className="text-sm font-medium">info@ambition.com.np</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
    flex
    flex-row
    items-center
    justify-center
    gap-6
    border-t
    border-[hsl(var(--border))]
    py-6
    text-xs
    text-[hsl(var(--muted-foreground))]
  "
        >
          <p>
            © {new Date().getFullYear()} Ambition Technical Institute. All
            rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="/privacy"
              className="transition-colors duration-300 hover:text-[hsl(var(--foreground))]"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition-colors duration-300 hover:text-[hsl(var(--foreground))]"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
