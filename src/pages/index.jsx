import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Head>
        <title>One Ummah Charity</title>
        <meta
          name="description"
          content="Non-profitable charity organisation that provides humanitarian assistance aid to those most in need around the world."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        {/* <Speakers />
        <Schedule /> */}
        <Sponsors />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
