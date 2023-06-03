import { Pages } from '../../_pages/_app'
import NavMenu from './NavMenu'

const Nav = ({ currentPage }: { currentPage: Pages }) => {
  return (
    <div className="md:w-[33.333vw] top-0 right-0 bottom-0 h-6 relative z-20 mt-5 md:mt-0">
      <div className="w-full absolute right-0 bottom-0 flex md:justify-end md:pr-10">
        <NavMenu currentPage={currentPage} />
      </div>
    </div>
  )
}

export default Nav