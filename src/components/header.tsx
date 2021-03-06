import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'HOME', page: '/' },
  { label: 'BLOG', page: '/blog' },
  { label: 'PROJECTS', page: '/projects' },
]

const ogImageUrl = 'https://oikawa.dev/rockin-works.png'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} oikwsat's website</title>
        <meta name="description" content="oikwsat's website" />
        <meta name="og:title" content="oikwsat's website" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@oikwsat" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
          <li>oikawa.dev</li>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
