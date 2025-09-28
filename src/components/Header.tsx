import { GraduationCap, Activity } from "lucide-react";

export function Header() {
  return (
    <header className="relative z-10 mb-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="bg-primary border-2 border-foreground p-3 rounded-lg shadow-brutal">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Educhain TutorBench
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              AI Model Testing Laboratory for Educational Prompts
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-card border-2 border-foreground rounded-lg shadow-brutal">
          <Activity className="h-4 w-4 text-primary animate-pulse" />
          <span className="text-xs text-muted-foreground">System Active</span>
        </div>
      </div>
    </header>
  );
}