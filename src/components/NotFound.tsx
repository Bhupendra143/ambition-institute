import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export const NotFound: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center py-16 px-4">
      <div className="relative">
        <h1 className="text-9xl font-black text-primary/20 select-none">404</h1>
        <p className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl font-extrabold text-foreground">
          Page Not Found
        </p>
      </div>

      <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-md">
        Oops! The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-md"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-secondary/80 active:scale-95 transition-all border border-border"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Go Back</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;