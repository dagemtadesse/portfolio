import '../styles/global.css'
import Link from 'next/link'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { animated, useSpring, useSpringRef } from 'react-spring'

import Skills from '../components/skill/Skills'
import SkillsButton from '../components/skill/SkillsButton'
import Nav from '../components/header/Nav'
import SideBar from '../components/header/SideBar'
import Socials from '../components/portfolio/Socials'
import SocialsMobile from '../components/portfolio/SocialsMobile'

export type Pages = 'Home' | 'About' | 'Portfolio'

export default function App({ Component, pageProps }: AppProps) {
  const [isShown, setIsShown] = useState(false)
  const [currentPage, setCurrentPage] = useState<Pages>('Home')
  const [yPostion, setYPosition] = useState(0)

  const skillsBtnAnimRef = useSpringRef()
  const socialsAnimRef = useSpringRef()
  const sideBarAnimRef = useSpringRef()

  const props = useSpring({
    config: { tension: 200 },
    from: { y: 0 },
    to: { y: isShown ? -yPostion : 0 },
  })

  useEffect(() => {
    setYPosition(document.querySelector('#skills_contianer')?.clientHeight || 0)
  })

  return (
    <div className="font-OpenSans">
      <animated.div
        className="absolute bottom-0 top-0 left-0 right-0 bg-white z-10 shadow-xl overflow-hidden"
        style={props}
      >
        {/* background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);*/}
        <div className="overflow-hidden w-screen h-screen relative z-10 bg-gradient">
          <div className="w-full h-full backdrop-blur-3xl bg-white/60"></div>
        </div>

        {/* body */}
        {currentPage === 'Portfolio' && (
          <SideBar key={currentPage + '#2'} animationRef={sideBarAnimRef} />
        )}

        <div className="z-20 w-screen h-screen absolute left-0 top-0 snap-y snap-proximity scroll-smooth overflow-y-auto">
          <nav className="md:flex justify-between items-center py-7">
            <div className="flex justify-between px-5 md:px-10">
              <Link href="/" className="font-bold text-lg ">
                Dagem.
              </Link>

              <SocialsMobile />
            </div>

            <Nav currentPage={currentPage} key={currentPage} />
          </nav>

          <Component
            {...pageProps}
            setCurrentPage={setCurrentPage}
            animationRefs={[socialsAnimRef, skillsBtnAnimRef, sideBarAnimRef]}
          />

          {/* socials  */}
          <Socials contrast={currentPage} animationRef={socialsAnimRef} showDownload={currentPage == 'Portfolio'}/>
        </div>
        {/* skill */}
        {currentPage !== 'Portfolio' && (
          <div className="absolute bottom-3 flex justify-center w-screen z-30">
            <SkillsButton
              isShown={isShown}
              setIsShown={setIsShown}
              animationRef={skillsBtnAnimRef}
            />
          </div>
        )}
      </animated.div>

      <Skills />
    </div>
  )
}
