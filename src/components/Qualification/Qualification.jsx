import React from 'react'
import "./qualification.css"
const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                    Education
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                            BTECH in CSE
                            </h3>
                            <span className="qualification__subtitle">
                            APJ Abdulkalam Technological University
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2019-2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <div className="qualification__line" ></div>
                        </div>
                    </div>

                    <div className="qualification__data">
                    <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">
                            MERN Development
                            </h3>
                            <span className="qualification__subtitle">
                            Jspiders Bangalore
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2023-2024
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">

                        <div>
                            <h3 className="qualification__title">
                            Fullstack Development
                            </h3>
                            <span className="qualification__subtitle">
                            Banglore
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2024-present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification