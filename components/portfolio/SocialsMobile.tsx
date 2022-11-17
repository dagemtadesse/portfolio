import { animated, useTrail } from 'react-spring'
import { SOCIALS } from './Socials'

const SocialsMobile = () => {
  const trail = useTrail(SOCIALS.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  return (
    <ul className="flex flex-row-reverse gap-6 items-center md:hidden overflow-hidden">
      {trail.map(({ opacity }, index) => (
        <animated.li key={SOCIALS[index].handle} style={{ opacity }}>
          <a href={SOCIALS[index].href}></a>{SOCIALS[index].icon}
        </animated.li>
      ))}
    </ul>
  )
}

export default SocialsMobile
