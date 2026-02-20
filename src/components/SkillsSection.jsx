import { skills } from '../data/skills'

export default function SkillsSection() {
  return (
    <section id="skills" className="relative h-screen flex items-center overflow-hidden">
      {/* Section number */}
      <div
        className="absolute bottom-8 right-8 md:right-16 text-[8rem] md:text-[12rem] font-bold leading-none text-white/[0.03] select-none"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        03
      </div>

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left - Title */}
          <div className="lg:w-2/5">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight reveal-left"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Skills &
              <br />
              Tools
            </h2>
            <div className="mt-4 flex items-center gap-4 reveal-left" style={{ transitionDelay: '0.15s' }}>
              <div className="w-10 h-[2px] bg-red-500" />
              <p className="text-white/50">Technologies I work with</p>
            </div>
          </div>

          {/* Right - Skills grid */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 stagger">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="reveal group flex items-center gap-3 px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-red-500/20 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500/40 group-hover:bg-red-500 transition-colors" />
                  <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
