export default function AboutSection() {
  return (
    <section id="about" className="relative h-screen flex items-center overflow-hidden">
      {/* Section number */}
      <div
        className="absolute bottom-8 right-8 md:right-16 text-[8rem] md:text-[12rem] font-bold leading-none text-white/[0.03] select-none"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        01
      </div>

      {/* Decorative element */}
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[400px] h-[500px] rounded-2xl bg-gradient-to-br from-blue-600/10 to-indigo-600/5 -rotate-6 hidden lg:block" />

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left - Text */}
          <div className="lg:w-1/2">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight reveal-left"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              About
              <br />
              Me
            </h2>
            <div className="mt-6 flex items-start gap-4 reveal-left" style={{ transitionDelay: '0.15s' }}>
              <div className="w-10 h-[2px] bg-red-500 mt-3 flex-shrink-0" />
              <p className="text-white/60 leading-relaxed text-lg">
                NYC-based Senior Full-Stack Engineer focused on AI-powered automation, commerce systems, and scalable web architecture.
              </p>
            </div>
            <p className="mt-6 ml-14 text-white/40 leading-relaxed reveal-left" style={{ transitionDelay: '0.3s' }}>
              I design and build high-performance applications that transform complex ideas into intuitive, production-grade products.
            </p>
            <a
              href="https://drive.google.com/file/d/10QnAWpwkyFLujv9Wm74F-8ll6H8P0PUc/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 ml-14 px-6 py-3 rounded-full border border-red-500/30 text-red-400 text-sm hover:bg-red-500/10 transition-colors reveal-left"
              style={{ transitionDelay: '0.4s' }}
            >
              View Resume
            </a>
          </div>

          {/* Right - Photo + design text */}
          <div className="lg:w-1/2 flex justify-center reveal-right">
            <div className="relative">
              <img
                src="/images/Gheadshot.jpeg"
                alt="Giusseppe"
                className="w-32 h-40 md:w-72 md:h-96 object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 md:-right-8">
                <span
                  className="text-4xl md:text-5xl font-bold text-red-500/60"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {/* CODE */}
                </span>
              </div>
              {/* Border frame offset */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 translate-x-3 translate-y-3 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
