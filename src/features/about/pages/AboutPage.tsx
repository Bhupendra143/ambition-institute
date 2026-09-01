import React from "react";
import { ArrowRight, Target } from "lucide-react";
import logo from "../../../assets/ambition-logo.png";

const AboutPage: React.FC = () => {
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
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About us</p>
                <h1 className="mt-1 text-2xl font-black tracking-tight text-foreground">Ambition Technical Institute</h1>
              </div>
            </div>

            <div className="mt-8 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                <Target className="h-3.5 w-3.5" />
                Learning with purpose
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                A technical institute focused on learning, discipline, and growth.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
                <p>
                  Ambition Technical Institute is dedicated to providing quality education and practical training for students who want to build a strong future.
                  We focus on technical knowledge, professional skills, and a learning environment that supports progress, confidence, and responsibility.
                </p>
                <p>
                  Our aim is to help students develop the abilities they need to succeed in their education and in their chosen career path. Through structured learning, guided instruction, and consistent support, we help learners move forward with clarity and purpose.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                View courses
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Contact us
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
