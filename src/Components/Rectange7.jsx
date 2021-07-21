import React from 'react'
import Middle from '../Assests/Middle.svg'
import Algorithms1 from '../Assests/Algorithms1.svg'
import Evaluation1 from '../Assests/Evaluation1.svg'
import Logic1 from '../Assests/Logic1.svg'
import Abstraction11 from "../Assests/Abstraction11.svg"
import Decomposition11 from '../Assests/Decomposition11.svg'
import Pattern11 from  '../Assests/Pattern11.svg'

const Rectange7 = () => {
    return (
        <div className="rectangle7">
            <div className="Why_coding"><strong>Why Coding?</strong></div>
            <div className="after_why_coding">Vidyayan Focuses on developing ‘skills’ rather than ‘syntax’, to make children</div>
            <div className="rectangle7_flex">
                <div className="arya">
                    <div className="arya_items"><img src={Logic1} style={{marginRight:'5%'}} alt="sorry" /> <div><strong>Logic</strong><br />
                        for predicting & analysis</div>    </div>
                    <div className="arya_items"><img src={Evaluation1} style={{marginRight:'5%'}} alt="sorry" /> <div><strong>Evaluation</strong>
                        <br />
                        Involves making judgement</div>    </div>
                    <div className="arya_items"><img src={Algorithms1}  style={{marginRight:'5%'}} alt="sorry" /> <div><strong>Algorithms</strong>

                        <br />
                        To make steps & rules</div>    </div>

                </div>
                <img src={Middle} alt="sorry" className="middle" />
                <div className="arya">
                    <div className="arya_items"><img src={Abstraction11} style={{marginRight:'5%'}} alt="sorry" /> <div><strong>Abstraction</strong><br />
                        to remove unneccessary data</div>    </div>
                    <div className="arya_items"><img src={Pattern11} style={{marginRight:'5%'}} alt="sorry" /> <div><strong>Patterns</strong>
                        <br />
                        To make use of  similarities</div>    </div>
                    <div className="arya_items"><img src={Decomposition11} style={{marginRight:'5%'}} alt="sorry" /> <div><strong>Decompostion</strong>

                        <br />
                        Breakdown a problem</div>    </div>

                </div>  
            </div>
            <center><button className="join_now2">Book a free class</button></center>
        </div>
    )
}

export default Rectange7
