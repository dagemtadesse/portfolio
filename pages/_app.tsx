import '../styles/global.css'
import type { AppProps } from 'next/app'
import Skills from '../components/skill/Skills'
import SkillsButton from '../components/skill/SkillsButton'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

export type Pages = 'Home' | 'About' | 'Portfolio'

export default function App({ Component, pageProps }: AppProps) {
  const [isShown, setIsShown] = useState(false)
  const [currentPage, setCurrentPage] = useState<Pages>('Home')
  const [yPostion, setYPosition] = useState(0)

  useEffect(() => {
    setYPosition(document.querySelector('#skills_contianer')?.clientHeight || 0)
  })

  return (
    <div className="font-Montserrat">
      <div
        className="absolute h-screen top-0 left-0 right-0 bg-white z-10 transition-all duration-300 shadow-xl"
        style={{ top: isShown ? `-${yPostion}px` : 0 }}
      >
        <div className="overflow-hidden w-screen h-screen relative z-10">
          <div className="w-[824px] h-[824px] radial-gradient backdrop-blur-3xl rounded-full -ml-[434px] -mt-[434px]"></div>
          <div className="w-[824px] h-[824px] radial-gradient backdrop-blur-3xl rounded-full absolute -right-[434px] -bottom-[434px] bg-gradient"></div>
          <div className="w-screen h-screen backdrop-blur-3xl absolute top-0 bottom-0 left-o right-0"></div>
        </div>
        {/* body */}
        <div className="z-20 w-screen h-screen absolute left-0 top-0 px-[40px] overflow-auto">
          <nav className="flex justify-between items-baseline py-7">
            <Link href="/" className="font-bold text-lg">
              Dagem.
            </Link>

            <ul className="flex gap-8 ">
              <li>
                <Link
                  href="/"
                  className={classNames({
                    'font-semibold': currentPage === 'Home',
                  })}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="about"
                  className={classNames({
                    'font-semibold': currentPage === 'About',
                  })}
                >
                  About me
                </Link>
              </li>
              <li>
                <Link
                  href="portfolio"
                  className={classNames({
                    'font-semibold': currentPage === 'Portfolio',
                  })}
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>

          <Component {...pageProps} setCurrentPage={setCurrentPage} />
        </div>
        {/* skill */}
        <div className="absolute bottom-3 flex justify-center w-screen z-30">
          <SkillsButton isShown={isShown} setIsShown={setIsShown} />
        </div>
      </div>

      <Skills />
    </div>
  )
  // return <Component {...pageProps} />
}
