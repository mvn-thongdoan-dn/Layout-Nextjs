import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="layout next-js super vip" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main/>
    </Layout>
  )
}
