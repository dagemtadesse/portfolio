import { animated, useSpring } from 'react-spring'
import { Dispatch, SetStateAction } from 'react'
import CloseIcon from '../icons/CloseIcon'
import MenuIcon from '../icons/MenuIcon'

const SkillsButton = ({
  isShown,
  setIsShown,
}: {
  isShown: boolean
  setIsShown: Dispatch<SetStateAction<boolean>>
}) => {
  const animation = useSpring({
    config: {bounce: 1},
    scale: 1,
    from: { scale: 0 },
    delay: 600
  })
  return (
    <animated.button
      className="rounded-full bg-darkBlue text-white flex px-1.5 py-1.5 items-center"
      onClick={() => setIsShown((value) => !value)}
      style={animation}
    >
      <span className="ml-3">My Skills</span>
      <span className="bg-white rounded-full p-2 ml-12">
        {isShown ? <CloseIcon /> : <MenuIcon />}
      </span>
    </animated.button>
  )
}

export default SkillsButton
