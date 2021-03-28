import { useState, useEffect } from 'react';
import About from '../components/About'
import Header from '../components/Header'
import Menu from '../components/menu'
import Top from '../components/Top'

export default function Home() {
  const [showMenu,toggleShowMenu]=useState(false);
  return (
    <div className={showMenu?"out-wrap":null} onClick={showMenu?()=>toggleShowMenu(false):null}>
      <About showMenu={showMenu}/>
      <button className="btn show-menu-btn" onClick={()=>toggleShowMenu(true)}>About</button>
      {showMenu&&(<button className="btn close-menu-btn" onClick={()=>toggleShowMenu(!showMenu)}>CLOSE</button>)}
      <Header/>
      <Menu/>
      <Top/>
    </div>
  )
}
