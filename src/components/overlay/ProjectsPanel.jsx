import { projects } from '../../data/projects'

export default function ProjectsPanel() {
  return (
    <div>
      <h2
        className="text-3xl font-bold mb-6"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-red-400/20 bg-red-500/5 p-5"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-3 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded bg-white/10 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3 text-sm">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-300 hover:text-red-200 transition-colors"
              >
                Live Site &rarr;
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
