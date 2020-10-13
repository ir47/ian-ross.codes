import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, welcome to my website!</p>
        <p>I am currently learning Next.js which I am using to build this website.</p>
        <p>My plan, is to use this website as a showcase for work I have completed, both at University and from personal projects.</p>
      </section>
    </Layout>
  )
}
