import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div>
      <Head>
        <title>Jan Garong</title>
        <meta name="description" content="Welcome to my portfolio website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
