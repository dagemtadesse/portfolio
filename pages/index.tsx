import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import EmailIcon from '../components/icons/EmailIcon'
import Hero from '../components/icons/Hero'
import LinkedInIcon from '../components/icons/LinkedIn'
import TwitterIcon from '../components/icons/TwitterIcon'
import { Pages } from './_app'

export default function Home({
  setCurrentPage,
}: {
  setCurrentPage: Dispatch<SetStateAction<Pages>>
}) {
  useEffect(() => setCurrentPage('Home'))
  return (
    <>
      {/* social */}
      <div className="right-[40px] top-[50%] -translate-y-[50%] absolute flex flex-col gap-9">
        <EmailIcon />
        <LinkedInIcon />
        <TwitterIcon />
      </div>
      <div className="flex min-h-[calc(100vh-84px)] items-center px-10 ">
        <div className="basis-[50%] flex flex-col justify-center">
          <p className="font-semibold text-xl leading-6">Hi there,</p>
          <p className="font-bold uppercase text-3xl">I'm dagem tadesse</p>
          <p className="font-light text-sm mt-3 max-w-[460px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
            dolorem? Similique laboriosam molestias veniam doloribus voluptas
            aperiam fugiat.
          </p>
        </div>
        <div className="basis-[50%]">
          <Hero />
        </div>
      </div>
    </>
  )
}
