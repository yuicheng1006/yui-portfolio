import { useState, useEffect } from 'react';
import Head from 'next/head'
import Layout from'../components/Layout';
// import About from '../components/About'
// import Header from '../components/Header'
import MainContent from '../components/MainContent'
// import Menu from '../components/menu'

export default function Home() {
  return (
    <div className="wrap">
      <Head>
        <title>YUI CHENG</title>
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon"/>
        
      </Head>
      <Layout/>
      <MainContent/>

      {/* <About showMenu={showMenu}/>
      <button className="btn show-menu-btn" onClick={()=>toggleShowMenu(!showMenu)}>About</button>
      {showMenu&&(<button className="btn close-menu-btn" onClick={()=>toggleShowMenu(!showMenu)}>CLOSE</button>)}
      <Header/>
      <Menu/>
      <MainContent/> */}

      
    </div>
  )
}
