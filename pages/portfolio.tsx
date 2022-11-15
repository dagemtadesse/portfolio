import { Dispatch, SetStateAction, useEffect } from 'react'
import AwardsIcon from '../components/icons/AwardsIcon'
import BookIcon from '../components/icons/BookIcon'
import ProjectIcon from '../components/icons/ProjectIcon'
import WorkIcon from '../components/icons/WorkIcon'
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
    <div className="grid grid-cols-12 px-10">
      <div className="col-span-8">
        <p className="uppercase font-medium flex items-center">
          <BookIcon />
          <span className="ml-2">education</span>
        </p>
        <ul>
          <li className="text-sm ml-[28px] mt-2">
            <section>
              <b className="font-medium">Addis Ababa University</b> - Bachelor
              of Science in Software Engineering and Computing Technology
              <span className="italic whitespace-nowrap">
                {' '}
                (Software Engineering Stream)
              </span>
            </section>
            <p className="italic whitespace-nowrap">October 2019 - July 2024</p>
          </li>
        </ul>

        <p className="uppercase font-medium flex items-center mt-4">
          <WorkIcon />
          <span className="ml-2">work experience</span>
        </p>
        <ul>
          <li className="text-sm ml-[28px] mt-2">
            <section>
              <b className="font-medium">Addis Ababa University</b> - Bachelor
              of Science in Software Engineering and Computing Technology
              <span className="italic">(Software Engineering Stream)</span>
            </section>
            <p className="italic whitespace-nowrap">October 2019 - July 2024</p>
          </li>
        </ul>

        <p className="uppercase font-medium flex items-center mt-4">
          <ProjectIcon />
          <span className="ml-2">Projects</span>
        </p>
        <ul>
          <li className="text-sm ml-[28px] mt-2">
            <section>
              <b className="font-medium">Addis Ababa University</b> - Bachelor
              of Science in Software Engineering and Computing Technology
              <span className="italic">(Software Engineering Stream)</span>
            </section>
            <p className="italic whitespace-nowrap">October 2019 - July 2024</p>
          </li>
        </ul>

        <p className="uppercase font-medium flex items-center mt-4">
          <AwardsIcon />
          <span className="ml-2">Awards</span>
        </p>
        <ul>
          <li className="text-sm ml-[28px] mt-2">
            <section>
              <span className="font-medium">Lorem ipsum dolor sit</span> - Neque
              porro quisquam est qui dolorem ipsum quia dolor sit amet
            </section>
            <p className="italic whitespace-nowrap font-light mt-1">
              October 2019
            </p>
          </li>
        </ul>
      </div>
      {/* <div className="bg-darkBlue h-screen w-[33.333vw] absolute top-0 right-0 z-10 transition-transform duration-300 animate-transform-slide"></div> */}
    </div>
  )
}
export default Portfolio
