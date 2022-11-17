import AwardsIcon from '../icons/AwardsIcon'
import BookIcon from '../icons/BookIcon'
import ProjectIcon from '../icons/ProjectIcon'
import WorkIcon from '../icons/WorkIcon'

const PortfolioData = [
  {
    icon: <BookIcon />,
    title: 'education',
    items: [
      {
        date: 'October 2019 - July 2024',
        title: 'Addis Ababa University',
        extra: 'Software Engineering Stream',
        description:
          'Bachelorof Science in Software Engineering and Computing Technology',
      },
    ],
  },
  {
    icon: <WorkIcon />,
    title: 'work experience',
    items: [
      {
        date: 'October 2019 - now',
        title: 'Addis Ababa University',
        description:
          'Bachelorof Science in Software Engineering and Computing Technology',
      },
    ],
  },
  {
    icon: <ProjectIcon />,
    title: 'Projects',
    items: [
      {
        date: 'October 2019 - July 2024',
        title: 'Lorem ipsum dolor sit',
        tags: ['Kotlin', 'JavaScript', 'Next.js'],
        link: 'gitrepo',
        description:
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,',
      },
      {
        date: 'October 2019 - July 2024',
        title: 'In dapibus justo',
        tags: ['Kotlin', 'React.js', 'TailwindCSS'],
        link: 'gitrepo',
        description:
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,',
      },
      {
        date: 'October 2019 - July 2024',
        title: 'Phasellus consectetur convallis',
        tags: ['Kotlin', 'Golang'],
        link: 'gitrepo',
        description:
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,',
      },
    ],
  },
  {
    icon: <AwardsIcon />,
    title: 'Awards',
    items: [
      {
        date: 'October 2019',
        title: 'Lorem ipsum dolor sit',
        description:
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,',
      },
    ],
  },
]

export default PortfolioData
