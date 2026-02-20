const contacts = [
  { label: 'giudelvecchio@gmail.com', href: 'mailto:giudelvecchio@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/giusseppe-del-vecchio/' },
  { label: 'GitHub', href: 'https://github.com/gdelv' },
  // { label: '+1 (516) 864-3657', href: 'tel:+15168643657' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative h-screen flex items-center overflow-hidden">
      {/* Section number */}
      <div
        className="absolute bottom-8 right-8 md:right-16 text-[8rem] md:text-[12rem] font-bold leading-none text-white/[0.03] select-none"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        04
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[350px] h-[450px] rounded-2xl bg-gradient-to-br from-red-600/15 to-orange-600/5 rotate-6 hidden lg:block" />

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight reveal-left"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Get In
          <br />
          Touch
        </h2>

        <div className="mt-10 flex flex-col gap-4 max-w-md stagger">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group flex items-center gap-4 text-white/50 hover:text-white transition-colors"
            >
              <div className="w-8 h-[1px] bg-white/20 group-hover:bg-red-500 group-hover:w-12 transition-all duration-300" />
              <span className="text-lg">{c.label}</span>
            </a>
          ))}
        </div>

        <div className="mt-16 reveal" style={{ transitionDelay: '0.5s' }}>
          <p className="text-white/20 text-sm">
            &copy; {new Date().getFullYear()} Giusseppe Del Vecchio
          </p>
        </div>
      </div>
    </section>
  )
}
