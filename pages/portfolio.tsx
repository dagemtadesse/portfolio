import Head from 'next/head'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { animated, useChain, useSpringRef, useTrail } from 'react-spring'
import DownloadButton from '../components/portfolio/DownloadButton'
import PortfolioData from '../components/portfolio/PortfolioData'
import PortfolioItem from '../components/portfolio/PortfolioItem'
import { Pages } from './_app'

const Portfolio = ({
  setCurrentPage,
  animationRefs,
}: {
  setCurrentPage: Dispatch<SetStateAction<Pages>>
  animationRefs: any[]
}) => {
  useEffect(() => {
    setCurrentPage('Portfolio')
  })

  const bttnAnimationRef = useSpringRef()

  useChain([...animationRefs, bttnAnimationRef])

  const trail = useTrail(PortfolioData.length, {
    from: { opacity: 0, x: 50 },
    opacity: 1,
    x: 0,
  })

  return (
    <div className="flex flex-col-reverse md:grid grid-cols-12 px-5 md:px-10 md:my-5 gap-8">
      <Head>
        <title>portfolio | Dagem Tadesse</title>
      </Head>

      <div className="col-span-8 flex flex-col gap-7">
        {trail.map((animation, index) => (
          <animated.div style={animation} key={PortfolioData[index].title}>
            <PortfolioItem {...PortfolioData[index]} />
          </animated.div>
        ))}
      </div>

      <div className="md:w-[33.333%] flex  items-center md:items-end justify-center top-0 bottom-0 right-0 md:fixed md:py-6 px-4">
        <DownloadButton animationRef={bttnAnimationRef} />
      </div>
    </div>
  )
}
export default Portfolio
