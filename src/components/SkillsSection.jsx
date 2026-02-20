import { skills } from '../data/skills'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiSalesforce,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiOpenai,
  SiGooglegemini,
  SiOllama,
  SiClaude,
  SiStripe,
  SiJest,
  SiGithub,
  SiVercel,
  SiNetlify,
} from 'react-icons/si'

const iconMap = {
  'JavaScript (ES6+)':              { icon: SiJavascript,   color: '#F7DF1E' },
  'TypeScript':                     { icon: SiTypescript,   color: '#3178C6' },
  'React':                          { icon: SiReact,        color: '#61DAFB' },
  'Next.js':                        { icon: SiNextdotjs,    color: '#ffffff' },
  'Lightning Web Components (LWC)': { icon: SiSalesforce,   color: '#00A1E0' },
  'HTML5':                          { icon: SiHtml5,        color: '#E34F26' },
  'CSS3 / SCSS':                    { icon: SiCss3,         color: '#1572B6' },
  'Tailwind CSS':                   { icon: SiTailwindcss,  color: '#06B6D4' },
  'Node.js':                        { icon: SiNodedotjs,    color: '#339933' },
  'Express.js':                     { icon: SiExpress,      color: '#ffffff' },
  'Apex (Salesforce)':              { icon: SiSalesforce,   color: '#00A1E0' },
  'Server-Side Rendering (Next.js)':{ icon: SiNextdotjs,    color: '#ffffff' },
  'PostgreSQL':                     { icon: SiPostgresql,   color: '#4169E1' },
  'Firebase (Firestore & Auth)':    { icon: SiFirebase,     color: '#FFCA28' },
  'OpenAI API Integration':         { icon: SiOpenai,       color: '#10A37F' },
  'Gemini':                         { icon: SiGooglegemini, color: '#886FBF' },
  'Local LLM Deployment (Ollama)':  { icon: SiOllama,       color: '#ffffff' },
  'Claude Integration':             { icon: SiClaude,       color: '#D97757' },
  'Stripe API Integration':         { icon: SiStripe,       color: '#635BFF' },
  'Jest':                           { icon: SiJest,         color: '#C21325' },
  'Netlify Functions':              { icon: SiNetlify,      color: '#00C7B7' },
  'Git / GitHub':                   { icon: SiGithub,       color: '#ffffff' },
  'Vercel':                         { icon: SiVercel,       color: '#ffffff' },
}

const TEXT_ONLY_CATEGORIES = new Set(['Salesforce'])

function IconTile({ skill, entry }) {
  const Icon = entry.icon
  return (
    <div
      title={skill}
      className="group relative flex items-center justify-center w-10 h-10 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
    >
      <Icon size={20} style={{ color: entry.color }} className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {skill}
      </span>
    </div>
  )
}

function TextPill({ skill }) {
  return (
    <div className="group flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-red-500/20 hover:bg-white/[0.04] transition-all duration-300">
      <div className="w-1.5 h-1.5 rounded-full bg-red-500/40 group-hover:bg-red-500 transition-colors" />
      <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors">{skill}</span>
    </div>
  )
}

function CategoryBlock({ category, items }) {
  const forceTextOnly = TEXT_ONLY_CATEGORIES.has(category)
  const iconSkills = forceTextOnly ? [] : items.filter((s) => iconMap[s])
  const textSkills = forceTextOnly ? items : items.filter((s) => !iconMap[s])

  return (
    <div className="reveal">
      <p className="text-xs uppercase tracking-widest text-white/30 mb-3">{category}</p>
      <div className="flex flex-col gap-2">
        {iconSkills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {iconSkills.map((skill) => (
              <IconTile key={skill} skill={skill} entry={iconMap[skill]} />
            ))}
          </div>
        )}
        {textSkills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {textSkills.map((skill) => (
              <TextPill key={skill} skill={skill} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative min-h-screen py-20 flex items-center overflow-hidden">
      {/* Section number */}
      <div
        className="absolute bottom-8 right-8 md:right-16 text-[8rem] md:text-[12rem] font-bold leading-none text-white/[0.03] select-none"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        03
      </div>

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
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

          {/* Right - Categorized skills */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 stagger">
              {Object.entries(skills).map(([category, items]) => (
                <CategoryBlock key={category} category={category} items={items} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
