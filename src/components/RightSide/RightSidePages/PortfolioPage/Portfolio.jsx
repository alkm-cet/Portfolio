import React, { useContext, useState } from 'react'
import './Portfolio.css';
import { ProjectsContext } from '../../../../context/ProjectsContext'


function Portfolio() {

    const { portfolio } = useContext(ProjectsContext);

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }


    return (
        <div className='Portfolio'>
            <h1>PORTFOLIO</h1>


            <div className="cardContainer">
                <h4>My Latest Work</h4>
                {
                    portfolio.map((item, i) => {
                        return (
                            <div className="cardmain" key={item.id} >

                                <div className="cardMainTop" onClick={() => toggle(i)}>
                                    <div className='cardimage' style={{ backgroundImage: `url(${item.img})` }}></div>

                                    <div className="cardinfo">
                                        <h3 className='cardtitle'>{item.title}</h3>
                                        <div >
                                            {
                                                item.subtitles.map(subs => {
                                                    return (
                                                        <p className='subtitles'>- {subs}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                        {
                                            item.responsive
                                                ? <div className='iscardresponsive'>
                                                    <span class="material-symbols-outlined" style={{ color: '#2ed573' }}>
                                                        check_circle
                                                    </span>
                                                    <small>Responsive</small>
                                                </div>
                                                :
                                                <div className='iscardresponsive'>
                                                    <span class="material-symbols-outlined" style={{ color: 'crimson' }}>
                                                        cancel
                                                    </span>
                                                    <small>Not Responsive</small>
                                                </div>
                                        }
                                    </div>
                                    <div className="cardright">
                                        <span className='plusMinus'>{selected == i ? '-' : '+'}</span>
                                    </div>
                                </div>

                                <div className={selected == i ? 'content show' : ' content'}>

                                    <a href={item.link} style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
                                        <button className='codeBTN'>
                                            SHOW APP
                                            <span class="material-symbols-outlined">
                                                open_in_new
                                            </span>
                                        </button>
                                    </a>

                                    {item.text}
                                    <small style={{ fontSize: 12 }}>{item.date}</small>
                                </div>

                            </div>
                        )
                    })
                }



            </div>



        </div>
    )
}

export default Portfolio