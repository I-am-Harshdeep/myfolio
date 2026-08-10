import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/myfolio" : "";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono selection:bg-fuchsia-500/30 selection:text-fuchsia-200 overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-fuchsia-900/20 to-transparent opacity-30" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-cyan-900/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:to-cyan-400 transition-all duration-300"
          >
            HARSHFOLIO
          </Link>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-cyan-700/80">
            <Link href="#work" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">PROJECTS</Link>
            <Link href="#experience" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">EXPERIENCE</Link>
            <Link href="#philosophy" className="hover:text-fuchsia-400 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)] transition-all">ABOUT</Link>
            <Link href="#contact" className="hover:text-yellow-400 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] transition-all">CONTACT</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 space-y-8 relative">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-bold tracking-widest uppercase animate-pulse">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />
              FULL-STACK ENGINEER
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              Harshdeep Singh<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 animate-gradient-x">Building production-ready apps</span> <br />
              with scalable cloud architecture
            </h1>
          </div>
          <p className="text-lg md:text-xl text-cyan-100/70 max-w-2xl leading-relaxed font-light border-l-2 border-fuchsia-500/50 pl-6">
            Hands-on Full-Stack Engineer focused on secure, scalable, and production-ready solutions. Experienced in reducing backend response times, maintaining 99.9% uptime, and accelerating feature delivery with AI-assisted tooling.
          </p>
          <div className="pt-8 flex flex-wrap gap-4">
            <Link 
              href="#work" 
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-cyan-950/30 border border-cyan-500/50 text-cyan-300 font-bold tracking-widest uppercase text-sm overflow-hidden hover:bg-cyan-900/50 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                VIEW PROJECTS <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </Link>
            <a
              href="mailto:beyourselfharsh@gmail.com"
              className="px-8 py-3 border border-cyan-700/50 text-cyan-200 font-bold tracking-widest uppercase text-sm hover:bg-cyan-950/60 transition-all"
            >
              EMAIL ME
            </a>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-20 space-y-12">
          <div className="flex items-end justify-between border-b border-cyan-900/30 pb-4">
            <h2 className="text-2xl font-bold tracking-widest text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.6)]">
              // SELECTED_WORK
            </h2>
            <span className="text-xs font-mono text-cyan-700">Production-ready systems, AI-enabled tooling, and cloud-scaled applications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Cloud-Based Music Subscription App"
              description="Built a scalable music subscription platform with secure auth, automated media processing, and Ubuntu-hosted deployment on AWS." 
              tags={["AWS", "Python", "Ubuntu", "Nginx"]}
              color="cyan"
              href="#"
            />
            <ProjectCard 
              title="BroCode Study Partner Platform"
              description="Delivered a global student collaboration app with real-time workflows, optimized Django ORM, and responsive cross-device UI. Live demo available." 
              tags={["Django", "JavaScript", "SQL", "LIVE DEMO"]}
              color="fuchsia"
              href="https://brocode-app-a7ad7894da36.herokuapp.com/"
            />
            <ProjectCard 
              title="Rule-Based CPQ System"
              description="Owned the full TypeScript/Node.js CPQ build for 200+ configurations, focusing on clean architecture, type safety, and Agile delivery." 
              tags={["TypeScript", "Node.js", "Agile", "API"]}
              color="purple"
              href="#"
            />
            <ProjectCard 
              title="Banking Automation & OCR Workflow"
              description="Implemented cloud-integrated document processing and enterprise banking portal enhancements for Axis Bank with high reliability." 
              tags={["AWS", "OCR", "Banking", "Security"]}
              color="yellow"
              href="#"
            />
          </div>
        </section>

        <section id="experience" className="py-20 space-y-12 border-t border-cyan-900/30">
          <div className="flex items-end justify-between border-b border-cyan-900/30 pb-4">
            <h2 className="text-2xl font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              // EXPERIENCE
            </h2>
            <span className="text-xs font-mono text-cyan-700">Impact-driven roles in software delivery, support, and mentoring</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-[#0a0a1a] border border-cyan-900/30 rounded-sm">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wider">Software Engineer, Servosys Solutions</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-500 mt-2">Feb 2026 – Present • Noida, India</p>
                </div>
                <span className="text-sm text-cyan-400">Axis Bank, enterprise banking</span>
              </div>
              <ul className="mt-4 space-y-3 text-cyan-200/80 text-sm leading-relaxed">
                <li>Delivered enterprise banking enhancements and sustained internal portals with secure, high-availability design.</li>
                <li>Built OCR document processing workflows to automate verification and reduce manual data entry.</li>
                <li>Integrated AWS cloud services to scale performance and support reliable production deployments.</li>
              </ul>
            </div>

            <div className="p-6 bg-[#0a0a1a] border border-cyan-900/30 rounded-sm">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wider">Associate Customer Support Analyst, Tech Mahindra</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-500 mt-2">Aug 2025 – Feb 2026 • Melbourne, VIC</p>
                </div>
                <span className="text-sm text-cyan-400">Salesforce, ServiceNow, CRM</span>
              </div>
              <ul className="mt-4 space-y-3 text-cyan-200/80 text-sm leading-relaxed">
                <li>Managed order tracking, scheduling, and support workflows to maintain SLA compliance and high customer satisfaction.</li>
                <li>Coordinated cross-functional teams to resolve service requests and ensure accurate order updates.</li>
                <li>Documented interactions and generated performance reports using CRM and ticketing systems.</li>
              </ul>
            </div>

            <div className="p-6 bg-[#0a0a1a] border border-cyan-900/30 rounded-sm">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wider">Software Engineer, Fibreglass Transport Equipment PVT. LTD.</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-500 mt-2">Mar 2025 – Jun 2025 • Melbourne, VIC</p>
                </div>
                <span className="text-sm text-cyan-400">TypeScript, Node.js, CPQ</span>
              </div>
              <ul className="mt-4 space-y-3 text-cyan-200/80 text-sm leading-relaxed">
                <li>Built a rule-based CPQ system from end to end, delivering configuration management for 200+ options.</li>
                <li>Served as a core member of a 5-person Agile team, taking features from discovery through release.</li>
                <li>Boosted velocity with AI-assisted tooling while enforcing strict linting and quality standards.</li>
              </ul>
            </div>

            <div className="p-6 bg-[#0a0a1a] border border-cyan-900/30 rounded-sm">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wider">Peer Mentor, Royal Melbourne Institute of Technology</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-500 mt-2">Mar 2024 – Jul 2025 • Melbourne, VIC</p>
                </div>
                <span className="text-sm text-cyan-400">Mentoring, collaboration, learning</span>
              </div>
              <ul className="mt-4 space-y-3 text-cyan-200/80 text-sm leading-relaxed">
                <li>Mentored students on technical and professional growth, elevating team confidence and outcomes.</li>
                <li>Facilitated knowledge-sharing sessions to create a collaborative learning culture on campus.</li>
                <li>Helped drive a 20% increase in mentee engagement and retention across mentoring initiatives.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Philosophy / Approach */}
        <section id="philosophy" className="py-20 grid md:grid-cols-12 gap-12 border-t border-cyan-900/30">
          <div className="md:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              {"// ABOUT_ME"}
            </h2>
            
            {/* Profile Image - Replace src with your image in /public */}
            <div className="relative w-full aspect-[4/5] border border-cyan-500/30 rounded-sm overflow-hidden bg-cyan-950/30 group">
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:100%_4px] z-20 pointer-events-none" />
              
              <Image 
                src={`${basePath}/1000054066.png`}
                alt="Profile"
                fill
                className="object-cover z-0 opacity-100 transition-all duration-500"
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-8 text-cyan-100/80 leading-relaxed font-light">
            <p>
              I&apos;m a Master of Information Technology from RMIT, Australia with a proven record of delivering enterprise software that is secure, scalable and production-ready. I combine full-stack engineering, cloud architecture, and AI-assisted development to ship features fast while keeping systems stable.
            </p>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="p-6 bg-cyan-950/20 border border-cyan-500/20 rounded-sm">
                <h3 className="text-cyan-300 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">EDUCATION</h3>
                <div className="space-y-4 text-sm text-cyan-200/70">
                  <div>
                    <p className="font-bold text-white">Royal Melbourne Institute of Technology</p>
                    <p>Master of Information Technology • GPA 3.3/4.0</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-500">Aug 2023 – Jul 2025</p>
                  </div>
                  <div>
                    <p className="font-bold text-white">Guru Tegh Bahadur Institute of Technology</p>
                    <p>Bachelor of Technology • GPA 9.23/10.0</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-500">Aug 2018 – Jul 2022</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-cyan-950/20 border border-cyan-500/20 rounded-sm">
                <h3 className="text-cyan-300 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">TECH SKILLS</h3>
                <div className="grid gap-3 text-sm text-cyan-200/70">
                  <div>
                    <p className="font-bold text-white uppercase tracking-[0.2em] text-[10px]">Frontend</p>
                    <p>Angular, TypeScript, React, Next.js, HTML5, CSS</p>
                  </div>
                  <div>
                    <p className="font-bold text-white uppercase tracking-[0.2em] text-[10px]">Backend</p>
                    <p>.NET Core, C#, Spring Boot, Java, Node.js, RESTful APIs, Microservices</p>
                  </div>
                  <div>
                    <p className="font-bold text-white uppercase tracking-[0.2em] text-[10px]">Cloud & DevOps</p>
                    <p>Azure, AWS (EC2, S3, Lambda), Docker, Nginx, CI/CD, GitHub Actions</p>
                  </div>
                  <div>
                    <p className="font-bold text-white uppercase tracking-[0.2em] text-[10px]">Databases</p>
                    <p>PostgreSQL, MySQL, MongoDB, DynamoDB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-cyan-950/20 border border-cyan-500/20 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500" />
              <div className="grid grid-cols-2 gap-8 font-mono text-sm">
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">CERTIFICATIONS</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li>University of Alberta: Software Architecture and Design Patterns</li>
                    <li>EY - Microsoft AI Skills Passport</li>
                    <li>Stanford Machine Learning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">TOOLS</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li>Claude / AI-assisted development</li>
                    <li>Jest, JUnit5, ESLint, Git, Jira</li>
                    <li>Agile workflows, code reviews, testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-cyan-900/30">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              LET&apos;S BUILD SOMETHING <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">REAL</span>
            </h2>
            <p className="text-cyan-200/60 text-lg">
              Reach out to discuss software engineering, cloud architecture, AI-enabled development, or a new product challenge. I&apos;m available for full-time roles, consulting, and technical delivery.
            </p>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-cyan-100/80 text-sm font-mono">
                <div className="bg-[#0a0a1a] p-5 border border-cyan-900/30 rounded-sm">
                  <p className="text-cyan-400 uppercase tracking-[0.3em] text-[10px] mb-3">Email</p>
                  <a href="mailto:beyourselfharsh@gmail.com" className="text-cyan-200 hover:text-cyan-100">beyourselfharsh@gmail.com</a>
                </div>
                <div className="bg-[#0a0a1a] p-5 border border-cyan-900/30 rounded-sm">
                  <p className="text-cyan-400 uppercase tracking-[0.3em] text-[10px] mb-3">Phone</p>
                  <a href="tel:+918368917234" className="text-cyan-200 hover:text-cyan-100">+91 8368917234</a>
                </div>
                <div className="bg-[#0a0a1a] p-5 border border-cyan-900/30 rounded-sm">
                  <p className="text-cyan-400 uppercase tracking-[0.3em] text-[10px] mb-3">LinkedIn</p>
                  <a href="https://linkedin.com/in/harshdeep-singh-1303/" target="_blank" rel="noopener noreferrer" className="text-cyan-200 hover:text-cyan-100">linkedin.com/in/harshdeep-singh-1303</a>
                </div>
                <div className="bg-[#0a0a1a] p-5 border border-cyan-900/30 rounded-sm">
                  <p className="text-cyan-400 uppercase tracking-[0.3em] text-[10px] mb-3">GitHub</p>
                  <a href="https://github.com/I-am-Harshdeep" target="_blank" rel="noopener noreferrer" className="text-cyan-200 hover:text-cyan-100">github.com/I-am-Harshdeep</a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 pt-4">
                <a 
                  href="/Harshdeep_Singh_Resume.pdf" 
                  download
                  className="px-10 py-4 bg-fuchsia-600 text-white font-bold tracking-widest uppercase text-sm hover:bg-fuchsia-500 transition-all hover:shadow-[0_0_30px_rgba(232,121,249,0.6)] hover:scale-105 duration-300"
                >
                  DOWNLOAD RESUME
                </a>
                <div className="flex items-center justify-center gap-8 text-xs uppercase tracking-[0.3em] text-cyan-700">
                  <SocialLink href="https://github.com/I-am-Harshdeep" label="GITHUB" />
                  <SocialLink href="https://linkedin.com/in/harshdeep-singh-1303/" label="LINKEDIN" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs font-mono text-cyan-200/80 border-t border-cyan-900/20">
        <p>Built by Harshdeep Singh • <a href="mailto:beyourselfharsh@gmail.com" className="text-cyan-100 hover:text-cyan-50 transition-all">beyourselfharsh@gmail.com</a> • <a href="https://github.com/I-am-Harshdeep" target="_blank" rel="noopener noreferrer" className="text-cyan-100 hover:text-cyan-50 transition-all">GitHub</a></p>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, tags, color, href }: { title: string, description: string, tags: string[], color: "cyan" | "fuchsia" | "purple" | "yellow", href: string }) {
  // Valid color options for the card styling
  const validColors = ["cyan", "fuchsia", "purple", "yellow"] as const;
  
  // Runtime validation: default to "cyan" if an invalid color is provided
  const safeColor = validColors.includes(color) ? color : "cyan";

  const colorClasses = {
    cyan: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    fuchsia: "group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]",
    purple: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    yellow: "group-hover:border-yellow-500/50 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
  };

  const textColors = {
    cyan: "group-hover:text-cyan-400",
    fuchsia: "group-hover:text-fuchsia-400",
    purple: "group-hover:text-purple-400",
    yellow: "group-hover:text-yellow-400",
  };

  return (
    <Link href={href} className={`group block space-y-4 p-6 bg-[#0a0a1a] border border-cyan-900/30 transition-all duration-300 ${colorClasses[safeColor]}`}>
      <div className="flex justify-between items-start">
        <h3 className={`text-xl font-bold text-white tracking-wider transition-colors ${textColors[safeColor]}`}>
          {title}
        </h3>
        <ArrowUpRightIcon className={`w-5 h-5 text-cyan-700 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${textColors[safeColor]}`} />
      </div>
      <p className="text-sm text-cyan-100/60 leading-relaxed font-light border-l border-cyan-900/50 pl-4">
        {description}
      </p>
      <div className="flex gap-2 pt-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-cyan-700 bg-cyan-950/30 px-2 py-1 border border-cyan-900/30 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function SocialLink({ href, label }: { href: string, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-xs font-bold tracking-widest text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all"
    >
      {label}
    </a>
  );
}

// Simple Icons
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}
