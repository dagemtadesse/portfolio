import { Dispatch, SetStateAction, useEffect } from 'react'
import { Pages } from './_app'

const Portfolio = ({
  setCurrentPage,
}: {
  setCurrentPage: Dispatch<SetStateAction<Pages>>
}) => {
  useEffect(() => setCurrentPage('Portfolio'))
  return <div></div>
}
export default Portfolio
