import React from 'react'
import Coding11 from '../Assests/coding11.svg'
// import Artificialintelligence1 from '../Artificialintelligence.png'
import Python1 from '../Assests/Python1.svg'
import Webdevelopment1 from '../Assests/Webdevelopment1.svg'
import Ai1 from '../Assests/Ai1.svg'
import Ml1 from '../Assests/Ml1.svg'
import Gamedevelopment1 from '../Assests/Gamedevelopment1.svg'
import Cybersecurity1 from '../Assests/Cybersecurity1.svg'




const Rectangle6 = () => {
    return (
        <>
        {/* <br/> */}
        <div className="rectangle6">
            <div className="rectangle6_flex">
                <div style={{width:'45%',paddingTop:'7%'}}>
                    <span className="creating_future">Creating Future<span style={{color:'black'}}> Tech Leaders</span></span>
                    <p className="Live_coding">Live coding classes for age 6 -15 to help your 
child learn to code</p>
                {/* <center> */}
                

                <button className="join_now">Join now</button>

                {/* </center> */}
                </div>
                <img  src={Coding11} alt="sorry" style={{width:'45%'}} />

            </div>
            <p className="Cutting_edge">Cutting edge courses to make your child future ready</p>
            <div className="rectangle6_icons">

                <div className="ico"  ><center> <img alt="sorry"src={Python1} className="ico_under" /></center><span className="icon_text">Python</span></div>
                <div className="ico"  ><center> <img alt="sorry"className="ico_under" src={Webdevelopment1}/></center><span className="icon_text">Web Development</span></div>
                <div className="ico"  ><center> <img alt="sorry"className="ico_under" src={Ai1}/></center><span className="icon_text">Artificial Intelligence</span></div>
                <div className="ico"  ><center> <img alt="sorry"className="ico_under" src={Ml1}/></center><span className="icon_text">Machine Learning</span></div>
                <div className="ico"  ><center> <img alt="sorry"className="ico_under" src={Cybersecurity1}/></center><span className="icon_text">Cyber Security</span></div>
                <div className="ico"  ><center> <img alt="sorry"className="ico_under" src={Gamedevelopment1}/></center><span className="icon_text">App Developement</span></div>

            </div>
        </div>
        </>
    )
}

export default Rectangle6
