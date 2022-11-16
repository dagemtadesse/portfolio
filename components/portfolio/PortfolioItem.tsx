import LinkIcon from '../icons/LinkIcon'
import StackChip from './StackChip'

export type Portfolio = {
  date: string
  title: string
  description: string
  link?: string
  extra?: string
  tags?: string[]
}

const PortfolioItem = ({
  icon,
  title,
  items,
}: {
  icon: JSX.Element
  title: string
  items: Portfolio[]
}) => {
  return (
    <div>
      <p className="uppercase font-medium flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </p>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li className="text-sm ml-[28px] mt-2">
            <section>
              {!!item.link && (
                <a href={item.link} className="font-medium inline-flex item-center hover:underline">
                  {item.title}{' '}
                  <span className='ml-2'>
                    <LinkIcon />
                  </span>
                </a>
              )}
              {!item.link && <b className="font-medium">{item.title}</b>} - {item.description}
              {!!item.extra && (
                <span className="italic whitespace-nowrap">{item.extra}</span>
              )}
            </section>
            <p className="italic whitespace-nowrap text-xs mt-1.">
              {item.date}
            </p>
            <div className="flex gap-3 justify-start">
              {item.tags?.map((tag) => (
                <StackChip label={tag} key={tag} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PortfolioItem
