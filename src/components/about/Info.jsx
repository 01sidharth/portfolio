import React from 'react'
import "./about.css"

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <h3 className="about__subtitle">Experience </h3>
            <span className="about__subtitle">1 Year Working</span>
        </div>
        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__subtitle">Completed</h3>
            <span className="about__subtitle">5+ Projects</span>
        </div>
        <div className="about__box">
            <i class="bx bx-support about__icon"></i>
            <h3 className="about__subtitle">Active</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info