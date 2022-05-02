import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router";
import './styles.css'


const ScrollToTop = (props) => {
  useEffect(() => {
 
    var cursor = document.getElementById("cursor");
    document.body.addEventListener("mousemove", function (e) {
      (cursor.style.left = e.clientX + "px");
        (cursor.style.top = e.clientY + "px");
    });
    var ali = document.querySelectorAll("a")
    // ali.map(a=>{
    //   console.log("shshsh",a)
    // })
    

  }, [])
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{props.children}<div class='cursor' id="cursor"></div></>

}

export default ScrollToTop