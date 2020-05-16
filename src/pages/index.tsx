import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'
import indexStyles from '../styles/index.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import LinkedIn from '../components/svgs/linkedin'
import Instgram from '../components/svgs/instagram'

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
    Comp: Instgram,
    alt: 'Instgram icon',
    link: 'https://www.instagram.com/oikwsat/',
  },
]

export default () => (
  <>
    <Header titlePre="HOME" />
    <div className={sharedStyles.layout}>
      <h1>SATOSHI OIKAWA / OIKWSAT</h1>

      <div className={indexStyles.avatar}>
        <img src="/avatar.png" alt="avatar with letters Satoshi" height={60} />
      </div>

      <div className={indexStyles.links}>
        {services.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>

      <hr></hr>

      <h2>このウェブサイトは？</h2>
      <div className="explanation">
        <p>
          このウェブサイトは，個人ブログサイトです。
          静的に生成された Next.js サイトで、Notion を搭載したブログを Vercel (旧 ZEIT) でデプロイしています。
          SSG サポートや組み込みの CSS サポートなど、Next.js の新機能を活用しています。
        </p>
        <img
          src="/zeit-and-notion.png"
          height="85"
          width="250"
          alt="ZEIT + Notion"
        />
      </div>

      <img
        src="/rockin-works.png"
        height="80"
        width="240"
        alt="rockin' works"
      />
    </div>
  </>
)
