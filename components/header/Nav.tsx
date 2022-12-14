import { animated, useSpring } from 'react-spring'
import { Pages } from '../../pages/_app'
import NavMenu from './NavMenu'

const Nav = ({ currentPage }: { currentPage: Pages }) => {

  const { x } = useSpring({
    from: { x: 100 },
    x: 0,
  })

  return (
    <div className="md:w-[33.333vw] top-0 right-0 bottom-0 h-6 relative z-20 mt-5 md:mt-0">
      <div className="w-full absolute right-0 bottom-0 flex md:justify-end md:pr-10">
        <NavMenu currentPage={currentPage} />
      </div>

      {currentPage === 'Portfolio' && (
        <animated.div
          className="absolute right-0 w-full bottom-0 md:flex justify-end pr-10 hidden"
          style={{ clipPath: x.to((x) => `inset(0 0 0 ${x}%)`) }}
        >
          <NavMenu currentPage={currentPage} contrast />
        </animated.div>
      )}
    </div>
  )
}

export default Nav
