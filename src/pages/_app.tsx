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
  </>
)
