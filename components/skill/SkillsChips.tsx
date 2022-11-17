const SkillChip = ({ icon, title }: { icon: JSX.Element; title: string }) => {
  return (
    <div className="rounded-full bg-white/10 border border-white text-white px-4 text-sm py-0.5 md:py-2 inline-flex items-center justify-center hover:bg-white hover:text-darkBlue transition-colors duration-150 ease-in-out">
      {icon} <span className="ml-3 whitespace-nowrap">{title}</span>
    </div>
  )
}

export default SkillChip
