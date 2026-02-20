export default function AboutPanel() {
  return (
    <div>
      <h2
        className="text-3xl font-bold mb-6"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        About Me
      </h2>

      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <img
          src="/images/Gheadshot.jpeg"
          alt="Giusseppe"
          className="w-32 h-32 rounded-full object-cover border-2 border-blue-400/40 flex-shrink-0"
        />
        <div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Hi! I'm Giusseppe. An NYC-based software engineer who enjoys taking
            on new challenges and creating user friendly apps. When I am not
            coding you can find me spending time with my twin girls or cooking up
            a new recipe in the kitchen.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            I'm a software engineer with a passion for solving problems, learning
            new skills, and improving existing ones.
          </p>
          <a
            href="https://drive.google.com/file/d/10QnAWpwkyFLujv9Wm74F-8ll6H8P0PUc/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-lg bg-blue-500/20 border border-blue-400/30 text-blue-300 hover:bg-blue-500/30 transition-colors"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  )
}
