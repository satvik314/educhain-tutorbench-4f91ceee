import { useState } from "react";
import { Header } from "@/components/Header";
import { ChevronDown, ChevronUp } from "lucide-react";

const Index = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-background opacity-30"></div>
      
      {/* Aurora gradient overlay */}
      <div className="absolute inset-0 bg-gradient-aurora pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        
        <article className="prose prose-lg max-w-none text-foreground">
          {/* Title Section */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Why We Need the Pragmatic Teaching Effectiveness Benchmark
            </h1>
            <p className="text-xl text-muted-foreground">
              The Critical Gap Between AI Knowledge and AI Teaching
            </p>
          </div>

          {/* Executive Summary */}
          <section className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Executive Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
              In 2024, we stand at a critical juncture in educational technology. Large Language Models (LLMs) have achieved remarkable scores on knowledge benchmarks—GPT-4 scores 86.4% on MMLU, Claude achieves 88.0% on graduate-level reasoning, and these numbers climb monthly. Yet educators report a troubling disconnect: the "smartest" AI models often make terrible teachers.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              This document explores why traditional accuracy metrics fail to predict teaching effectiveness and why the Pragmatic Teaching Effectiveness Benchmark (PTEB) represents an essential evolution in how we evaluate AI for educational purposes.
            </p>
          </section>

          {/* Part 1 */}
          <section className="mb-8">
            <button
              onClick={() => toggleSection('part1')}
              className="w-full text-left glass-card p-6 hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-foreground">
                  Part 1: The Illusion of Intelligence - Why Knowledge Doesn't Equal Teaching
                </h2>
                {expandedSections.has('part1') ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </button>
            
            {expandedSections.has('part1') && (
              <div className="mt-4 space-y-6 glass-card p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">The Fundamental Misconception</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When OpenAI announced that GPT-4 scored in the 90th percentile on the Bar Exam, the education world took notice. If an AI could pass one of the most challenging professional exams, surely it could teach basic algebra or explain photosynthesis. This assumption has driven billions in EdTech investment and shaped how schools evaluate AI tools.
                  </p>
                  <p className="text-muted-foreground mt-4 font-semibold">
                    This assumption is dangerously wrong.
                  </p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Consider this parallel: Would you hire a lawyer to teach law school based solely on their Bar Exam score? Would a perfect SAT score qualify someone to tutor struggling students? Of course not. We intuitively understand that human teaching requires skills beyond subject knowledge—patience, empathy, adaptability, and the ability to recognize and respond to confusion.
                  </p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Yet with AI, we've abandoned this wisdom.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Real-World Evidence of the Problem</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold text-foreground">Case Study 1: The Brilliant But Ineffective Tutor</h4>
                      <p className="text-muted-foreground mt-2">
                        A major school district implemented an AI tutoring system that scored 94% on state curriculum assessments. After six months:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                        <li>Student frustration increased by 40%</li>
                        <li>Learning outcomes showed no improvement</li>
                        <li>Students reported feeling "talked at" rather than helped</li>
                        <li>Teachers spent more time undoing confusion than before AI implementation</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold text-foreground">Case Study 2: The Socratic Method Disaster</h4>
                      <div className="bg-muted/30 p-4 rounded-lg mt-2">
                        <p className="text-sm font-mono text-muted-foreground">
                          <span className="font-semibold">Student:</span> "What's 15% of 80? I have a test in 5 minutes."<br/>
                          <span className="font-semibold">AI:</span> "What do you think percentage means?"<br/>
                          <span className="font-semibold">Student:</span> "Please, just help me!"<br/>
                          <span className="font-semibold">AI:</span> "Let's explore what 'per cent' literally translates to..."
                        </p>
                      </div>
                      <p className="text-muted-foreground mt-2">
                        The AI was following its training perfectly—using inquiry-based learning. But it completely missed the context: time pressure, exam stress, and the need for direct help.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Part 2 */}
          <section className="mb-8">
            <button
              onClick={() => toggleSection('part2')}
              className="w-full text-left glass-card p-6 hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-foreground">
                  Part 2: The Hidden Complexity of Teaching
                </h2>
                {expandedSections.has('part2') ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </button>
            
            {expandedSections.has('part2') && (
              <div className="mt-4 space-y-6 glass-card p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">What Actually Happens When Humans Teach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Effective human teachers perform a complex cognitive dance that we rarely appreciate:
                  </p>
                  
                  <div className="space-y-4 mt-4">
                    <div className="bg-muted/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">1. Real-Time Diagnostic Assessment</h4>
                      <p className="text-muted-foreground text-sm">Within seconds, teachers assess:</p>
                      <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                        <li>What the student understands correctly</li>
                        <li>Where exactly confusion begins</li>
                        <li>Whether the issue is conceptual or procedural</li>
                        <li>The student's emotional state</li>
                        <li>Their learning style and preferences</li>
                        <li>Cultural and contextual factors</li>
                      </ul>
                    </div>

                    <div className="bg-muted/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">2. Strategic Decision Making</h4>
                      <p className="text-muted-foreground text-sm">Teachers constantly decide:</p>
                      <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                        <li>Should I explain or let them discover?</li>
                        <li>Is this a knowledge gap or confidence issue?</li>
                        <li>Do they need the concept or just the answer?</li>
                        <li>Should I simplify or challenge?</li>
                        <li>When should I break pedagogical "rules"?</li>
                      </ul>
                    </div>

                    <div className="bg-muted/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">3. Adaptive Communication</h4>
                      <p className="text-muted-foreground text-sm">Teachers dynamically adjust:</p>
                      <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                        <li>Vocabulary complexity</li>
                        <li>Explanation style (visual, verbal, kinesthetic)</li>
                        <li>Pacing and depth</li>
                        <li>Emotional tone</li>
                        <li>Level of directness</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Why Current AI Fails at Teaching</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground">The One-Size-Fits-All Problem</h4>
                      <p className="text-muted-foreground mt-2">
                        Most AI models are trained on "correct" explanations, creating a fundamental issue:
                      </p>
                      <div className="bg-muted/30 p-4 rounded-lg mt-3">
                        <p className="text-sm font-semibold text-foreground mb-2">Real Teaching Needs:</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li><span className="font-semibold">For a 3rd grader:</span> "Plants are like little food factories that use sunlight as their power source!"</li>
                          <li><span className="font-semibold">For a visual learner:</span> "Imagine the leaf as a solar panel..."</li>
                          <li><span className="font-semibold">For a frustrated student:</span> "I know this seems weird. Let's just focus on this: plants eat sunlight and burp out oxygen."</li>
                          <li><span className="font-semibold">For a confident student:</span> "You're right that it's like eating, but instead of a mouth..."</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground">The Emotional Blindness Problem</h4>
                      <p className="text-muted-foreground mt-2">
                        Current benchmarks don't measure emotional intelligence. An AI might correctly solve mathematical problems but completely fail when a student says: "I'm too dumb for algebra. My brain doesn't work like everyone else's."
                      </p>
                      <p className="text-muted-foreground mt-2">
                        The first requires calculation. The second requires recognizing learning trauma, building confidence, and possibly identifying learning differences—none of which appear in traditional benchmarks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Part 3 */}
          <section className="mb-8">
            <button
              onClick={() => toggleSection('part3')}
              className="w-full text-left glass-card p-6 hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-foreground">
                  Part 3: The Real Cost of Bad AI Teaching
                </h2>
                {expandedSections.has('part3') ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </button>
            
            {expandedSections.has('part3') && (
              <div className="mt-4 space-y-6 glass-card p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Immediate Educational Damage</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-destructive pl-4">
                      <h4 className="font-semibold text-foreground">Reinforced Misconceptions</h4>
                      <p className="text-muted-foreground mt-2">
                        When AI provides technically correct but pedagogically inappropriate explanations, students often develop deeper misconceptions:
                      </p>
                      <div className="bg-destructive/10 p-3 rounded mt-2">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold">Example:</span> Student thinks multiplication always makes numbers bigger<br/>
                          <span className="font-semibold">AI Response:</span> "Multiplication is repeated addition..."<br/>
                          <span className="font-semibold">Result:</span> Reinforces the misconception (what about 0.5 × 10?)
                        </p>
                      </div>
                    </div>

                    <div className="border-l-4 border-destructive pl-4">
                      <h4 className="font-semibold text-foreground">Increased Anxiety and Frustration</h4>
                      <p className="text-muted-foreground mt-2">
                        Students already struggling with content now also struggle with the AI:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                        <li>"Even the AI can't help me understand"</li>
                        <li>"I must be really stupid if a computer can't teach me"</li>
                        <li>"This confirms math isn't for me"</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-destructive pl-4">
                      <h4 className="font-semibold text-foreground">Learned Helplessness</h4>
                      <p className="text-muted-foreground mt-2">
                        When AI consistently fails to adapt to student needs:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                        <li>Students stop asking for help</li>
                        <li>They assume they're incapable</li>
                        <li>They develop avoidance behaviors</li>
                        <li>Academic self-concept deteriorates</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Long-Term Systemic Damage</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-destructive/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Widening Achievement Gaps</h4>
                      <p className="text-sm text-muted-foreground">
                        Ineffective AI tutoring disproportionately harms:
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                        <li>Students with learning differences</li>
                        <li>English language learners</li>
                        <li>Students from different cultural backgrounds</li>
                        <li>Those with less academic support at home</li>
                      </ul>
                    </div>

                    <div className="bg-destructive/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Teacher Burden Increase</h4>
                      <p className="text-sm text-muted-foreground">
                        Instead of reducing workload, bad teaching AI creates new problems:
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                        <li>Teachers must undo AI-created confusion</li>
                        <li>They need to rebuild damaged confidence</li>
                        <li>They spend time teaching "around" the AI</li>
                        <li>Professional satisfaction decreases</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Part 4 */}
          <section className="mb-8">
            <button
              onClick={() => toggleSection('part4')}
              className="w-full text-left glass-card p-6 hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-foreground">
                  Part 4: Why PTEB is the Solution
                </h2>
                {expandedSections.has('part4') ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </button>
            
            {expandedSections.has('part4') && (
              <div className="mt-4 space-y-6 glass-card p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Measuring What Actually Matters</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-destructive/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Traditional Benchmark</h4>
                      <p className="text-sm text-muted-foreground">
                        Question: "What is the capital of France?"<br/>
                        Answer: "Paris"<br/>
                        Score: 100% ✓
                      </p>
                    </div>
                    
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">PTEB Evaluation</h4>
                      <p className="text-sm text-muted-foreground">
                        Student: "I keep forgetting capitals. Paris, London, Berlin - they all blur together."
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">AI Response Evaluated On:</p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Did it recognize the memorization problem?</li>
                        <li>Did it offer memory strategies?</li>
                        <li>Did it address frustration?</li>
                        <li>Did it provide useful patterns?</li>
                        <li>Did it adapt to the learning issue?</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Real Teaching Scenarios</h3>
                  <p className="text-muted-foreground mb-4">
                    PTEB uses situations every teacher faces daily:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-muted/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">The Confusion Spiral</h4>
                      <div className="text-sm font-mono text-muted-foreground">
                        Student: "I don't get it"<br/>
                        AI: [Explains]<br/>
                        Student: "I still don't get it"<br/>
                        AI: [Must explain differently]<br/>
                        Student: "This is different from what you said before"<br/>
                        AI: [Must manage confusion without adding to it]
                      </div>
                    </div>

                    <div className="bg-muted/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">The Confidence Crisis</h4>
                      <div className="text-sm font-mono text-muted-foreground">
                        Student: "I'm the dumbest kid in class"<br/>
                        AI: [Must balance emotional support with academic help]
                      </div>
                    </div>

                    <div className="bg-muted/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">The Time Pressure Dilemma</h4>
                      <div className="text-sm font-mono text-muted-foreground">
                        Student: "Just tell me the answer! Test in 5 minutes!"<br/>
                        AI: [Must decide: Teach or tell?]
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">The Multi-Dimensional Assessment</h3>
                  <p className="text-muted-foreground mb-4">
                    PTEB recognizes teaching quality isn't binary:
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground text-sm mb-2">Dimension 1: Confusion Recognition</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Can the AI identify what's actually wrong?</li>
                        <li>• Does it distinguish confusion types?</li>
                        <li>• Can it trace misconceptions to their source?</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground text-sm mb-2">Dimension 2: Adaptive Response</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Does explanation match student need?</li>
                        <li>• Can it truly vary approaches?</li>
                        <li>• Does complexity match capability?</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground text-sm mb-2">Dimension 3: Learning Facilitation</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Would a real student understand?</li>
                        <li>• Does it build on prior knowledge?</li>
                        <li>• Are connections meaningful?</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground text-sm mb-2">Dimension 4: Strategic Decision-Making</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Does it know when to guide vs. tell?</li>
                        <li>• Can it recognize when to change tactics?</li>
                        <li>• Does it balance short and long-term learning?</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground text-sm mb-2">Dimension 5: Emotional Intelligence</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Does it recognize emotional states?</li>
                        <li>• Can it rebuild confidence?</li>
                        <li>• Does it maintain motivation?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Part 5 */}
          <section className="mb-8">
            <button
              onClick={() => toggleSection('part5')}
              className="w-full text-left glass-card p-6 hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-foreground">
                  Part 5: The Transformative Potential of Proper Assessment
                </h2>
                {expandedSections.has('part5') ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </button>
            
            {expandedSections.has('part5') && (
              <div className="mt-4 space-y-6 glass-card p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Immediate Benefits of PTEB Implementation</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">For AI Developers</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Clear Development Targets</li>
                        <li>• Meaningful Differentiation</li>
                        <li>• User-Aligned Metrics</li>
                        <li>• Innovation Direction</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">For Educators</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Informed Selection</li>
                        <li>• Appropriate Deployment</li>
                        <li>• Trust Building</li>
                        <li>• Professional Development</li>
                      </ul>
                    </div>

                    <div className="bg-accent/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">For Students</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Effective Support</li>
                        <li>• Emotional Safety</li>
                        <li>• Personalized Learning</li>
                        <li>• Maintained Motivation</li>
                      </ul>
                    </div>

                    <div className="bg-muted/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">For Institutions</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Better Outcomes</li>
                        <li>• Reduced Support Costs</li>
                        <li>• Higher Satisfaction</li>
                        <li>• Competitive Advantage</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">The Network Effect of Better Standards</h3>
                  <p className="text-muted-foreground mb-4">
                    When the industry adopts teaching effectiveness metrics:
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-16 text-xs font-semibold text-secondary">Year 1</span>
                      <div className="flex-1 bg-gradient-to-r from-secondary/20 to-transparent p-2 rounded">
                        <p className="text-sm text-muted-foreground">AI developers refocus on teaching capabilities</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-16 text-xs font-semibold text-secondary">Year 2</span>
                      <div className="flex-1 bg-gradient-to-r from-secondary/30 to-transparent p-2 rounded">
                        <p className="text-sm text-muted-foreground">First generation of teaching-effective AI emerges</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-16 text-xs font-semibold text-secondary">Year 3</span>
                      <div className="flex-1 bg-gradient-to-r from-secondary/40 to-transparent p-2 rounded">
                        <p className="text-sm text-muted-foreground">Educators gain confidence, adoption increases</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-16 text-xs font-semibold text-secondary">Year 4</span>
                      <div className="flex-1 bg-gradient-to-r from-secondary/50 to-transparent p-2 rounded">
                        <p className="text-sm text-muted-foreground">Student outcomes improve measurably</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-16 text-xs font-semibold text-secondary">Year 5</span>
                      <div className="flex-1 bg-gradient-to-r from-secondary/60 to-transparent p-2 rounded">
                        <p className="text-sm text-muted-foreground">Educational AI becomes transformative, not disruptive</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Conclusion */}
          <section className="mb-8">
            <button
              onClick={() => toggleSection('conclusion')}
              className="w-full text-left glass-card p-6 hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-foreground">
                  Conclusion: From Knowledge to Understanding
                </h2>
                {expandedSections.has('conclusion') ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </button>
            
            {expandedSections.has('conclusion') && (
              <div className="mt-4 space-y-4 glass-card p-6">
                <p className="text-muted-foreground leading-relaxed">
                  The education sector's current focus on AI accuracy metrics is not just inadequate—it's actively harmful. We're deploying sophisticated answer-machines into contexts requiring patient, adaptive teachers. The result is frustrated students, overwhelmed teachers, and unfulfilled promise.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  The Pragmatic Teaching Effectiveness Benchmark represents more than a new evaluation tool. It's a paradigm shift in how we think about educational AI. By measuring what actually matters—the ability to recognize confusion, adapt explanations, manage emotions, and facilitate real understanding—PTEB enables the development of AI that genuinely helps students learn.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  The stakes couldn't be higher. Educational AI will shape how millions of students learn, think, and develop. Whether that influence is positive or negative depends entirely on whether we measure and optimize for the right things. Knowledge without teaching ability is merely information. Teaching effectiveness transforms information into understanding, confusion into clarity, and frustration into achievement.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  The question isn't whether AI will be part of education's future—it will be. The question is whether that AI will actually know how to teach. PTEB ensures we can answer "yes" with confidence.
                </p>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                  <p className="text-lg font-semibold text-center text-foreground italic">
                    "The future of education depends not on how much AI knows, but on how well it can teach. The time to measure what matters is now."
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* Call to Action */}
          <section className="glass-card p-8">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Call to Action</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">For Educators</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Demand teaching effectiveness metrics from AI vendors</li>
                  <li>• Pilot PTEB evaluation in your institution</li>
                  <li>• Share experiences with ineffective AI</li>
                  <li>• Advocate for student-centered AI assessment</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">For AI Developers</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Integrate PTEB metrics into development</li>
                  <li>• Collect teaching effectiveness data</li>
                  <li>• Train models on pedagogical objectives</li>
                  <li>• Compete on teaching quality, not just accuracy</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">For Researchers</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Contribute to teaching effectiveness research</li>
                  <li>• Develop new pedagogical training methods</li>
                  <li>• Study the impact of teaching-effective AI</li>
                  <li>• Advance the science of AI pedagogy</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">For Policymakers</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Require teaching effectiveness validation</li>
                  <li>• Fund research into pedagogical AI</li>
                  <li>• Establish standards for educational AI</li>
                  <li>• Protect students from ineffective AI</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Recognize that in education, knowing the answer is just the beginning. Teaching is about guiding another mind from confusion to understanding, from frustration to confidence, from "I can't" to "I can."
              </p>
              <p className="text-lg font-semibold text-foreground">
                That's what we must measure. That's what PTEB provides. That's why it matters.
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Index;
