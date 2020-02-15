import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/rockin-works.png"
        height="80"
        width="240"
        alt="rockin' works"
      />
      <h1>My portfolio site.</h1>

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

      <hr></hr>

      <img
        src="/zeit-and-notion.png"
        height="85"
        width="250"
        alt="ZEIT + Notion"
      />
      <h2>
        Blazing Fast Notion Blog with Next.js'{' '}
        <ExtLink
          href="https://github.com/zeit/next.js/issues/9524"
          className="dotted"
          style={{ color: 'inherit' }}
        >
          SSG
        </ExtLink>
      </h2>
      <div className="explanation">
        <p>
          This is a statically generated{' '}
          <ExtLink href="https://nextjs.org">Next.js</ExtLink> site with a{' '}
          <ExtLink href="https://notion.so">Notion</ExtLink> powered blog that
          is deployed with <ExtLink href="https://zeit.co">ZEIT</ExtLink>. It
          leverages some upcoming features in Next.js like{' '}
          <ExtLink href="https://github.com/zeit/next.js/issues/9524">
            SSG support
          </ExtLink>{' '}
          and{' '}
          <ExtLink href="https://github.com/zeit/next.js/issues/8626">
            built-in CSS support
          </ExtLink>{' '}
        </p>
      </div>
    </div>
  </>
)
