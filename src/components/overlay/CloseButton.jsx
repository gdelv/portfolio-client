import useStore from '../../store/useStore'

export default function CloseButton() {
  const closePanel = useStore((s) => s.closePanel)

  return (
    <button
      onClick={closePanel}
      className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white text-xl"
      aria-label="Close panel"
    >
      &times;
    </button>
  )
}
