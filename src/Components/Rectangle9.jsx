import React from 'react'
import Cplusplus1 from '../Assests/Cplusplus1.svg'
import Python2 from '../Assests/Python2.svg'
import Webdevelopment2 from '../Assests/Webdevelopment2.svg'
import Android1 from '../Assests/Android1.svg'
import Ellipse1 from '../Assests/Ellipse1.svg'
import Ellipse2 from '../Assests/Ellipse2.svg'
import Bannernew1 from '../Assests/Bannernew1.svg'
import Timeline1 from '../Assests/Timeline1.svg'
import Coding31 from '../Assests/Coding31.svg'
import Bannernew2 from '../Assests/Bannernew2.svg'
import {
    BrowserRouter as Router,  
    Link
  } from "react-router-dom";
  
const Rectangle9 = () => {
    return (
        <Router>
        <div className="rectangle9">
            <div className="rectangle9_flex">
                <div className="cards">
                    <img className="rect9_img" src={Cplusplus1}  alt="" />
                    <div className="contents_card">Introduction to Coding</div>
                    <hr />
                    <center><Link to="#" className="know_more"><strong>Know More</strong></Link></center>
                </div>
                <div className="cards">
                    <img className="rect9_img" src={Python2} alt="" />
                    <div className="contents_card">Advance Coding</div>
                    <hr />
                    <center><Link to="#" className="know_more"><strong>Know More</strong></Link></center>
                </div>
                <div className="cards">
                    <img className="rect9_img" src={Webdevelopment2} alt="" />
                    <div className="contents_card">Web App Development</div>
                    <hr />
                    <center><Link to="#" className="know_more"><strong>Know More</strong></Link></center>
                </div>
                <div className="cards">
                    <img className="rect9_img" src={Android1} alt="" />
                    <div className="contents_card">Android App Development</div>
                    <hr />
                    <center><Link to="#" className="know_more"><strong>Know More</strong></Link></center>
                </div>

            </div>
            <div style={{ textAlign: 'center' }}>
                <img src={Ellipse1} style={{ margin: '0.5%' }} alt="" />
                <img src={Ellipse2} style={{ margin: '0.5%' }} alt="" />
                <img src={Ellipse2} style={{ margin: '0.5%' }} alt="" />

            </div>
            <div style={{ textAlign: 'center', margin: '2%' }}>
                <Link to ="#"> <img className="ban1" src={Bannernew1} alt="" /></Link>
            </div>
            <div className="timeline">
                <span className="Learning">Learing Path</span>
                <img className="timeline_img" src={Timeline1} alt="" />
                <br/>
                <br/>
                <br/>

            </div>
            
            <span className="Learning">How it Works</span>
            {/* <img src={Bannernew2} alt="" /> */}
            <div style={{display:'flex',flexDirection:'column'}} className="last_wrap">
            <div className="last">
                <img src={Coding31} className="coding_31" alt=""  />

                <div className="last_item">

                    <div className="last_one">
                        <div style={{
                            width: '35px',
                            height: '36px',

                            background: '#590BB2'
                            , borderRadius: '50%'
                            
                        }}>

                            <center style={{
                                fontFamily: ' Roboto',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '24px',
                                lineHeight: '28px',

                                color: '#FFFFFF'
                            }}>1</center>
                        </div>
                        <div className="last_one_item">
                        <div className="arya_items2"> <div><strong>Book</strong><br />
                        
Book a free coding classes with us. You just 
need a laptop with good internet connectivity</div>    </div>    
                        </div>
                    </div>
                    <div className="last_one">
                        <div style={{
                            width: '35px',
                            height: '36px',

                            background: '#590BB2'
                            , borderRadius: '50%'
                            
                        }}>

                            <center style={{
                                fontFamily: ' Roboto',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '24px',
                                lineHeight: '28px',

                                color: '#FFFFFF'
                            }}>2</center>
                        </div>
                        <div className="last_one_item">
                        <div className="arya_items2"> <div><strong>Book</strong><br />
                        
Book a free coding classes with us. You just 
need a laptop with good internet connectivity</div>    </div>    
                        </div>
                    </div> <div className="last_one">
                        <div style={{
                            width: '35px',
                            height: '36px',

                            background: '#590BB2'
                            , borderRadius: '50%'
                            
                        }}>

                            <center style={{
                                fontFamily: ' Roboto',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '24px',
                                lineHeight: '28px',

                                color: '#FFFFFF'
                            }}>3</center>
                        </div>
                        <div className="last_one_item">
                        <div className="arya_items2"> <div><strong>Book</strong><br />
                        
Book a free coding classes with us. You just 
need a laptop with good internet connectivity</div>    </div>    
                        </div>
                    </div> <div className="last_one">
                        <div style={{
                            width: '35px',
                            height: '36px',

                            background: '#590BB2'
                            , borderRadius: '50%'
                            
                        }}>

                            <center style={{
                                fontFamily: ' Roboto',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '24px',
                                lineHeight: '28px',

                                color: '#FFFFFF'
                            }}>4</center>
                        </div>
                        <div className="last_one_item">
                        <div className="arya_items2"> <div><strong>Book</strong><br />
                        
Book a free coding classes with us. You just 
need a laptop with good internet connectivity</div>    </div>    
                        </div>
                    </div>
              

                </div>
                {/* <center ><img  src={Bannernew2} alt="" /></center>  */}
      
                       
            </div> 
            <center ><Link to="#" > <img  className="ban2" src={Bannernew2} alt="" /></Link></center> 
            </div>
        </div>
        </Router>
    )
}

export default Rectangle9
