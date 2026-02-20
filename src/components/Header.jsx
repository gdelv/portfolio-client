function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5">
      <span
        className="text-sm tracking-widest text-white/80"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        Giusseppe Del Vecchio
      </span>
      <nav className="hidden md:flex items-center gap-8">
        <button onClick={() => scrollTo('home')} className="text-sm text-white/60 hover:text-white transition-colors">Home</button>
        <button onClick={() => scrollTo('about')} className="text-sm text-white/60 hover:text-white transition-colors">About</button>
        <button onClick={() => scrollTo('projects')} className="text-sm text-white/60 hover:text-white transition-colors">Works</button>
        <button onClick={() => scrollTo('skills')} className="text-sm text-white/60 hover:text-white transition-colors">Skills</button>
        <button onClick={() => scrollTo('contact')} className="text-sm text-white/60 hover:text-white transition-colors">Contact</button>
      </nav>
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/giusseppe-del-vecchio/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-colors text-sm"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/gdelv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-colors text-sm"
        >
          GitHub
        </a>
      </div>
    </header>
  )
}
