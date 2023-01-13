import { animated, useSpring } from 'react-spring'

const SideBar = ({ animationRef }: { animationRef: any }) => {
  const slideLeft = useSpring({
    from: { x: '100%' },
    to: { x: '0%' },
    ref: animationRef
  })

  return (
    <animated.div
      className=" bg-darkBlue h-screen absolute right-0 opacity-90 top-0 z-20 rounded-tl-lg rounded-bl-full w-[30%] hidden md:block"
      style={slideLeft}
    ></animated.div>
  )
}

export default SideBar
