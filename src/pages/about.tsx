import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import aboutStyles from '../styles/about.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const services = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/oikwsat',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/oikwsat',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/satoshi-oikawa/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:oikwsat@gmail.com?subject=contact from oikawa.dev: ',
  },
]

export default () => (
  <>
    <Header titlePre="About" />
    <div className={sharedStyles.layout}>
      <div className={aboutStyles.avatar}>
        <img src="/avatar.png" alt="avatar with letters Satoshi" height={60} />
      </div>

      <h1 style={{ marginTop: 0 }}>About</h1>

      <div className={aboutStyles.name}>Satoshi Oikawa</div>

      <div className={aboutStyles.links}>
        {services.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
