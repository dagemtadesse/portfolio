import '../styles/global.css'
import Link from 'next/link'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'

import Skills from '../components/skill/Skills'
import SkillsButton from '../components/skill/SkillsButton'
import Nav from '../components/header/Nav'
import SideBar from '../components/header/SideBar'

export type Pages = 'Home' | 'About' | 'Portfolio'

export default function App({ Component, pageProps }: AppProps) {
  const [isShown, setIsShown] = useState(false)
  const [currentPage, setCurrentPage] = useState<Pages>('Home')
  const [yPostion, setYPosition] = useState(0)

  const props = useSpring({
    from: { y: 0 },
    to: { y: isShown ? -yPostion : 0 },
  })

  useEffect(() => {
    setYPosition(document.querySelector('#skills_contianer')?.clientHeight || 0)
  })

  return (
    <div className="font-Montserrat">
      <animated.div
        className="absolute h-screen top-0 left-0 right-0 bg-white z-10 shadow-xl"
        style={props}
      >
        <div className="overflow-hidden w-screen h-screen relative z-10">
          {/* <div className="w-[824px] h-[824px] radial-gradient backdrop-blur-3xl rounded-full -ml-[434px] -mt-[434px]"></div> */}
          {/* <div className="w-[824px] h-[824px] radial-gradient backdrop-blur-3xl rounded-full absolute -right-[434px] -bottom-[434px] bg-gradient"></div> */}
          {/* <div className="w-screen h-screen backdrop-blur-3xl absolute top-0 bottom-0 left-o right-0"></div> */}
        </div>

        {/* body */}
        <div className="z-20 w-screen h-screen absolute left-0 top-0  overflow-auto">
          {currentPage === 'Portfolio' && <SideBar key={currentPage + '#2'} />}

          <nav className="flex justify-between items-center py-7">
            <Link href="/" className="font-bold text-lg ml-10">
              Dagem.
            </Link>

            <Nav currentPage={currentPage} key={currentPage} />
          </nav>

          <Component {...pageProps} setCurrentPage={setCurrentPage} />
        </div>
        {/* skill */}
        {currentPage !== 'Portfolio' && (
          <div className="absolute bottom-3 flex justify-center w-screen z-30">
            <SkillsButton isShown={isShown} setIsShown={setIsShown} />
          </div>
        )}
      </animated.div>

      <Skills />
    </div>
  )
  // return <Component {...pageProps} />
}
