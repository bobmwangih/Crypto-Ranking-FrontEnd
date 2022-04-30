import Head from 'next/head'
import Navbar from '../../components/Navbar'
import { useRouter } from 'next/router'
import CoinChartContainer from '../../components/CoinChartContainer';

export default function CoinHome() {
const router = useRouter();
const { slug } = router.query;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main >
        <CoinChartContainer slug={slug}/>
      </main>
    </div>
  )
}