import Head from 'next/head'
import { useState } from 'react'
import EmailIcon from '../components/EmailIcon'
import Hero from '../components/Hero'
import LinkedInIcon from '../components/LinkedIn'
import MenuIcon from '../components/MenuIcon'
import TwitterIcon from '../components/TwitterIcon'
export default function Home() {
  const [isShown, setIsShown] = useState(false)

  return (
    <div className="font-Montserrat">
      <div
        className="absolute h-screen top-0 left-0 right-0 bg-white z-10 transition-all duration-300 shadow-xl"
        style={{ top: isShown ? '-120px' : 0 }}
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
          <div className="flex h-[100%]">
            <div className="basis-[50%] flex flex-col justify-center">
              <p className="font-semibold text-2xl leading-6">Hi there,</p>
              <p className="font-bold uppercase text-4xl">I'm dagem tadesse</p>
              <p className="font-light text-sm mt-3">
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
          <button
            className="rounded-full bg-darkBlue text-white flex px-1.5 py-1.5 items-center"
            onClick={() => setIsShown((value) => !value)}
          >
            <span className="ml-3">My Skills</span>
            <span className="bg-white rounded-full p-2 ml-12">
              <MenuIcon />
            </span>
          </button>
        </div>
      </div>
      <div className="bg-darkBlue absolute bottom-0 h-[120px] left-0 right-0 z-0"></div>
    </div>
  )
}
