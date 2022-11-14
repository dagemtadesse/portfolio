import { useEffect, useState } from 'react'
import EmailIcon from '../components/icons/EmailIcon'
import Hero from '../components/icons/Hero'
import LinkedInIcon from '../components/icons/LinkedIn'
import TwitterIcon from '../components/icons/TwitterIcon'
import Skills from '../components/skill/Skills'
import SkillsButton from '../components/skill/SkillsButton'

export default function Home() {
  const [isShown, setIsShown] = useState(false)
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
        <div className="z-20 w-screen h-screen absolute left-0 top-0 px-[40px] pt-7 overflow-auto">
          <header>
            <nav className="flex justify-between items-baseline">
              <a href="#" className="font-bold text-lg">
                Dagem.
              </a>

              <ul className="flex gap-8 ">
                <li>
                  <a href="#" className="font-semibold">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">About me</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
              </ul>
            </nav>
          </header>
          {/* social */}
          <div className="right-[40px] top-[50%] -translate-y-[50%] absolute flex flex-col gap-9">
            <EmailIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </div>
          <div className="flex min-h-[calc(100%-28px)] items-center">
            <div className="basis-[50%] flex flex-col justify-center">
              <p className="font-semibold text-xl leading-6">Hi there,</p>
              <p className="font-bold uppercase text-3xl">I'm dagem tadesse</p>
              <p className="font-light text-sm mt-3 max-w-[460px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
                dolorem? Similique laboriosam molestias veniam doloribus
                voluptas aperiam fugiat.
              </p>
            </div>
            <div className="basis-[50%]">
              <Hero />
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 flex justify-center w-screen z-30">
          <SkillsButton isShown={isShown} setIsShown={setIsShown} />
        </div>
      </div>

      <Skills />
    </div>
  )
}
