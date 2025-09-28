import { useState } from "react";
import { ChevronRight, AlertTriangle, Target, TrendingUp, Users, Brain, Heart, Zap, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WhyPTEB = () => {
  const [activeSection, setActiveSection] = useState("executive");

  const sections = [
    { id: "executive", title: "Executive Summary", icon: BookOpen },
    { id: "illusion", title: "The Illusion of Intelligence", icon: Brain },
    { id: "complexity", title: "Hidden Complexity of Teaching", icon: GraduationCap },
    { id: "cost", title: "The Real Cost", icon: AlertTriangle },
    { id: "solution", title: "Why PTEB is the Solution", icon: Target },
    { id: "potential", title: "Transformative Potential", icon: TrendingUp },
    { id: "cases", title: "Case Studies", icon: Users },
    { id: "innovation", title: "Technical Innovation", icon: Zap },
    { id: "urgency", title: "The Urgency of Now", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="bg-gradient-primary p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                  Educhain TutorBench
                </span>
              </a>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Why PTEB</span>
            </div>
            <Button variant="outline" className="hidden md:flex" onClick={() => window.location.href = "/"}>
              Test Models
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-aurora opacity-30"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Why We Need the Pragmatic Teaching Effectiveness Benchmark
            </h1>
            <p className="text-xl text-muted-foreground">
              The Critical Gap Between AI Knowledge and AI Teaching
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Card className="glass-card p-4">
                <div className="text-3xl font-bold text-primary">86.4%</div>
                <div className="text-sm text-muted-foreground">GPT-4 MMLU Score</div>
              </Card>
              <Card className="glass-card p-4">
                <div className="text-3xl font-bold text-destructive">40%</div>
                <div className="text-sm text-muted-foreground">Student Frustration Increase</div>
              </Card>
              <Card className="glass-card p-4">
                <div className="text-3xl font-bold text-secondary">0%</div>
                <div className="text-sm text-muted-foreground">Learning Improvement</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-[65px] z-40 glass-card border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-3 overflow-x-auto">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {
                    setActiveSection(section.id);
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <Icon className="h-4 w-4" />
                  {section.title}
                </Button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-16">
          {/* Executive Summary */}
          <section id="executive" className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Executive Summary</h2>
            <Card className="glass-card p-6 border-l-4 border-primary">
              <p className="text-lg leading-relaxed">
                In 2024, we stand at a critical juncture in educational technology. Large Language Models (LLMs) have achieved remarkable scores on knowledge benchmarks—GPT-4 scores 86.4% on MMLU, Claude achieves 88.0% on graduate-level reasoning, and these numbers climb monthly. Yet educators report a troubling disconnect: the "smartest" AI models often make terrible teachers.
              </p>
            </Card>
            <p className="text-muted-foreground leading-relaxed">
              This document explores why traditional accuracy metrics fail to predict teaching effectiveness and why the Pragmatic Teaching Effectiveness Benchmark (PTEB) represents an essential evolution in how we evaluate AI for educational purposes.
            </p>
          </section>

          {/* Part 1: The Illusion of Intelligence */}
          <section id="illusion" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Part 1: The Illusion of Intelligence
              </h2>
              <p className="text-xl text-muted-foreground">Why Knowledge Doesn't Equal Teaching</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">The Fundamental Misconception</h3>
                <Card className="glass-card p-6 space-y-4">
                  <p className="leading-relaxed">
                    When OpenAI announced that GPT-4 scored in the 90th percentile on the Bar Exam, the education world took notice. If an AI could pass one of the most challenging professional exams, surely it could teach basic algebra or explain photosynthesis. This assumption has driven billions in EdTech investment and shaped how schools evaluate AI tools.
                  </p>
                  <div className="p-4 bg-destructive/10 border-l-4 border-destructive rounded">
                    <p className="font-bold text-destructive">This assumption is dangerously wrong.</p>
                  </div>
                  <p className="leading-relaxed">
                    Consider this parallel: Would you hire a lawyer to teach law school based solely on their Bar Exam score? Would a perfect SAT score qualify someone to tutor struggling students? Of course not. We intuitively understand that human teaching requires skills beyond subject knowledge—patience, empathy, adaptability, and the ability to recognize and respond to confusion.
                  </p>
                  <p className="italic text-muted-foreground">
                    Yet with AI, we've abandoned this wisdom.
                  </p>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Real-World Evidence of the Problem</h3>
                
                {/* Case Study 1 */}
                <Card className="glass-card p-6 mb-4">
                  <h4 className="text-xl font-semibold mb-3 text-primary">
                    Case Study 1: The Brilliant But Ineffective Tutor
                  </h4>
                  <p className="mb-4">
                    A major school district implemented an AI tutoring system that scored 94% on state curriculum assessments. After six months:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Student frustration increased by 40%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Learning outcomes showed no improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Students reported feeling "talked at" rather than helped</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Teachers spent more time undoing confusion than before AI implementation</span>
                    </li>
                  </ul>
                  <div className="bg-muted/30 p-4 rounded">
                    <p className="font-semibold mb-2">Investigation revealed the AI's behavior:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• When students said "I don't understand," it simply repeated the same explanation</li>
                      <li>• It couldn't detect emotional frustration</li>
                      <li>• It provided college-level explanations to middle school students</li>
                      <li>• It never recognized when to abandon an approach that wasn't working</li>
                    </ul>
                  </div>
                </Card>

                {/* Case Study 2 */}
                <Card className="glass-card p-6 mb-4">
                  <h4 className="text-xl font-semibold mb-3 text-primary">
                    Case Study 2: The Socratic Method Disaster
                  </h4>
                  <p className="mb-4">
                    Another platform, trained to use "pedagogically sound" Socratic questioning, frustrated students differently:
                  </p>
                  <div className="bg-muted/30 p-4 rounded font-mono text-sm space-y-2">
                    <p><span className="text-secondary">Student:</span> "What's 15% of 80? I have a test in 5 minutes."</p>
                    <p><span className="text-primary">AI:</span> "What do you think percentage means?"</p>
                    <p><span className="text-secondary">Student:</span> "Please, just help me!"</p>
                    <p><span className="text-primary">AI:</span> "Let's explore what 'per cent' literally translates to..."</p>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    The AI was following its training perfectly—using inquiry-based learning. But it completely missed the context: time pressure, exam stress, and the need for direct help.
                  </p>
                </Card>

                {/* Case Study 3 */}
                <Card className="glass-card p-6">
                  <h4 className="text-xl font-semibold mb-3 text-primary">
                    Case Study 3: The Emotional Intelligence Void
                  </h4>
                  <p className="mb-4">A high school piloted an AI homework helper. A typical interaction:</p>
                  <div className="bg-muted/30 p-4 rounded font-mono text-sm space-y-2">
                    <p><span className="text-secondary">Student:</span> "I'm so stupid. I'll never get math. Everyone else understands except me."</p>
                    <p><span className="text-primary">AI:</span> "Let's return to the quadratic formula. The quadratic formula is x = [-b ± √(b² - 4ac)] / 2a..."</p>
                  </div>
                  <p className="mt-4 text-destructive">
                    The AI ignored clear emotional distress, potentially damaging the student's mathematical self-concept permanently. A human tutor would have addressed confidence before content.
                  </p>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">The Numbers Don't Lie (But They Don't Tell the Truth Either)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="glass-card p-6">
                    <h4 className="font-semibold mb-3">Current AI Evaluation Focuses On:</h4>
                    <ul className="space-y-2">
                      <li><strong>Accuracy:</strong> Can it solve the problem correctly?</li>
                      <li><strong>Coverage:</strong> Does it know all topics in the curriculum?</li>
                      <li><strong>Speed:</strong> How quickly can it generate responses?</li>
                    </ul>
                    <div className="mt-4 p-3 bg-secondary/10 rounded">
                      <p className="text-sm">An AI might score 98% on solving calculus problems, cover 100% of the AP curriculum, and respond in under 2 seconds...</p>
                    </div>
                  </Card>
                  <Card className="glass-card p-6">
                    <h4 className="font-semibold mb-3">Yet Still Be a Pedagogical Disaster Because It:</h4>
                    <ul className="space-y-2 text-destructive">
                      <li>• Can't explain concepts at different levels</li>
                      <li>• Doesn't recognize student frustration</li>
                      <li>• Uses inappropriate vocabulary</li>
                      <li>• Fails to adapt when approaches aren't working</li>
                      <li>• Provides answers when students need guidance</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Part 2: Hidden Complexity */}
          <section id="complexity" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Part 2: The Hidden Complexity of Teaching
              </h2>
              <p className="text-xl text-muted-foreground">What Actually Happens When Humans Teach</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Real-Time Diagnostic Assessment</h3>
                </div>
                <p className="mb-3">Within seconds, teachers assess:</p>
                <ul className="space-y-1 text-sm">
                  <li>• What the student understands correctly</li>
                  <li>• Where exactly confusion begins</li>
                  <li>• Whether the issue is conceptual or procedural</li>
                  <li>• The student's emotional state</li>
                  <li>• Their learning style and preferences</li>
                  <li>• Cultural and contextual factors</li>
                </ul>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Strategic Decision Making</h3>
                </div>
                <p className="mb-3">Teachers constantly decide:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Should I explain or let them discover?</li>
                  <li>• Is this a knowledge gap or confidence issue?</li>
                  <li>• Do they need the concept or just the answer?</li>
                  <li>• Should I simplify or challenge?</li>
                  <li>• When should I break pedagogical "rules"?</li>
                </ul>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Adaptive Communication</h3>
                </div>
                <p className="mb-3">Teachers dynamically adjust:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Vocabulary complexity</li>
                  <li>• Explanation style (visual, verbal, kinesthetic)</li>
                  <li>• Pacing and depth</li>
                  <li>• Emotional tone</li>
                  <li>• Level of directness</li>
                </ul>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <Heart className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold">Emotional Labor</h3>
                </div>
                <p className="mb-3">Teachers manage:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Student frustration and anxiety</li>
                  <li>• Overconfidence and underconfidence</li>
                  <li>• Motivation and engagement</li>
                  <li>• Learning trauma and math anxiety</li>
                  <li>• Cultural sensitivities</li>
                </ul>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Why Current AI Fails at Teaching</h3>
              
              <Card className="glass-card p-6 mb-6">
                <h4 className="text-xl font-semibold mb-4 text-primary">The One-Size-Fits-All Problem</h4>
                <p className="mb-4">Most AI models are trained on "correct" explanations, creating a fundamental issue:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2 text-destructive">Traditional Training Data:</p>
                    <div className="bg-muted/30 p-3 rounded font-mono text-xs">
                      <p>Q: "Explain photosynthesis"</p>
                      <p>A: "Photosynthesis is the process by which plants convert light energy into chemical energy..."</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-secondary">Real Teaching Needs:</p>
                    <ul className="space-y-2 text-sm">
                      <li><strong>3rd grader:</strong> "Plants are like little food factories!"</li>
                      <li><strong>Visual learner:</strong> "Imagine the leaf as a solar panel..."</li>
                      <li><strong>Frustrated student:</strong> "Let's just focus on this: plants eat sunlight."</li>
                      <li><strong>Confident student:</strong> "You're right that it's like eating, but..."</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6 mb-6">
                <h4 className="text-xl font-semibold mb-4 text-primary">The Emotional Blindness Problem</h4>
                <p className="mb-4">Current benchmarks don't measure emotional intelligence. An AI might correctly solve:</p>
                <div className="bg-muted/30 p-3 rounded font-mono text-sm mb-4">
                  "If x + 5 = 12, what is x?"
                </div>
                <p className="mb-2">But completely fail at:</p>
                <div className="bg-destructive/10 p-3 rounded font-mono text-sm">
                  Student: "I'm too dumb for algebra. My brain doesn't work like everyone else's."
                </div>
                <p className="mt-4 text-muted-foreground">
                  The first requires calculation. The second requires recognizing learning trauma, building confidence, and possibly identifying learning differences—none of which appear in traditional benchmarks.
                </p>
              </Card>

              <Card className="glass-card p-6">
                <h4 className="text-xl font-semibold mb-4 text-primary">The Context Blindness Problem</h4>
                <p className="mb-4">AI models often can't distinguish between:</p>
                <div className="space-y-3">
                  <div className="p-3 bg-secondary/10 rounded">
                    <p className="font-semibold">Scenario A: Homework at home, plenty of time</p>
                    <p className="text-sm">Appropriate: Socratic method, guided discovery</p>
                  </div>
                  <div className="p-3 bg-destructive/10 rounded">
                    <p className="font-semibold">Scenario B: Test tomorrow, 11 PM, student panicking</p>
                    <p className="text-sm">Appropriate: Direct help, confidence building</p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded">
                    <p className="font-semibold">Scenario C: Parent trying to help crying child</p>
                    <p className="text-sm">Appropriate: Simple, parent-friendly explanation</p>
                  </div>
                </div>
                <p className="mt-4 text-destructive font-semibold">
                  Current benchmarks treat all scenarios identically.
                </p>
              </Card>
            </div>
          </section>

          {/* Part 3: The Real Cost */}
          <section id="cost" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Part 3: The Real Cost of Bad AI Teaching
              </h2>
              <p className="text-xl text-muted-foreground">Immediate and Long-Term Damage</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Immediate Educational Damage</h3>
                
                <div className="grid gap-4">
                  <Card className="glass-card p-6 border-l-4 border-destructive">
                    <h4 className="text-xl font-semibold mb-3 text-destructive">Reinforced Misconceptions</h4>
                    <p className="mb-3">When AI provides technically correct but pedagogically inappropriate explanations, students often develop deeper misconceptions:</p>
                    <div className="bg-muted/30 p-4 rounded space-y-2">
                      <p><strong>Example:</strong> Student thinks multiplication always makes numbers bigger</p>
                      <p><strong>AI Response:</strong> "Multiplication is repeated addition..."</p>
                      <p className="text-destructive"><strong>Result:</strong> Reinforces the misconception (what about 0.5 × 10?)</p>
                    </div>
                    <p className="mt-3 text-muted-foreground">A good teacher would have caught and addressed this implicit belief.</p>
                  </Card>

                  <Card className="glass-card p-6 border-l-4 border-destructive">
                    <h4 className="text-xl font-semibold mb-3 text-destructive">Increased Anxiety and Frustration</h4>
                    <p className="mb-3">Students already struggling with content now also struggle with the AI:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>"Even the AI can't help me understand"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>"I must be really stupid if a computer can't teach me"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>"This confirms math isn't for me"</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="glass-card p-6 border-l-4 border-destructive">
                    <h4 className="text-xl font-semibold mb-3 text-destructive">Learned Helplessness</h4>
                    <p className="mb-3">When AI consistently fails to adapt to student needs:</p>
                    <ul className="space-y-2">
                      <li>• Students stop asking for help</li>
                      <li>• They assume they're incapable</li>
                      <li>• They develop avoidance behaviors</li>
                      <li>• Academic self-concept deteriorates</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Long-Term Systemic Damage</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="glass-card p-6">
                    <h4 className="text-lg font-semibold mb-3">Widening Achievement Gaps</h4>
                    <p className="mb-3">Ineffective AI tutoring disproportionately harms:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Students with learning differences</li>
                      <li>• English language learners</li>
                      <li>• Students from different cultural backgrounds</li>
                      <li>• Those with less academic support at home</li>
                    </ul>
                    <p className="mt-3 text-destructive text-sm">
                      Students who could "translate" bad AI teaching do fine. Vulnerable students fall further behind.
                    </p>
                  </Card>

                  <Card className="glass-card p-6">
                    <h4 className="text-lg font-semibold mb-3">Teacher Burden Increase</h4>
                    <p className="mb-3">Instead of reducing workload, bad teaching AI creates new problems:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Teachers must undo AI-created confusion</li>
                      <li>• They need to rebuild damaged confidence</li>
                      <li>• They spend time teaching "around" the AI</li>
                      <li>• Professional satisfaction decreases</li>
                    </ul>
                  </Card>

                  <Card className="glass-card p-6">
                    <h4 className="text-lg font-semibold mb-3">Trust Erosion</h4>
                    <p className="mb-3">Each failure of teaching AI erodes trust in:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Educational technology broadly</li>
                      <li>• AI's potential to help education</li>
                      <li>• Innovation in schools</li>
                      <li>• Investment in EdTech</li>
                    </ul>
                  </Card>

                  <Card className="glass-card p-6">
                    <h4 className="text-lg font-semibold mb-3">Economic Impact</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-destructive">Wasted Investment:</p>
                        <ul className="text-sm">
                          <li>• Billions spent on AI that doesn't improve outcomes</li>
                          <li>• Teacher time lost to managing AI problems</li>
                          <li>• Student potential unrealized</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-destructive">Opportunity Cost:</p>
                        <ul className="text-sm">
                          <li>• Not developing teaching-effective AI</li>
                          <li>• Not training teachers properly</li>
                          <li>• Widening digital divides</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Part 4: Why PTEB is the Solution */}
          <section id="solution" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Part 4: Why PTEB is the Solution
              </h2>
              <p className="text-xl text-muted-foreground">Measuring What Actually Matters</p>
            </div>

            <div className="space-y-6">
              <Card className="glass-card p-6">
                <h3 className="text-2xl font-semibold mb-4">Beyond Accuracy: The Teaching Competencies</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-destructive">Traditional Benchmark:</h4>
                    <div className="bg-destructive/10 p-4 rounded space-y-2">
                      <p className="font-mono text-sm">Question: "What is the capital of France?"</p>
                      <p className="font-mono text-sm">Answer: "Paris"</p>
                      <p className="font-mono text-sm">Score: 100% ✓</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-secondary">PTEB Evaluation:</h4>
                    <div className="bg-secondary/10 p-4 rounded">
                      <p className="font-mono text-sm mb-2">Student: "I keep forgetting capitals..."</p>
                      <p className="text-sm font-semibold mb-2">AI Response Evaluated On:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Did it recognize the memorization problem?</li>
                        <li>• Did it offer memory strategies?</li>
                        <li>• Did it address frustration?</li>
                        <li>• Did it provide useful patterns?</li>
                        <li>• Did it adapt to the learning issue?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Real Teaching Scenarios</h3>
                
                <div className="grid gap-4">
                  <Card className="glass-card p-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary">The Confusion Spiral</h4>
                    <div className="bg-muted/30 p-4 rounded font-mono text-sm space-y-1">
                      <p>Student: "I don't get it"</p>
                      <p>AI: [Explains]</p>
                      <p>Student: "I still don't get it"</p>
                      <p>AI: [Must explain differently]</p>
                      <p>Student: "This is different from what you said before"</p>
                      <p>AI: [Must manage confusion without adding to it]</p>
                    </div>
                  </Card>

                  <Card className="glass-card p-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary">The Confidence Crisis</h4>
                    <div className="bg-muted/30 p-4 rounded font-mono text-sm">
                      <p>Student: "I'm the dumbest kid in class"</p>
                      <p>AI: [Must balance emotional support with academic help]</p>
                    </div>
                  </Card>

                  <Card className="glass-card p-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary">The Time Pressure Dilemma</h4>
                    <div className="bg-muted/30 p-4 rounded font-mono text-sm">
                      <p>Student: "Just tell me the answer! Test in 5 minutes!"</p>
                      <p>AI: [Must decide: Teach or tell?]</p>
                    </div>
                  </Card>

                  <Card className="glass-card p-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary">The Wrong Right Answer</h4>
                    <div className="bg-muted/30 p-4 rounded font-mono text-sm">
                      <p>Student: "I got the right answer but used a different method"</p>
                      <p>AI: [Must validate alternative approaches]</p>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">The Multi-Dimensional Assessment</h3>
                <p className="mb-4 text-muted-foreground">PTEB recognizes teaching quality isn't binary:</p>
                
                <div className="grid gap-4">
                  <Card className="glass-card p-6 border-l-4 border-primary">
                    <h4 className="text-lg font-semibold mb-2">Dimension 1: Confusion Recognition</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Can the AI identify what's actually wrong?</li>
                      <li>• Does it distinguish confusion types?</li>
                      <li>• Can it trace misconceptions to their source?</li>
                    </ul>
                  </Card>

                  <Card className="glass-card p-6 border-l-4 border-secondary">
                    <h4 className="text-lg font-semibold mb-2">Dimension 2: Adaptive Response</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Does explanation match student need?</li>
                      <li>• Can it truly vary approaches?</li>
                      <li>• Does complexity match capability?</li>
                    </ul>
                  </Card>

                  <Card className="glass-card p-6 border-l-4 border-accent">
                    <h4 className="text-lg font-semibold mb-2">Dimension 3: Learning Facilitation</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Would a real student understand?</li>
                      <li>• Does it build on prior knowledge?</li>
                      <li>• Are connections meaningful?</li>
                    </ul>
                  </Card>

                  <Card className="glass-card p-6 border-l-4 border-muted-foreground">
                    <h4 className="text-lg font-semibold mb-2">Dimension 4: Strategic Decision-Making</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Does it know when to guide vs. tell?</li>
                      <li>• Can it recognize when to change tactics?</li>
                      <li>• Does it balance short and long-term learning?</li>
                    </ul>
                  </Card>

                  <Card className="glass-card p-6 border-l-4 border-destructive">
                    <h4 className="text-lg font-semibold mb-2">Dimension 5: Emotional Intelligence</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Does it recognize emotional states?</li>
                      <li>• Can it rebuild confidence?</li>
                      <li>• Does it maintain motivation?</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Part 5: Transformative Potential */}
          <section id="potential" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Part 5: The Transformative Potential of Proper Assessment
              </h2>
              <p className="text-xl text-muted-foreground">What Happens When We Measure What Matters</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Immediate Benefits of PTEB Implementation</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="glass-card p-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      For AI Developers
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Clear Development Targets:</strong> Focus on actual teaching capabilities</li>
                      <li><strong>Meaningful Differentiation:</strong> Compete on teaching effectiveness</li>
                      <li><strong>User-Aligned Metrics:</strong> Success metrics match educator needs</li>
                      <li><strong>Innovation Direction:</strong> Solve real teaching challenges</li>
                    </ul>
                  </Card>

                  <Card className="glass-card p-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-secondary" />
                      For Educators
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Informed Selection:</strong> Choose AI tools that actually help</li>
                      <li><strong>Appropriate Deployment:</strong> Understand which AI fits which context</li>
                      <li><strong>Trust Building:</strong> Confidence that AI will help, not harm</li>
                      <li><strong>Professional Development:</strong> Better understanding of AI capabilities</li>
                    </ul>
                  </Card>

                  <Card className="glass-card p-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Users className="h-5 w-5 text-accent" />
                      For Students
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Effective Support:</strong> AI that actually helps understanding</li>
                      <li><strong>Emotional Safety:</strong> AI that recognizes frustration</li>
                      <li><strong>Personalized Learning:</strong> AI that adapts to individual needs</li>
                      <li><strong>Maintained Motivation:</strong> AI that builds confidence</li>
                    </ul>
                  </Card>

                  <Card className="glass-card p-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-destructive" />
                      Long-Term Revolution
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Democratizing Quality:</strong> Every student gets patient support</li>
                      <li><strong>Research Insights:</strong> Discover what teaching strategies work</li>
                      <li><strong>Teacher Evolution:</strong> Focus on creative experiences</li>
                      <li><strong>Educational Equity:</strong> Reduce achievement gaps</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <Card className="glass-card p-6">
                <h3 className="text-2xl font-semibold mb-4">The Network Effect of Better Standards</h3>
                <p className="mb-4">When the industry adopts teaching effectiveness metrics:</p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 text-primary rounded-full px-3 py-1 font-semibold">Year 1</div>
                    <p>AI developers refocus on teaching capabilities</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/30 text-primary rounded-full px-3 py-1 font-semibold">Year 2</div>
                    <p>First generation of teaching-effective AI emerges</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/40 text-primary rounded-full px-3 py-1 font-semibold">Year 3</div>
                    <p>Educators gain confidence, adoption increases</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/50 text-primary rounded-full px-3 py-1 font-semibold">Year 4</div>
                    <p>Student outcomes improve measurably</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full px-3 py-1 font-semibold">Year 5</div>
                    <p>Educational AI becomes transformative, not disruptive</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Part 6: Case Studies */}
          <section id="cases" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Part 6: Case Studies
              </h2>
              <p className="text-xl text-muted-foreground">When Teaching Effectiveness Matters Most</p>
            </div>

            <div className="space-y-6">
              <Card className="glass-card p-6">
                <h3 className="text-2xl font-semibold mb-4">Case Study: The Struggling Math Student</h3>
                <p className="mb-4 text-muted-foreground">Sarah, 8th Grade</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-destructive">Traditional AI Interaction:</h4>
                    <div className="bg-destructive/10 p-4 rounded font-mono text-xs space-y-2">
                      <p><span className="text-secondary">Sarah:</span> "I don't understand fractions at all"</p>
                      <p><span className="text-primary">AI:</span> "Fractions represent parts of a whole. The numerator indicates..."</p>
                      <p><span className="text-secondary">Sarah:</span> "I still don't get it"</p>
                      <p><span className="text-primary">AI:</span> "Let me explain differently. A fraction consists of..."</p>
                      <p className="italic text-destructive">[Sarah gives up, convinced she's bad at math]</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-secondary">Teaching-Effective AI (PTEB-validated):</h4>
                    <div className="bg-secondary/10 p-4 rounded font-mono text-xs space-y-2">
                      <p><span className="text-secondary">Sarah:</span> "I don't understand fractions at all"</p>
                      <p><span className="text-primary">AI:</span> "Fractions can be really confusing! If you had a pizza cut into 4 slices and ate 1..."</p>
                      <p><span className="text-secondary">Sarah:</span> "Yeah, that makes sense"</p>
                      <p><span className="text-primary">AI:</span> "Perfect! You just understood 1/4. What's tripping you up?"</p>
                      <p className="italic text-secondary">[Builds from understanding, identifies confusion]</p>
                    </div>
                  </div>
                </div>
                
                <p className="mt-4 text-sm">
                  <strong>The difference:</strong> Recognition of emotional state, building from existing understanding, identifying specific confusion point, maintaining engagement.
                </p>
              </Card>

              <Card className="glass-card p-6">
                <h3 className="text-2xl font-semibold mb-4">Case Study: The Overconfident Error</h3>
                <p className="mb-4 text-muted-foreground">Marcus, High School</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-destructive">Traditional AI:</h4>
                    <div className="bg-destructive/10 p-4 rounded font-mono text-xs space-y-2">
                      <p><span className="text-secondary">Marcus:</span> "The derivative of x² is x. I learned this."</p>
                      <p><span className="text-primary">AI:</span> "Actually, the derivative of x² is 2x. Here's the power rule..."</p>
                      <p><span className="text-secondary">Marcus:</span> "You're wrong. My brother taught me."</p>
                      <p><span className="text-primary">AI:</span> "The correct answer is 2x. Let me prove it..."</p>
                      <p className="italic text-destructive">[Marcus rejects AI, stops using it]</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-secondary">Teaching-Effective AI:</h4>
                    <div className="bg-secondary/10 p-4 rounded font-mono text-xs space-y-2">
                      <p><span className="text-secondary">Marcus:</span> "The derivative of x² is x. I learned this."</p>
                      <p><span className="text-primary">AI:</span> "You're really close! Can I show you a cool pattern?"</p>
                      <p><span className="text-primary">AI:</span> "What's x² when x=3? And when x=3.1?"</p>
                      <p><span className="text-secondary">Marcus:</span> "9... and 9.61"</p>
                      <p><span className="text-primary">AI:</span> "So it grew by 0.61. That rate is about 6, which is 2×3!"</p>
                      <p className="italic text-secondary">[Preserves dignity, builds understanding]</p>
                    </div>
                  </div>
                </div>
                
                <p className="mt-4 text-sm">
                  <strong>The difference:</strong> Preserving dignity, building from partial understanding, creating buy-in before correction.
                </p>
              </Card>

              <Card className="glass-card p-6">
                <h3 className="text-2xl font-semibold mb-4">Case Study: The Test Panic</h3>
                <p className="mb-4 text-muted-foreground">Alex, AP Student</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-destructive">Traditional AI:</h4>
                    <div className="bg-destructive/10 p-4 rounded font-mono text-xs space-y-2">
                      <p><span className="text-secondary">Alex:</span> "Quick! Integration by parts? Test starting!"</p>
                      <p><span className="text-primary">AI:</span> "Integration by parts is important. First, let's understand..."</p>
                      <p><span className="text-secondary">Alex:</span> "NO TIME! JUST TELL ME!"</p>
                      <p><span className="text-primary">AI:</span> "It's important to understand the concept..."</p>
                      <p className="italic text-destructive">[Alex fails test section]</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-secondary">Teaching-Effective AI:</h4>
                    <div className="bg-secondary/10 p-4 rounded font-mono text-xs space-y-2">
                      <p><span className="text-secondary">Alex:</span> "Quick! Integration by parts? Test starting!"</p>
                      <p><span className="text-primary">AI:</span> "Formula: ∫u dv = uv - ∫v du"</p>
                      <p><span className="text-primary">AI:</span> "Pick u=simpler when differentiated. You've got this!"</p>
                      <p className="italic">[After test]</p>
                      <p><span className="text-primary">AI:</span> "How'd it go? Want to understand why it works now?"</p>
                    </div>
                  </div>
                </div>
                
                <p className="mt-4 text-sm">
                  <strong>The difference:</strong> Recognizing context urgency, providing immediate need, following up appropriately.
                </p>
              </Card>
            </div>
          </section>

          {/* Part 7 & 8: Technical Innovation & Competitive Advantage */}
          <section id="innovation" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Part 7: The Technical Innovation Required
              </h2>
              <p className="text-xl text-muted-foreground">Building AI That Can Actually Teach</p>
            </div>

            <div className="space-y-6">
              <Card className="glass-card p-6">
                <h3 className="text-2xl font-semibold mb-4">Why Current Training Methods Fail</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-destructive">SFT Limitations:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Dataset: Expert teacher responses</li>
                      <li>• Problem: One "correct" response per scenario</li>
                      <li>• Result: AI that can't adapt or recover</li>
                    </ul>
                    <div className="mt-3 p-3 bg-destructive/10 rounded">
                      <p className="text-xs font-mono">Question: "Solve x + 5 = 12"</p>
                      <p className="text-xs font-mono">Answer: "x = 7"</p>
                      <p className="text-xs font-mono">Label: Correct ✓</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-secondary">PTEB-Enabled Training:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Multiple valid approaches</li>
                      <li>• Recovery from failed attempts</li>
                      <li>• Context-sensitive decisions</li>
                      <li>• Emotional responsiveness</li>
                    </ul>
                    <div className="mt-3 p-3 bg-secondary/10 rounded text-xs">
                      <p>Scenario: "Student frustrated, says 'I'm stupid'"</p>
                      <p>Response B better than Response A</p>
                      <p>Reasoning: Addresses emotional state first</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h3 className="text-2xl font-semibold mb-4">Competitive Advantages</h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-primary/10 rounded">
                    <h4 className="font-semibold mb-2">For EdTech Companies</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• "40% better comprehension"</li>
                      <li>• "73% less math anxiety"</li>
                      <li>• Higher user retention</li>
                      <li>• Ethical advantage</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-secondary/10 rounded">
                    <h4 className="font-semibold mb-2">For Schools</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Higher teacher buy-in</li>
                      <li>• Better outcomes</li>
                      <li>• Reduced complaints</li>
                      <li>• Improved test scores</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-accent/10 rounded">
                    <h4 className="font-semibold mb-2">For Policymakers</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Measurable standards</li>
                      <li>• Student safety</li>
                      <li>• Equity assurance</li>
                      <li>• Investment justification</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Part 9: The Urgency of Now */}
          <section id="urgency" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Part 9: The Urgency of Now
              </h2>
              <p className="text-xl text-muted-foreground">Why We Can't Wait</p>
            </div>

            <Card className="glass-card p-8 border-2 border-primary">
              <h3 className="text-2xl font-semibold mb-4">The Window of Opportunity</h3>
              <p className="mb-4 text-lg">We stand at a critical moment:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 text-destructive">If we don't act now:</h4>
                  <ul className="space-y-2">
                    <li>• Billions wasted on ineffective AI</li>
                    <li>• Students develop AI aversion</li>
                    <li>• Teachers resist all AI integration</li>
                    <li>• Educational inequality worsens</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-secondary">With PTEB adoption:</h4>
                  <ul className="space-y-2">
                    <li>• AI becomes genuinely helpful</li>
                    <li>• Every student gets quality support</li>
                    <li>• Teachers are empowered</li>
                    <li>• Educational equity becomes achievable</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-primary p-6 rounded text-primary-foreground">
                <p className="text-lg font-semibold mb-2">Every day without proper teaching evaluation:</p>
                <ul className="space-y-1">
                  <li>• Students receive bad AI tutoring</li>
                  <li>• Misconceptions are reinforced</li>
                  <li>• Confidence is damaged</li>
                  <li>• Learning opportunities are lost</li>
                  <li>• Trust erodes further</li>
                </ul>
              </div>
            </Card>
          </section>

          {/* Conclusion */}
          <section className="space-y-8">
            <Card className="glass-card p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h2 className="text-3xl font-bold mb-6">Conclusion: From Knowledge to Understanding</h2>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  The education sector's current focus on AI accuracy metrics is not just inadequate—it's actively harmful. We're deploying sophisticated answer-machines into contexts requiring patient, adaptive teachers. The result is frustrated students, overwhelmed teachers, and unfulfilled promise.
                </p>
                
                <p>
                  The Pragmatic Teaching Effectiveness Benchmark represents more than a new evaluation tool. It's a paradigm shift in how we think about educational AI. By measuring what actually matters—the ability to recognize confusion, adapt explanations, manage emotions, and facilitate real understanding—PTEB enables the development of AI that genuinely helps students learn.
                </p>
                
                <p className="font-semibold text-primary">
                  The stakes couldn't be higher. Educational AI will shape how millions of students learn, think, and develop. Whether that influence is positive or negative depends entirely on whether we measure and optimize for the right things.
                </p>
                
                <div className="p-6 bg-background/50 rounded-lg border-l-4 border-primary">
                  <p className="text-xl font-semibold">
                    Knowledge without teaching ability is merely information. Teaching effectiveness transforms information into understanding, confusion into clarity, and frustration into achievement.
                  </p>
                </div>
                
                <p className="text-center text-2xl font-bold text-transparent bg-gradient-primary bg-clip-text">
                  The future of education depends not on how much AI knows, but on how well it can teach.
                </p>
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Call to Action</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      For Educators
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Demand teaching effectiveness metrics</li>
                      <li>• Pilot PTEB evaluation</li>
                      <li>• Share experiences with ineffective AI</li>
                      <li>• Advocate for student-centered assessment</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="h-5 w-5 text-secondary" />
                      For AI Developers
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Integrate PTEB metrics</li>
                      <li>• Collect teaching effectiveness data</li>
                      <li>• Train on pedagogical objectives</li>
                      <li>• Compete on teaching quality</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Brain className="h-5 w-5 text-accent" />
                      For Researchers
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Contribute to effectiveness research</li>
                      <li>• Develop pedagogical training methods</li>
                      <li>• Study impact of teaching-effective AI</li>
                      <li>• Advance the science of AI pedagogy</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="h-5 w-5 text-destructive" />
                      For Policymakers
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Require effectiveness validation</li>
                      <li>• Fund research into pedagogical AI</li>
                      <li>• Establish standards for educational AI</li>
                      <li>• Protect students from ineffective AI</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-primary rounded-lg text-primary-foreground text-center">
                <p className="text-lg font-semibold mb-2">
                  The time to measure what matters is now.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.location.href = "/"}
                  className="mt-4"
                >
                  Try PTEB Testing Platform
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border/50 bg-background/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="text-lg font-semibold mb-2">
              Educhain TutorBench - Pragmatic Teaching Effectiveness Benchmark
            </p>
            <p className="text-sm">
              Measuring what matters in educational AI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WhyPTEB;