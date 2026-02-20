import { projects } from '../data/projects'

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative h-screen flex flex-col justify-center overflow-hidden px-8 md:px-16 lg:px-24">
      {/* Section number */}
      <div
        className="absolute bottom-8 right-8 md:right-16 text-[8rem] md:text-[12rem] font-bold leading-none text-white/[0.03] select-none"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        01
      </div>

      {/* Title */}
      <h2
        className="text-4xl md:text-5xl font-bold leading-tight mb-6 reveal-left"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        Selected Works
      </h2>

      {/* 2x2 compact grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 stagger">
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 hover:border-red-500/20 hover:bg-white/[0.04] transition-all duration-500 block"
          >
            <div className="flex items-center gap-3 mb-1.5">
              <span className="text-red-500/60 text-xs font-mono">0{i + 1}</span>
              <h3
                className="text-base font-bold"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {project.title}
              </h3>
              <span className="ml-auto text-white/20 group-hover:text-white/50 transition-colors text-sm">&rarr;</span>
            </div>
            <p className="text-white/35 text-sm leading-snug mb-2 line-clamp-1">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/30">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
