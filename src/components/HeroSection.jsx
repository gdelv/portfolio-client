export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/10 blur-sm" />
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5" />

      {/* Floating dots */}
      <div className="absolute top-[20%] left-[60%] w-1.5 h-1.5 rounded-full bg-red-400/60 animate-pulse" />
      <div className="absolute top-[70%] left-[75%] w-1 h-1 rounded-full bg-blue-400/40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[30%] left-[80%] w-2 h-2 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-4xl">
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight reveal-left"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          GIUS
          <br />
          SEPPE
        </h1>
        <div className="mt-6 flex items-center gap-4 reveal-left" style={{ transitionDelay: '0.2s' }}>
          <div className="w-10 h-[2px] bg-red-500" />
          <p className="text-white/60 text-lg">
            software engineer
          </p>
        </div>
        <p className="mt-4 text-white/40 text-sm tracking-widest reveal-left" style={{ transitionDelay: '0.3s' }}>
          NYC-BASED
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 md:left-16 flex items-center gap-3 text-white/30 text-xs tracking-[0.3em] rotate-0">
        <div className="w-[1px] h-12 bg-white/20 animate-pulse" />
        <span className="uppercase">Scroll down</span>
      </div>

      {/* Large "PORTFOLIO" text on right circle */}
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 hidden lg:block">
        <span
          className="text-5xl font-bold text-red-500/80 tracking-wider reveal-right"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          PORTFOLIO
        </span>
      </div>
    </section>
  )
}
