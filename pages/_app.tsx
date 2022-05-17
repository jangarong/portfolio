import type { AppProps } from 'next/app'
import Layout from '../components/layout'

import '../styles/globals.scss'
import '../styles/navbar.scss'
import '../styles/profile.scss'
import '../styles/card.scss'
import '../styles/projects.scss'
import '../styles/organizations.scss'
import '../styles/footer.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}

export default MyApp
