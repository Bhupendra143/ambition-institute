import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, 
  Code2, 
  Globe, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

interface CourseItem {
  id: string;
  title: string;
  shortCode: string;
  description: string;
  duration: string;
  icon: React.ElementType;
}

const ADVANCED_COURSES: CourseItem[] = [
  {
    id: 'cdct',
    title: 'Computer Diploma in Computer Technology',
    shortCode: 'CDCT',
    description: 'Master practical hardware, networking, system setup, and core office software skills.',
    duration: '6 Months',
    icon: Laptop,
  },
  {
    id: 'mdct',
    title: 'Master Diploma in Computer Technology',
    shortCode: 'MDCT',
    description: 'Advanced IT specialization covering advanced networking, systems engineering, and tech management.',
    duration: '12 Months',
    icon: Code2,
  },
  {
    id: 'webdev',
    title: 'Web Development & Coding',
    shortCode: 'Web Dev',
    description: 'Build modern responsive applications with HTML5, CSS3, JavaScript, React, and backend API design.',
    duration: '6 Months',
    icon: Globe,
  },
];

const TYPEWRITER_WORDS = ['Web Dev', 'CDCT', 'MDCT', 'Full Stack', 'Cloud IT'];

// Dynamic Typewriter Effect with Layout Collapsing Protection
const TypewriterEffect: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = TYPEWRITER_WORDS[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
        }
      }
    }, isDeleting ? 50 : 110);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <span className="inline-inline-flex items-center justify-center min-w-[140px] sm:min-w-[190px] min-h-[44px] px-4 py-1.5 rounded-xl bg-gradient-primary text-primary-foreground font-extrabold shadow-glow mx-2 align-middle">
      <span className="whitespace-nowrap">{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="ml-1 inline-block w-0.5 h-6 bg-primary-foreground"
      />
    </span>
  );
};

const AdvanceCourses: React.FC = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-8 relative overflow-hidden bg-transparent text-foreground">
      
      {/* Background Mesh Accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[140px] pointer-events-none opacity-20 bg-gradient-hero"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
      
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug"
          >
            Our Advance Courses
            <br className="hidden sm:inline" />
            <TypewriterEffect />
            Join Today!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground mt-4"
          >
            Accelerate your career with industry-oriented IT software and diploma programs.
          </motion.p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ADVANCED_COURSES.map((course, idx) => {
            const IconComponent = course.icon;
            
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative rounded-2xl bg-card border border-border p-8 shadow-card hover:shadow-card-hover hover:border-primary/50 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Row: Icon & Duration */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-secondary border border-border/80 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                      <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                      {course.duration}
                    </span>
                  </div>

                  {/* Titles */}
                  <h3 className="text-2xl font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                    {course.shortCode}
                  </h3>

                  <p className="text-xs font-semibold text-primary/90 mb-4 tracking-wide uppercase">
                    {course.title}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    Enrollment Open
                  </span>

                  <div className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AdvanceCourses;