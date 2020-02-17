import '../styles/global.css'
import ExtLink from '../components/ext-link'

export default ({ Component, pageProps }) => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=UA-158637486-1`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-158637486-1');
        `,
      }}
    />

    <Component {...pageProps} />

    <footer>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-via="oikwsat"
        data-show-count="false"
      >
        Tweet
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      />
    </footer>
  </>
)
