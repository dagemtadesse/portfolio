import Head from 'next/head'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { animated, useTrail } from 'react-spring'
import AwardsIcon from '../components/icons/AwardsIcon'
import BookIcon from '../components/icons/BookIcon'
import ProjectIcon from '../components/icons/ProjectIcon'
import WorkIcon from '../components/icons/WorkIcon'
import DownloadButton from '../components/portfolio/DownloadButton'
import PortfolioData from '../components/portfolio/PortfolioData'
import PortfolioItem from '../components/portfolio/PortfolioItem'
import { Pages } from './_app'

const Portfolio = ({
  setCurrentPage,
}: {
  setCurrentPage: Dispatch<SetStateAction<Pages>>
}) => {
  useEffect(() => {
    setCurrentPage('Portfolio')
  })

  const trail = useTrail(PortfolioData.length, {
    from: {opacity: 0, x: 50},
    opacity: 1, x: 0
  })

  return (
    <div className="flex flex-col-reverse md:grid grid-cols-12 px-5 md:px-10 md:my-5 gap-8">
      <Head>
        <title>portfolio | Dagem Tadesse</title>
      </Head>

      <div className="col-span-8 flex flex-col gap-7">
        {trail.map((animation, index) => (
          <animated.div style={animation}>
            <PortfolioItem {...PortfolioData[index]} />
          </animated.div>
        ))}
      </div>

      <div className="md:w-[33.333%] flex  items-center md:items-end justify-center top-0 bottom-0 right-0 md:fixed md:py-6 px-4">
        <DownloadButton />
      </div>
    </div>
  )
}
export default Portfolio
