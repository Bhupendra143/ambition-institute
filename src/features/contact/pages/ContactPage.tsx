import React from "react";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import logo from "../../../assets/ambition-logo.png";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+977-01-XXXXXXX",
    href: "tel:+977010000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@ambition.com.np",
    href: "mailto:info@ambition.com.np",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Kathmandu, Nepal",
    href: "https://maps.google.com/?q=Kathmandu+Nepal",
  },
];

const ContactPage: React.FC = () => {
  return (
    <main className="w-full text-foreground">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section className="rounded-[2rem] border border-border bg-card/80 shadow-[var(--shadow-card)] backdrop-blur-sm">
          <div className="px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-border bg-background p-2 shadow-[var(--shadow-card)]">
                <img src={logo} alt="Ambition Technical Institute logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
                <h1 className="mt-1 text-2xl font-black tracking-tight text-foreground">Ambition Technical Institute</h1>
              </div>
            </div>

            <div className="mt-8 max-w-3xl">
              <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                We are here to help.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
                For course information, admission support, and general inquiries, please contact our team. We will be happy to guide you with the information you need.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-[1.25rem] border border-border bg-background/80 p-4 transition-colors hover:bg-muted"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
                    <p className="mt-1 text-sm font-medium text-foreground sm:text-base">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-border bg-background/80 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Office hours</p>
                  <h3 className="mt-1 text-xl font-black text-foreground">Available during working hours</h3>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Monday - Friday:</span> 9:00 AM - 5:00 PM
                </div>
                <div className="rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Saturday:</span> 10:00 AM - 3:00 PM
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                Explore courses
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@ambition.com.np"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Email us
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;