import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <p className="mb-4 font-medium text-[hsl(var(--primary))]">
            AMBITION TECHNICAL INSTITUTE
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Learn Skills.
            <br />
            <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
              Build Your Future.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-[hsl(var(--muted-foreground))]">
            Practical technical education designed to build
            real-world skills and opportunities.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              className="
                rounded-xl
                bg-[var(--gradient-primary)]
                px-6 py-3
                font-semibold
                text-white
                shadow-[var(--shadow-card)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[var(--shadow-card-hover)]
              "
            >
              Explore Courses
            </button>

            <button
              className="
                rounded-xl
                border
                border-[hsl(var(--border))]
                bg-[hsl(var(--card))]
                px-6 py-3
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[hsl(var(--primary))]
              "
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
