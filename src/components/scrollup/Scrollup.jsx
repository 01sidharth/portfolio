import React from 'react'
import "./scroll.css"
const Scrollup = () => {
    window.addEventListener("scroll",function (){
        const scrollup=document.querySelector(".scrollup")
        if(this.scrollY>=560) scrollup.classList.add
        ("show-scroll")
        else scrollup.classList.remove("show-scroll")
    })
  return (
    <a href="#" className="scrollup">
       <i className="uil uil-arrow-up scrollup_icon"></i> 
    </a>
  )
}

export default Scrollup