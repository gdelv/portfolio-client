import { skills } from '../../data/skills'

export default function SkillsPanel() {
  return (
    <div>
      <h2
        className="text-3xl font-bold mb-6"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-green-500/15 border border-green-400/25 text-green-300 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
