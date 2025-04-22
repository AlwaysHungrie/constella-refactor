export default function CTAButton({
  children,
  onClick,
  className,
  disabled = false,
}: {
  children: React.ReactNode
  onClick: () => void
  className?: string
  disabled?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white px-6 py-3 rounded-md hover:opacity-80 transition-colors cursor-pointer font-medium mx-auto ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  )
}
