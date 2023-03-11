import React from 'react'
import './Skills.css';
import html from '../../../../images/html.png'
import css from '../../../../images/css.png'
import react from '../../../../images/react.png'
import bootstrap from '../../../../images/bootstrap.png'
import javascript from '../../../../images/javascript.png'
import database from '../../../../images/database.png'


function Skills() {
    return (
        <div className='Skills'>
            <h1>SKILLS</h1>

            <div className="skillsmidcontainer">
                <div class="hoverContainer">

                    <div class="hovercard">
                        <h3>Bootstrap</h3>
                        <div className="hovercardimg" style={{ backgroundImage: `url(${bootstrap})` }}></div>
                    </div>
                    <div class="hovercard">
                        <h3>React</h3>
                        <div className="hovercardimg" style={{ backgroundImage: `url(${react})` }}></div>
                    </div>
                    <div class="hovercard">
                        <h3>Firebase</h3>
                        <div className="hovercardimg" style={{ backgroundImage: `url(${database})` }}></div>
                    </div>
                </div>

                <div class="hoverContainer">
                    <div class="hovercard">
                        <h3>HTML</h3>
                        <div className="hovercardimg" style={{ backgroundImage: `url(${html})` }}></div>
                    </div>
                    <div class="hovercard">
                        <h3>CSS</h3>
                        <div className="hovercardimg" style={{ backgroundImage: `url(${css})` }}></div>
                    </div>
                    <div class="hovercard">
                        <h3>JS</h3>
                        <div className="hovercardimg" style={{ backgroundImage: `url(${javascript})` }}></div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Skills