import { useMemo, useState } from "react";
import { Search, Users, X } from "lucide-react";

import CourseCard, {
  type Course,
} from "../components/CourseCard";

const courses: Course[] = [
  {
    id: 1,
    title: "Web Development",
    category: "Development",
    description:
      "Learn modern web technologies and build responsive, professional websites from scratch.",
    duration: "6 Months",
    students: "120 Students",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Graphic Designing",
    category: "Design",
    description:
      "Develop your creativity and learn professional graphic design tools and techniques.",
    duration: "6 Months",
    students: "95 Students",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Computer Hardware",
    category: "Hardware",
    description:
      "Understand computer hardware, networking components, maintenance, and troubleshooting.",
    duration: "3 Months",
    students: "86 Students",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Digital Marketing",
    category: "Marketing",
    description:
      "Learn digital marketing strategies including SEO, social media, content and advertising.",
    duration: "3 Months",
    students: "110 Students",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Mobile App Development",
    category: "Development",
    description:
      "Learn how to design and develop modern mobile applications for real-world projects.",
    duration: "6 Months",
    students: "78 Students",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Computer Engineering",
    category: "Computer",
    description:
      "Build a strong technical foundation in computer systems, programming, and engineering.",
    duration: "4 Years",
    students: "250 Students",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title: "Database Management",
    category: "Development",
    description:
      "Learn database concepts, SQL, data management, and practical database development.",
    duration: "3 Months",
    students: "65 Students",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    title: "UI/UX Designing",
    category: "Design",
    description:
      "Create user-friendly interfaces and meaningful digital experiences using modern design principles.",
    duration: "3 Months",
    students: "72 Students",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    title: "Networking",
    category: "Hardware",
    description:
      "Learn computer networking, network devices, protocols, configuration and troubleshooting.",
    duration: "3 Months",
    students: "90 Students",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
];

const categories = [
  "All Courses",
  "Development",
  "Design",
  "Hardware",
  "Marketing",
  "Computer",
];

const CoursesPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState("All Courses");

  const filteredCourses = useMemo(() => {
    const query = search.toLowerCase().trim();

    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === "All Courses" ||
        course.category === activeCategory;

      const matchesSearch =
        query === "" ||
        course.title.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All Courses");
  };

  return (
    <main className="min-h-screen bg-transparent text-slate-900">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">

       {/* ================= HEADER ================= */}
<section className="mb-10">

  {/* ===== LEVEL 1 : TITLE ===== */}
  <div className="text-center">

   

    <h1
      className="
        text-4xl
        font-extrabold
        tracking-tight
        text-slate-900
        sm:text-5xl
      "
    >
      
      <span className="text-indigo-600">
         Our{" "}
        Courses
      </span>
    </h1>

    <p
      className="
        mx-auto
        mt-3
        max-w-xl
        text-sm
        leading-6
        text-slate-500
        sm:text-base
      "
    >
      Explore practical and career-focused technical
      courses designed to help you build real-world
      skills.
    </p>
  </div>


  {/* ===== LEVEL 2 : STATS + SEARCH ===== */}
 

</section>

        {/* ================= FILTERS ================= */}
        <section className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-5">

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => {
                const active =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`
                      rounded-full
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      transition-all
                      duration-200
                      ${
                        active
                          ? "bg-indigo-600 text-white shadow-sm shadow-indigo-200"
                          : "border border-slate-200 bg-white/80 text-slate-500 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* SEARCH */}
            <div className="group relative">

              <Search
                className="
                  pointer-events-none
                  absolute
                  left-3.5
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-slate-400
                  transition-colors
                  duration-200
                  group-focus-within:text-indigo-500
                "
              />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search courses..."
                className="
                  h-10
                  w-48
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  pl-10
                  pr-9
                  text-xs
                  text-slate-800
                  shadow-sm
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-slate-400

                  hover:w-52
                  hover:border-slate-300

                  focus:w-64
                  focus:border-indigo-400
                  focus:ring-4
                  focus:ring-indigo-100
                "
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="
                    absolute
                    right-2.5
                    top-1/2
                    flex
                    h-6
                    w-6
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    text-slate-400
                    transition
                    hover:bg-slate-100
                    hover:text-slate-700
                  "
                  aria-label="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}

            </div>

          </div>
          
        </section>

        {/* ================= RESULT COUNT ================= */}
        <section className="mb-5 flex items-center justify-between">

          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-800">
              {filteredCourses.length}
            </span>{" "}
            courses
          </p>

          {(search ||
            activeCategory !== "All Courses") && (
            <button
              type="button"
              onClick={clearFilters}
              className="
                flex
                items-center
                gap-1.5
                text-xs
                font-semibold
                text-indigo-600
                transition-colors
                hover:text-indigo-800
              "
            >
              <X className="h-3.5 w-3.5" />
              Clear filters
            </button>
            
          )}
          
        </section>

        {/* ================= COURSE GRID ================= */}
        {filteredCourses.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50">
              <Search className="h-6 w-6 text-indigo-500" />
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              No courses found
            </h2>

            <p className="mt-2 max-w-md text-sm text-slate-500">
              Try another keyword or clear your filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Clear Search
            </button>
          </div>
          

        )}

        {/* ================= FOOTER NOTE ================= */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-slate-400">
          <Users className="h-4 w-4" />
          <span>
            Join thousands of learners building their
            technical future with ATI.
          </span>
        </div>
      </div>
    </main>
  );
};

export default CoursesPage;