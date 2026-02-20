const contacts = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/giusseppe-del-vecchio/',
    icon: '🔗',
    color: 'blue',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/gdelv',
    icon: '💻',
    color: 'gray',
  },
  {
    label: 'giudelvecchio@gmail.com',
    href: 'mailto:giudelvecchio@gmail.com',
    icon: '📧',
    color: 'purple',
  },
  {
    label: '+1 (516) 864-3657',
    href: 'tel:+15168643657',
    icon: '📱',
    color: 'purple',
  },
]

export default function ContactPanel() {
  return (
    <div>
      <h2
        className="text-3xl font-bold mb-6"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        Contact
      </h2>
      <p className="text-gray-300 mb-6">
        Let&apos;s connect! Feel free to reach out through any of the channels below.
      </p>
      <div className="flex flex-col gap-3">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-5 py-4 rounded-xl bg-purple-500/10 border border-purple-400/20 hover:bg-purple-500/20 transition-colors"
          >
            <span className="text-2xl">{c.icon}</span>
            <span className="text-gray-200">{c.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
