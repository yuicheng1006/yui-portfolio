
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {links} from '../data/menu-data.js';

const Menu=()=>

{
  const [showMobileMenu,toggleShowMobileMenu]=useState(false);
  // console.log('links',links);
  return(
    
    <div id="Menu">
    <ul className="web-menu">
      {links && links.map((link,index)=>(<li key={index}><Link href={link.url}>{link.title}</Link></li>))}
    </ul>
    <div className="mobile-nav-wrap">
      <div className="mobile-menu" onClick={()=>toggleShowMobileMenu(!showMobileMenu)}>
          {!showMobileMenu?(<img src="/menu.png" alt="ham-menu-icon"/>)
          :(<img src="/close.png" alt="ham-menu-icon-close"/>)}
        </div>
      </div>
      <ul className={!showMobileMenu?"ham-menu":"ham-menu active"}>
        {links && links.map((link,index)=>(<li key={index}><Link href={link.url}>{link.title}</Link></li>))}
      </ul>
    </div>
    
  )
}

export default Menu;