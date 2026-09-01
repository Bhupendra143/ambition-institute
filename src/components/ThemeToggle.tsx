import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-secondary border border-border">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition-colors ${
          theme === 'light' ? 'bg-card text-primary shadow-sm' : 'text-muted-foreground'
        }`}
        title="Light Mode"
      >
        <Sun className="w-4 h-4" />
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition-colors ${
          theme === 'dark' ? 'bg-card text-primary shadow-sm' : 'text-muted-foreground'
        }`}
        title="Dark Mode"
      >
        <Moon className="w-4 h-4" />
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full transition-colors ${
          theme === 'system' ? 'bg-card text-primary shadow-sm' : 'text-muted-foreground'
        }`}
        title="System Preference"
      >
        <Monitor className="w-4 h-4" />
      </motion.button>
    </div>
  );
};