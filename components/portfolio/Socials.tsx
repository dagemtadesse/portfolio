import { useEffect, useState } from 'react'
import { animated, useSpring, useTrail } from 'react-spring'
import { Pages } from '../../pages/_app'
import EmailIcon from '../icons/EmailIcon'
import LinkedInIcon from '../icons/LinkedIn'
import TwitterIcon from '../icons/TwitterIcon'

export const SOCIALS = [
  {
    icon: <EmailIcon />,
    handle: 'dagem.seyfu@gmail.com',
    href: 'mailto:dagem.seyfu@gmail.com',
  },
  {
    icon: <LinkedInIcon />,
    handle: '@dagem-tadesse-s',
    href: 'https://www.linkedin.com/in/dagem-tadesse-s/',
  },
  {
    icon: <TwitterIcon />,
    handle: '@dagemstadesse',
    href: 'https://twitter.com/dagemstadesse',
  },
]

const Socials = ({
  contrast,
  animationRef,
}: {
  contrast: Pages
  animationRef: any
}) => {
  const trail = useTrail(SOCIALS.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    from: { opacity: 0 },
    to: { opacity: 1 },
    ref: animationRef,
  })

  return (
    <div className="fixed right-5 hidden md:right-[40px] top-[50%] -translate-y-[50%] md:flex flex-col gap-8 text-darkBlue">
      {trail.map((animation, index) => {
        return (
          <animated.div style={animation} key={SOCIALS[index].handle}>
            <Social {...SOCIALS[index]} contrast={contrast} />
          </animated.div>
        )
      })}
    </div>
  )
}

const Social = ({
  icon,
  handle,
  href,
  contrast,
}: {
  icon: JSX.Element
  handle: string
  href: string
  contrast: Pages
}) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(contrast === 'Portfolio')
  }, [contrast])

  const props = useSpring({
    from: { color: '#212529', backgroundColor: '#ffffff00' },
    to: {
      color: isActive ? '#fff' : '#212529',
      backgroundColor:
        isActive && contrast !== 'Portfolio' ? '#212529' : '#ffffff00',
    },
  })

  return (
    <section
      className="flex flex-row-reverse gap-4 items-center"
      onClick={() => contrast !== 'Portfolio' && setIsActive((value) => !value)}
    >
      <animated.span
        className="rounded-full aspect-square px-3 grid place-content-center"
        style={props}
      >
        {icon}
      </animated.span>
      {isActive && (
        <animated.a
          href={href}
          className="rounded-full px-3 py-1 hover:underline text-sm"
          style={props}
          target="_blank"
        >
          {handle}
        </animated.a>
      )}
    </section>
  )
}

export default Socials
