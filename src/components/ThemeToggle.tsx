import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {/* Current Theme Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-all focus:outline-none cursor-pointer flex items-center justify-center"
        aria-label="Toggle Theme Menu"
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-4 h-4 text-slate-200" />
        ) : (
          <Sun className="w-4 h-4 text-amber-400" />
        )}
      </button>

      {/* Popover Dropdown matching reference image */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-3 w-40 bg-[#121118]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
          
          {/* Light Mode Button */}
          <button
            onClick={() => {
              setTheme('light');
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              theme === 'light'
                ? 'bg-slate-800/80 text-white'
                : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
            }`}
          >
            <Sun className="w-4 h-4 shrink-0" />
            <span>Light</span>
          </button>

          {/* Dark Mode Button */}
          <button
            onClick={() => {
              setTheme('dark');
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              theme === 'dark'
                ? 'bg-[#251e3e] text-purple-300'
                : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
            }`}
          >
            <Moon className="w-4 h-4 shrink-0" />
            <span>Dark</span>
          </button>

          {/* System Mode Button */}
          <button
            onClick={() => {
              setTheme('system');
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              theme === 'system'
                ? 'bg-slate-800/80 text-white'
                : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
            }`}
          >
            <Monitor className="w-4 h-4 shrink-0" />
            <span>System</span>
          </button>

        </div>
      )}
    </div>
  );
};

export default ThemeToggle;