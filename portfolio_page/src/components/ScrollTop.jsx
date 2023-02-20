import React, {useState, useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  const [scrolled, setScrolled] = useState(0)

  function toggleVisible(){
    setScrolled(document.documentElement.scrollTop)
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  useEffect(()=>{
    toggleVisible();
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, [scrolled])

  function scrollToTop(){
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
 
  return (
    <button className='scroll-up'>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </button>
  );
}
  
export default ScrollButton;