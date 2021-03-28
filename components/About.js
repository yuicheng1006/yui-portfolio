
import { useState, useEffect,useRef } from 'react';

const About=({showMenu})=>


{
  //ㄧ載入時將 className 刪掉，以防會出現 About 內容
  const removeClass = useRef(null);
  useEffect(()=>{
    removeClass.current.classList.remove("close");
  },[]);
  // console.log('showMenu',showMenu);
  return(
    <>
  <div id="About" className={showMenu?"open":'close'} ref={removeClass}>
      <div className="container">
        <div className="about-content-wrap">      
        <table>
          <tbody>
            <tr>
              <td>PROFILE</td>
            
              <td>鄭盈瑜　　Yui Cheng 
                <br/>
                前端工程師  Front-end engineer / Social Media Editor
                <br/>
                文藻外語大學  wzu
                <br/>
              <a href="https://github.com/" target="_blank"> GitHub</a> / <a href="https://www.cakeresume.com/yuice18" target="_blank"> CakeResume</a>
              </td>
            </tr>
            <tr>
              <td>CONTACT</td>
              <td>yuice18@gmail.com</td>
            </tr>
            <tr>
              <td>SKILL</td>
              <td>React / vue
                <br/>
                Ai / XD / CorelDRAW / PTT
                <br/>
                Buzz Marketing
              </td>
            </tr>
          </tbody>
        </table>
        <img src="/yui.jpg" alt="yui-photo"/>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default About;