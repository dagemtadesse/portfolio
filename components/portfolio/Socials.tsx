import { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { Pages } from '../../pages/_app'
import EmailIcon from '../icons/EmailIcon'
import LinkedInIcon from '../icons/LinkedIn'
import TwitterIcon from '../icons/TwitterIcon'

const Socials = ({ contrast }: { contrast: Pages }) => {
  const animation = useSpring({
    from: { color: '#212529' },
    to: { color: !contrast ? '#212529' : '#fff' },
  })

  return (
    <animated.div
      className="fixed right-[40px] top-[50%] -translate-y-[50%] flex flex-col gap-8 text-darkBlue"
      style={animation}
    >
      <Social
        icon={<EmailIcon />}
        link="dagem.seyfu@gmail.com"
        contrast={contrast}
      />
      <Social icon={<LinkedInIcon />} link="@dagem_tad" contrast={contrast} />
      <Social icon={<TwitterIcon />} link="@dagem_tad" contrast={contrast} />
    </animated.div>
  )
}

const Social = ({
  icon,
  link,
  contrast,
}: {
  icon: JSX.Element
  link: string
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
      backgroundColor: isActive && contrast !== 'Portfolio' ? '#212529' : '#ffffff00',
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
        <animated.span
          className="rounded-full px-3 py-1 hover:underline text-sm"
          style={props}
        >
          {link}
        </animated.span>
      )}
    </section>
  )
}

export default Socials
