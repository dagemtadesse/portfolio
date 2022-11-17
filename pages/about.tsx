import Head from 'next/head'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { animated, useChain, useSpring, useSpringRef } from 'react-spring'
import AvatarIcon from '../components/icons/AvatarIcon'
import { Pages } from './_app'

const About = ({
  setCurrentPage,
  animationRefs,
}: {
  setCurrentPage: Dispatch<SetStateAction<Pages>>
  animationRefs: any[]
}) => {
  useEffect(() => setCurrentPage('About'))

  const textAnimRef = useSpringRef()
  const imageAnimRef = useSpringRef()

  const textAnimation = useSpring({
    from: { opacity: 0, scale: 0.75 },
    to: { opacity: 1, scale: 1 },
    ref: textAnimRef,
  })

  const imageAnimation = useSpring({
    from: { opacity: 0, x: -25 },
    to: { opacity: 1, x: 0 },
    ref: imageAnimRef,
  })

  useChain([imageAnimRef, textAnimRef, ...animationRefs])

  return (
    <div className="flex  flex-col md:flex-row  items-center md:px-10 px-5 md:mt-[12vh] mb-12 md:mb-0 pb-72">
      <Head>
        <title>About Me | Dagem Tadesse</title>
      </Head>

      <animated.div
        className="basis-[33.333%] flex justify-center"
        style={imageAnimation}
      >
        <AvatarIcon />
      </animated.div>

      <animated.div
        className="basis-[66.666%] md:ml-4 py-8"
        style={textAnimation}
      >
        <h1 className="text-3xl font-bold">About.</h1>
        <p className="mt-4 leading-6 text-sm max-w-[658px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tincidunt placerat tortor. In sed augue lobortis, commodo massa et,
          interdum est. Donec a mi risus. Maecenas tristique, neque quis varius
          placerat, enim risus interdum ex, et fermentum augue lorem id augue.
          Praesent porta ex eu velit dignissim scelerisque. Pellentesque sapien
          nunc, tincidunt eget condimentum dictum, suscipit id ex. Quisque purus
          nulla, lacinia in elit ac, scelerisque lacinia tortor.{' '}
        </p>
      </animated.div>
    </div>
  )
}

export default About
