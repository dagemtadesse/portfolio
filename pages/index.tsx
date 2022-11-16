import { Dispatch, SetStateAction, useEffect } from 'react'
import { animated, useChain, useSpring, useSpringRef } from 'react-spring'
import Hero from '../components/icons/Hero'
import { Pages } from './_app'

export default function Home({
  setCurrentPage,
  animationRefs
}: {
  setCurrentPage: Dispatch<SetStateAction<Pages>>
  animationRefs: any[]
}) {
  useEffect(() => setCurrentPage('Home'))
  const textAnimRef = useSpringRef()
  const imageAnimRef = useSpringRef()

  const textAnimation = useSpring({
    from: { opacity: 0,  x: -48},
    to: { opacity: 1, x: 0 },
    ref: textAnimRef
  })

  const imageAnimation = useSpring({
    from: { opacity: 0, scale: 0.85 },
    to: { opacity: 1, scale: 1 },
    ref: imageAnimRef
  })

  useChain([textAnimRef, imageAnimRef, ...animationRefs])

  return (
    <>
      {/* social */}
      <div className="flex min-h-[calc(100vh-84px)] items-center px-10 ">
        <animated.div
          className="basis-[40%] flex flex-col justify-center"
          style={textAnimation}
        >
          <p className="font-semibold text-xl leading-6">Hi there,</p>
          <p className="font-bold uppercase text-3xl">I'm dagem tadesse</p>
          <p className="font-light text-sm mt-3 max-w-[460px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
            dolorem? Similique laboriosam molestias veniam doloribus voluptas
            aperiam fugiat.
          </p>
        </animated.div>
        <animated.div className="basis-[60%] overflow-hidden grid place-content-center" style={imageAnimation}>
          <Hero />
        </animated.div>
      </div>
    </>
  )
}
