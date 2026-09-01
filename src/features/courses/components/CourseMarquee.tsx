import React from 'react';
import { motion } from 'framer-motion';

interface Course {
  id: number;
  title: string;
  image: string;
}

const COURSES: Course[] = [
  {
    id: 1,
    title: "CDCT - Computer Diploma in Computer Technology",
    image: "https://ambition.com.np/wp-content/uploads/2025/03/Screenshot-2025-03-26-130410.png"
  },
  {
    id: 2,
    title: "MDCT - Master Diploma in Computer Technology",
    image: "https://ambition.com.np/wp-content/uploads/2025/03/Screenshot-2025-03-26-130507.png"
  },
  {
    id: 3,
    title: "Diploma in Computer Technology",
    image: "https://ambition.com.np/wp-content/uploads/2025/03/Capture.png"
  },
  {
    id: 4,
    title: "Website Development with Coding",
    image: "https://ambition.com.np/wp-content/uploads/2025/03/Screenshot-2025-03-26-130439.png"
  },
  {
    id: 5,
    title: "Computer Basic",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Graphic Designing",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
  }
];

const MARQUEE_ITEMS = [...COURSES, ...COURSES];

const CourseMarquee: React.FC = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden  text-foreground transition-colors duration-300">
      
      {/* Background glow using theme gradient */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] blur-[140px] pointer-events-none opacity-20 bg-gradient-hero"
      />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-4"
        >
          Our{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Courses
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
        >
          Curated computer training to launch your tech career.
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-10">
        
        {/* SHRUNK SIDE FADE MASKS: Reduced width from w-36 to w-12 and opacity from 100% to 50% */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 z-20 pointer-events-none opacity-50"
          style={{
            background: 'linear-gradient(to right, hsl(var(--background)), transparent)'
          }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 z-20 pointer-events-none opacity-50"
          style={{
            background: 'linear-gradient(to left, hsl(var(--background)), transparent)'
          }}
        />

        {/* Continuous Marquee Track */}
        <div className="flex w-max group">
          <motion.div
            className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8 group-hover:[animation-play-state:paused]"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              ease: 'linear',
              duration: 25,
              repeat: Infinity,
            }}
          >
            {MARQUEE_ITEMS.map((course, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={`${course.id}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-64 sm:w-72 lg:w-80 h-[380px] sm:h-[420px] lg:h-[450px] flex-shrink-0 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border/40 shadow-md hover:border-primary/50 transition-all duration-300 group/card cursor-pointer bg-card ${
                    isEven ? '-translate-y-6 sm:-translate-y-8' : 'translate-y-6 sm:translate-y-8'
                  }`}
                >
                  {/* Card Background Image */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                  />

                  {/* REDUCED DARK OVERLAY: Made shadow much lower/subtler so full images are vibrant */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent h-1/2 top-auto z-10" />

                  {/* Card Text Content */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 sm:p-6">
                    <p className="text-white text-base sm:text-lg font-bold drop-shadow-sm leading-snug group-hover/card:text-primary transition-colors">
                      {course.title}
                    </p>
                    
                    <span className="text-xs font-semibold text-primary mt-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                      View Course &rarr;
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CourseMarquee;