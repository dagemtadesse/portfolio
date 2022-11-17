import Head from 'next/head'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { animated, useChain, useSpring, useSpringRef } from 'react-spring'
import Hero from '../components/icons/Hero'
import { Pages } from './_app'

export default function Home({
  setCurrentPage,
  animationRefs,
}: {
  setCurrentPage: Dispatch<SetStateAction<Pages>>
  animationRefs: any[]
}) {
  useEffect(() => setCurrentPage('Home'))
  const textAnimRef = useSpringRef()
  const imageAnimRef = useSpringRef()

  const textAnimation = useSpring({
    from: { opacity: 0, x: -48 },
    to: { opacity: 1, x: 0 },
    ref: textAnimRef,
  })

  const imageAnimation = useSpring({
    from: { opacity: 0, scale: 0.85 },
    to: { opacity: 1, scale: 1 },
    ref: imageAnimRef,
  })

  useChain([textAnimRef, imageAnimRef, ...animationRefs])

  return (
    <>
      <Head>
        <title>Dagem Tadesse</title>
      </Head>
      {/* social */}
      <div className="flex flex-col md:flex-row md:min-h-[calc(100vh-84px)] justify-start md:items-center md:px-10 px-5 pb-[80px] gap-12 md:gap-4">
        <animated.div
          className="basis-[40%] flex flex-col justify-center items-center"
          style={textAnimation}
        >
          <div className="max-w-[460px] mt-6 md:mt-0">
            <p className="font-semibold text-xl leading-6 tracking-wider">Hi there</p>
            <p className="font-bold uppercase text-3xl">I'm dagem tadesse</p>
            <p className="text-sm md:mt-3 mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
              dolorem? Similique laboriosam molestias veniam doloribus voluptas
              aperiam fugiat.
            </p>
          </div>
        </animated.div>
        <animated.div
          className="md:basis-[60%] grid place-content-center"
          style={imageAnimation}
        >
          <Hero />
        </animated.div>
      </div>
    </>
  )
}
