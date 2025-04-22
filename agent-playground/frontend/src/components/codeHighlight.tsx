export default function CodeHighlight({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className="bg-red-100 text-gray-800 font-mono px-2 py-0.5 rounded text-sm break-all">
      {children}
    </span>
  )
}
