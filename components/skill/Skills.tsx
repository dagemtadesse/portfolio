import FigmaIcon from '../icons/FigmaIcon'
import NodeIcon from '../icons/Node'
import ReactIcon from '../icons/React'
import SkillChip from './SkillsChips'

const SKILLS = [
  { title: 'React.js', icon: <ReactIcon /> },
  { title: 'Node.js', icon: <NodeIcon /> },
  { title: 'UI / UX', icon: <FigmaIcon /> },
  { title: 'TypeScript', icon: <FigmaIcon /> },
  { title: 'TailwindCSS', icon: <FigmaIcon /> },
  { title: 'Next.js', icon: <FigmaIcon /> },
]

const Skills = () => {
  return (
    <div
      className="bg-darkBlue absolute bottom-0 left-0 right-0 z-0 py-5 px-[40px] flex gap-4 justify-center flex-wrap"
      id="skills_contianer"
    >
      {SKILLS.map((skill) => (
        <SkillChip {...skill} key={skill.title}/>
      ))}
    </div>
  )
}

export default Skills
