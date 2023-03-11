import React from 'react'
import './LeftNavBar.css';
import photo from '../../images/photo.jpg'
import email from '../../images/email.png'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import { Link } from "react-router-dom";
import CV from '../../../src/CV/CV.pdf'

function LeftNavBar() {
    return (
        <div className='LeftNavBar'>
            <div className='ProfilePhoto' style={{ backgroundImage: `url(${photo})` }}></div>

            <div className="info">
                <h2>Ali Kemal Çetindere</h2>
                <small>Jr Front-end Developer</small>
            </div>

            <div className="buttonsMain">
                <Link to="/" style={{ textDecoration: 'none', width: '70%' }}>
                    <div className="navBtns">
                        <span class="material-symbols-outlined">
                            face
                        </span>
                        <p>About Me</p>
                    </div>
                </Link>

                <Link to="/Skills" style={{ textDecoration: 'none', width: '70%' }}>
                    <div className="navBtns">
                        <span class="material-symbols-outlined">
                            bolt
                        </span>
                        <p>Skills</p>
                    </div>
                </Link>

                <Link to="/Portfolio" style={{ textDecoration: 'none', width: '70%' }}>
                    <div className="navBtns">
                        <span class="material-symbols-outlined">
                            receipt_long
                        </span>
                        <p>Portfolio</p>
                    </div>
                </Link>

            </div>

            <a className='cvhref' href={CV} download='AKC_CV.pdf'>
                <button className='cvBTN'>Download CV
                    <span class="material-symbols-outlined">
                        description
                    </span>
                </button>
            </a>



            <div className="linkcontainer">

                <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alikemal.1817@gmail.com" target={'_blank'}>
                    <div className="linkBTN" style={{ backgroundImage: `url(${email})` }}></div>
                </a>

                <a href="https://github.com/alkm-cet" target={'_blank'}>
                    <div className="linkBTN" style={{ backgroundImage: `url(${github})` }}></div>
                </a>

                <a href="https://www.linkedin.com/in/ali-kemal-cetindere/" target={'_blank'}>
                    <div className="linkBTN" style={{ backgroundImage: `url(${linkedin})` }}></div>
                </a>

            </div>

        </div>
    )
}

export default LeftNavBar