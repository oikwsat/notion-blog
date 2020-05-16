import Header from '../components/header'

import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="PROJECTS" />
    <div className={sharedStyles.layout}>
      <h1>PROJECTS</h1>

      <hr></hr>

      <div className="explanation">
        <h2>Softwares</h2>
        <h3>Android アプリ</h3>
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
        </ul>
      </div>

      <div className="explanation">
        <h3>Chrome 拡張機能</h3>
        <ul>
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

      <hr></hr>

      <div className="explanation">
        <h2>Magazines</h2>
        <h3>技術評論社</h3>
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

      <hr></hr>

      <div className="explanation">
        <h2>Links</h2>
        <h3>External Sites</h3>
        <ul>
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
              href="https://qiita.com/oikwsat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Qiita
            </a>
          </li>
        </ul>
        <h3>Others</h3>
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
        </ul>
      </div>
    </div>
  </>
)
