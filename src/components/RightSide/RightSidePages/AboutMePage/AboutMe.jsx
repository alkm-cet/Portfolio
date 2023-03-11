import React from 'react'
import './AboutMe.css';
import aboutmehuman from '../../../../images/aboutmehuman.png'
import purpleobject from '../../../../images/purpleobject.png'

function AboutMe() {
    return (
        <div className='AboutMe'>

            <h1>ABOUT ME</h1>

            <div className="aboutmecontainer">

                <div className='aboutmeparagraf'>

                    <h3>Hi. I'm Ali Kemal,</h3>

                    - Self-taught developer,<br />

                    - Looking forward to what come next,<br />

                    - Passionate to learn new technologies. <br /><br />

                    With a passion for production and development,
                    I decided to devote full time to my dream job,
                    software engineering. During the pandemic, I gained
                    experience in website development and SEO as a freelance.
                    I am currently learning HTML, CSS, JavaScript,
                    React, Bootstrap and other amazing technologies full time.<br /><br />

                    I dedicate myself full time every day to learning
                    about this and the amazing technologies that follow.
                    I look forward to gaining a place in working life,
                    which will teach me a lot on this journey, and I look
                    forward to doing my best.
                </div>

                <div className='aboutmehuman' style={{ backgroundImage: `url(${aboutmehuman})` }}>
                    <div className="purpleobject" style={{ backgroundImage: `url(${purpleobject})` }}></div>
                </div>

            </div>

        </div>
    )
}

export default AboutMe