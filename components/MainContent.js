
import { useState, useEffect,useRef } from 'react';
import {collection} from '../data/collection.js';
import AOS from 'aos';


const MainContent=({category})=>

{
  // console.log('category',category);
  const [works,setWorks]=useState(collection);
  // console.log('works',works);
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'linear',
      delay: 200,
    });
  }, []);
  useEffect(()=>{
    let newWorks=[];
    if(category){
      collection.map(res=>{
        if( res.category===category){
          newWorks.push(res);
          // console.log('newworks',newWorks);
        }
    });
    setWorks(newWorks);
    }
  },[])
    // console.log('newworkssssss',works);

  return(
    <div id="Main-wrap">
      {works&&works.map((work,index)=>(<div key={index} className="main-box">
        <div className="container" 
        >
          <div className="main-info">
            <div className="main-title">{work.title}</div>
            <div className="main-category">{work.category}</div>
          <div className="main-date">{work.date}</div>
        </div>
        <div className="main-works">
          {work.files&&work.files.map((file,index)=>(<img key={index} src={file.url} alt="" data-aos="fade-zoom-in"/>))}
        </div>
          <div className="main-detail">
            <p><a target="_blank" href={work.url}>{work.url}</a></p>
            {work.content&&(<p>{work.content}</p>)}
          </div>
        </div>
      </div>))}
    </div>
  )
}

export default MainContent;