export const TextInput = ({
  value,
  onChange,
  placeholder,
  isTextArea = false,
  readOnly = false,
}: {
  value: string
  onChange?: (value: string) => void
  placeholder: string
  isTextArea?: boolean
  readOnly?: boolean
}) => {
  const baseClass = 'w-full p-2 rounded-xs text-sm bg-black text-textgreen focus:outline-none'
  if (isTextArea) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className={`${baseClass}`}
        rows={4}
        readOnly={readOnly}
      />
    )
  }

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      className={baseClass}
      readOnly={readOnly}
    />
  )
}
