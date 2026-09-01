import React from "react";
import {
  Clock3,
  Users,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

export interface Course {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  students: string;
  image: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200/80
        bg-gradient-to-br
        from-slate-50
        via-white
        to-indigo-50/60
        shadow-[0_8px_30px_-16px_rgba(30,41,59,0.25)]
        transition-all
        duration-300
        ease-out

        hover:-translate-y-1.5
        hover:border-indigo-200
        hover:shadow-[0_22px_45px_-18px_rgba(79,70,229,0.32)]
      "
    >
      {/* Subtle top accent */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          z-20
          h-0.5
          origin-left
          scale-x-0
          bg-indigo-500
          transition-transform
          duration-300
          group-hover:scale-x-100
        "
      />

      {/* ================= IMAGE ================= */}
      <div className="relative h-52 overflow-hidden bg-slate-200">

        <img
          src={course.image}
          alt={course.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Elegant image overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/65
            via-slate-900/10
            to-transparent
          "
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-lg
              border
              border-white/20
              bg-slate-950/45
              px-3
              py-1.5
              text-[11px]
              font-semibold
              tracking-wide
              text-white
              shadow-lg
              backdrop-blur-md
            "
          >
            <BookOpen className="h-3.5 w-3.5 text-indigo-300" />
            {course.category}
          </span>
        </div>

        {/* Course number */}
        <span
          className="
            absolute
            bottom-4
            left-4
            text-[11px]
            font-medium
            tracking-wider
            text-white/70
          "
        >
          COURSE {String(course.id).padStart(2, "0")}
        </span>

        {/* Arrow */}
        <div
          className="
            absolute
            bottom-4
            right-4
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/25
            bg-white/10
            text-white
            shadow-lg
            backdrop-blur-md
            transition-all
            duration-300

            group-hover:border-indigo-400
            group-hover:bg-indigo-600
            group-hover:shadow-indigo-900/20
          "
        >
          <ArrowUpRight
            className="
              h-5
              w-5
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5">

        {/* Title */}
        <h3
          className="
            text-lg
            font-bold
            leading-snug
            tracking-tight
            text-slate-800
            transition-colors
            duration-200
            group-hover:text-indigo-600
          "
        >
          {course.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-2
            line-clamp-2
            min-h-[48px]
            text-sm
            leading-6
            text-slate-500
          "
        >
          {course.description}
        </p>

        {/* ================= DETAILS ================= */}
        <div
          className="
            mt-5
            rounded-xl
            border
            border-slate-200/70
            bg-white/55
            px-3
            py-3
            backdrop-blur-sm
            transition-colors
            duration-300
            group-hover:border-indigo-100
            group-hover:bg-white/80
          "
        >
          <div className="flex items-center justify-between">

            {/* Duration */}
            <div className="flex items-center gap-2.5">
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-indigo-50
                "
              >
                <Clock3 className="h-4 w-4 text-indigo-600" />
              </div>

              <div>
                <p className="text-[10px] font-medium text-slate-400">
                  Duration
                </p>

                <p className="mt-0.5 text-xs font-semibold text-slate-700">
                  {course.duration}
                </p>
              </div>
            </div>

            {/* Students */}
            <div className="flex items-center gap-2.5">
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-slate-100
                "
              >
                <Users className="h-4 w-4 text-slate-500" />
              </div>

              <div>
                <p className="text-[10px] font-medium text-slate-400">
                  Enrolled
                </p>

                <p className="mt-0.5 text-xs font-semibold text-slate-700">
                  {course.students}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;