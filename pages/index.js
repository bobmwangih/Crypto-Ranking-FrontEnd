import Head from 'next/head'
import CoinList from '../components/CoinList'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main >
        <CoinList/>
      </main>
    </div>
  )
}
