import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-subtle relative">
      <div className="absolute inset-0 grid-background opacity-30"></div>
      <div className="text-center relative z-10">
        <h1 className="mb-4 text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary hover:text-primary-glow underline underline-offset-4 transition-colors">
          Return to TutorBench
        </a>
      </div>
    </div>
  );
};

export default NotFound;
