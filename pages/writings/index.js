import { useState, useEffect } from 'react';
import Head from 'next/head'
import Layout from'../../components/Layout';
import MainContent from '../../components/MainContent'

export default function Home() {
  return (
    <div className="wrap">
      <Head>
        <title>WRITING | YUI CHENG</title>
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon"/>
      </Head>
      <Layout/>
      <MainContent category={'writings'}/>
    </div>
  )
}
