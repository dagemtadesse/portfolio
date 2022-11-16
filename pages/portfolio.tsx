import { Dispatch, SetStateAction, useEffect } from 'react'
import AwardsIcon from '../components/icons/AwardsIcon'
import BookIcon from '../components/icons/BookIcon'
import ProjectIcon from '../components/icons/ProjectIcon'
import WorkIcon from '../components/icons/WorkIcon'
import DownloadButton from '../components/portfolio/DownloadButton'
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
  return (
    <div className="grid grid-cols-12 px-10 my-5">
      <div className="col-span-8 flex flex-col gap-7">
        <PortfolioItem
          icon={<BookIcon />}
          title="education"
          items={[
            {
              date: 'October 2019 - July 2024',
              title: 'Addis Ababa University',
              extra: 'Software Engineering Stream',
              description:
                'Bachelorof Science in Software Engineering and Computing Technology',
            },
          ]}
        />

        <PortfolioItem
          icon={<WorkIcon />}
          title="work experience"
          items={[
            {
              date: 'October 2019 - now',
              title: 'Addis Ababa University',
              description:
                'Bachelorof Science in Software Engineering and Computing Technology',
            },
          ]}
        />

        <PortfolioItem
          icon={<ProjectIcon />}
          title="Projects"
          items={[
            {
              date: 'October 2019 - July 2024',
              title: 'Lorem ipsum dolor sit',
              tags: ['Kotlin', 'JavaScript', 'Next.js'],
              link: 'gitrepo',
              description:
                'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,',
            },
            {
              date: 'October 2019 - July 2024',
              title: 'Lorem ipsum dolor sit',
              tags: ['Kotlin', 'React.js', 'TailwindCSS'],
              link: 'gitrepo',
              description:
                'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,',
            },
            {
              date: 'October 2019 - July 2024',
              title: 'Lorem ipsum dolor sit',
              tags: ['Kotlin', 'Golang'],
              link: 'gitrepo',
              description:
                'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,',
            },
          ]}
        />

        <PortfolioItem
          icon={<AwardsIcon />}
          title="Awards"
          items={[
            {
              date: 'October 2019',
              title: 'Lorem ipsum dolor sit',
              description:
                'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,',
            },
          ]}
        />
      </div>

      <div className="w-[33.333%] flex items-end justify-center top-0 bottom-0 right-0 fixed py-6 px-4">
        <DownloadButton />
      </div>
      
    </div>
  )
}
export default Portfolio
