const StackChip = ({ label }: { label: string }) => {
  return (
    <button className="border border-black bg-black/10 rounded-full px-3 py-1 mt-1.5 text-xs">
      {label}
    </button>
  )
}

export default StackChip
