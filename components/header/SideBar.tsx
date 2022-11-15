import { animated, useSpring } from 'react-spring'
import { Pages } from '../../pages/_app'

const SideBar = () => {
  const slideLeft = useSpring({
    from: { x: '100%' },
    to: { x: '0%' },
  })

  return (
    <animated.div
      className=" bg-darkBlue h-screen absolute right-0 top-0 z-20 w-[33.333%]"
      style={slideLeft}
    ></animated.div>
  )
}

export default SideBar
