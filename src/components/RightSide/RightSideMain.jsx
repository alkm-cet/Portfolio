import React from 'react'
import './RightSideMain.css';
import { Routes, Route } from "react-router-dom";
import AboutMe from '../RightSide/RightSidePages/AboutMePage/AboutMe'
import Portfolio from '../RightSide/RightSidePages/PortfolioPage/Portfolio'
import Skills from '../RightSide/RightSidePages/SkillsPage/Skills'

function RightSideMain() {
    return (
        <div className='RightSideMain'>
            {/* <AboutMe />
            <Portfolio />
            <Skills /> */}

            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/Skills" element={<Skills />} />
                <Route path="/Portfolio" element={<Portfolio />} />
            </Routes>
        </div >
    )
}

export default RightSideMain