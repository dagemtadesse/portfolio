import { animated, useSpring } from 'react-spring'
import DownloadIcon from '../icons/DownloadIcon'

const DownloadButton = ({ animationRef }: { animationRef: any }) => {
  const animation = useSpring({
    from: { scale: 0 },
    scale: 1,
    ref: animationRef
  })
  return (
    <animated.button
      className="text-balck border-2 border-black md:border-white bg-white/10 rounded-lg px-6 py-2 flex items-center md:text-white"
      style={animation}
    >
      <span>Download</span>
      <span className="ml-2">
        <DownloadIcon />
      </span>
    </animated.button>
  )
}

export default DownloadButton
