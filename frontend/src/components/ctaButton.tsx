export default function CTAButton({
  children,
  className,
  inverted,
  onClick,
  disabled,
}: {
  children: React.ReactNode
  className?: string
  inverted?: boolean
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`text-base cursor-pointer border-brandgreen px-2 border p-2 rounded-md transition-all duration-300 ease-in-out text-center disabled:opacity-50 disabled:cursor-not-allowed ${className} ${
        inverted
          ? 'text-textblack bg-textgreen hover:text-white hover:bg-brandgreen hover:border-textgreen'
          : 'text-textgreen  hover:bg-textgreen hover:text-textblack'
      }`}
    >
      {children}
    </button>
  )
}
