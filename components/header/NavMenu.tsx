import classNames from 'classnames'
import Link from 'next/link'
import { Pages } from '../../pages/_app'

const NavMenu = ({
  currentPage,
  contrast,
}: {
  currentPage: Pages
  contrast?: boolean
}) => {
  return (
    <ul className={classNames({ 'flex gap-8 justify-between md:justify-end w-full px-5': true, 'text-white': contrast })}>
      <li>
        <Link
          href="/"
          className={classNames({
            'font-semibold': currentPage === 'Home',
          })}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="about"
          className={classNames({
            'font-semibold': currentPage === 'About',
          })}
        >
          About me
        </Link>
      </li>
      <li>
        <Link
          href="portfolio"
          className={classNames({
            'font-semibold': currentPage === 'Portfolio',
          })}
        >
          Portfolio
        </Link>
      </li>
    </ul>
  )
}

export default NavMenu
