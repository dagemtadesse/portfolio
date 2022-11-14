import { Dispatch, SetStateAction, useEffect } from 'react'
import AvatarIcon from '../components/icons/AvatarIcon'
import { Pages } from './_app'

const About = ({
  setCurrentPage,
}: {
  setCurrentPage: Dispatch<SetStateAction<Pages>>
}) => {
  useEffect(() => setCurrentPage('About'))
  
  return (
    <div className="flex items-center min-h-screen -mt-[84px]">
      <div className="basis-[33.333%] flex justify-center">
        <AvatarIcon />
      </div>
      <div className="basis-[66.666%]">
        <h1 className="text-3xl font-bold">About.</h1>
        <p className="mt-4 leading-6 text-sm max-w-[658px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tincidunt placerat tortor. In sed augue lobortis, commodo massa et,
          interdum est. Donec a mi risus. Maecenas tristique, neque quis varius
          placerat, enim risus interdum ex, et fermentum augue lorem id augue.
          Praesent porta ex eu velit dignissim scelerisque. Pellentesque sapien
          nunc, tincidunt eget condimentum dictum, suscipit id ex. Quisque purus
          nulla, lacinia in elit ac, scelerisque lacinia tortor.{' '}
        </p>
      </div>
    </div>
  )
}

export default About
