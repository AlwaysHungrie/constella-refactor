import { HiCheck } from 'react-icons/hi2'

export const Checkbox = ({
  checked,
  onChange,
}: {
  checked: boolean
  onChange?: () => void
}) => {
  return (
    <div
      className="flex items-center gap-2 bg-black p-1"
      onClick={onChange}
    >
      {checked ? (
        <HiCheck className="w-3 h-3" />
      ) : (
        <div className={`w-3 h-3 rounded-sm`} />
      )}
    </div>
  )
}
