import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import aboutStyles from '../styles/about.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
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

      <hr></hr>

      <div className="explanation">
        <h3>Softwares</h3>
        <ul>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=work.rockin.timeprogress"
              target="_blank"
              rel="noopener noreferrer"
            >
              Time Progress - Google Play のアプリ
            </a>
          </li>
          <li>
            <a
              href="https://chrome.google.com/webstore/detail/labelcounter-for-trello/eahijelcdannijiaikdpdpjnhcjoblie"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chromeウェブストア - LabelCounter for Trello
            </a>
          </li>
        </ul>
      </div>

      <div className="explanation">
        <h3>Magazines</h3>
        <ul>
          <li>
            <a
              href="http://gihyo.jp/magazine/SD/archive/2013/201304"
              target="_blank"
              rel="noopener noreferrer"
            >
              Software Design 2013年4月号 ／ 第1特集 僕（私）の言語の学び方
              裏口からのプログラミング入門 - 今すぐはじめよう！
              脱超初心者からのベストプラクティス
            </a>
          </li>
          <li>
            <a
              href="http://gihyo.jp/book/2012/978-4-7741-5335-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smartphone
              Design－スマートフォンアプリ開発者とデザイナのための総合情報誌 ／
              Enterprise Pages
              業務アプリケーションをスマホやタブレットで使おう！
              既存のPCサイトをスマートフォン用に変換！
            </a>
          </li>
        </ul>
      </div>

      <div className="explanation">
        <h3>Links</h3>
        <ul>
          <li>
            <a
              href="//amzn.to/2e3H0wc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amazon
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@oikawa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
          </li>
          <li>
            <a
              href="https://github.com/oikwsat/EffectiveJavaScript/raw/master/build/Effective%20JavaScript%20-%20Dynamic%20Scripting.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Effective JavaScript - Dynamic Scripting.pdf
            </a>
          </li>
        </ul>
      </div>
    </div>
  </>
)
