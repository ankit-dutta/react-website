import React from 'react';
import './Dashboard.css';


const Dashboard = () => {
  return (
    <>
    <main>
        {/* NAVBAR STARTS */}
        <nav className='nav-container' style = {{background:"#FFFFFF"}}>
            <ul className='list-items'>
                <li className="list-text">Dashboard</li>
                
                <li className = "list-texttwo"><span style={{backgroundColor:"#6A53A2",borderRadius: "23.5px"}}>🔔</span> Jhon Mark <span>v</span></li>
            </ul>
        </nav>
        {/* NAVBAR ENDS----- */}

        {/* HEADING PART WITH IMAGE */}
        <header className='heading-container'>
          <div className='heading'>
            <div className='written-heading'>
            <h1 className='heading-one'>Welcome Back Nitin!</h1>
            <p >You will find all your progress and progress in this dashboard to let you know your growth and improve even more</p>
            <h6><b>Assessment remaining days : </b><span style={{color:"red"}}>6 Days</span> </h6>
            </div>
            <div className='images-style'>
                <img src="" alt='image here'/>
            </div>
          </div>
          {/* HEADING PART ENDING */}

          {/* SIDE-CARD STARTS */}

          <div  style={{height:"10px",width:"37%"}}>
              <div className='card-container'>
              <div>
              <h4 className='card-text'>child detail</h4>
              </div>
              <div className='profile-heading'>
              <img src="" alt="pics" style={{borderRadius:"50%",border:"2px solid blue",height:"40px"}}/>
              <div >
              <h3 className='card-name'>Jhon Max</h3>
              <p>Grade : 5</p>
              </div>
              
              </div>
              <hr />

              <div style={{display:"flex",alignItems:"center",height:"20px"}}>
              <p className='card-detail'>Plan Details:  </p>
              <button className='card-button'>upgrade plan</button>
              </div>
              <hr />

              <div className='card-therapy'>
                 
              <h3>OT Therapy</h3>
              <p>We Identify the child’s physical and occupation....</p>
              <div style={{display:"flex",gap:"10px"}}>
              <p>02 weekly Session</p> 
              <p>10 Months</p>
              </div>
              </div>
              <hr></hr>

              <div className='card-therapy'>  
                 <h3>OT Therapy</h3>
                 <p>We Identify the child’s physical and occupation....</p>
                 <div style={{display:"flex",gap:"10px"}}>
                 <p>02 weekly Session</p> 
                 <p>10 Months</p>
                 </div>
                 </div>

              <hr></hr>

              <div className='card-lastlayer'> 
              <div className='lastlayer-heading'> 
                 <h3>Education Assessment</h3>
                 <div style={{display:"flex",gap:"10px",fontSize:"8px",lineHeight:"10px",height:"20px"}}>
                 <p>02 weekly Session</p> 
                 <p>10 Months</p>
                 </div>
                 </div>
                 <div className='renew-part'>
                     <p>Renew Plan</p>
                     </div>
                 </div>

          </div>
          </div>

      </header>
      {/* SIDE CARD ENDS---- */}


        <div > {/* start*/}
             <div className='assessment-container'>

      {/* PROGRESS BAR sTARTING--- */}
          <h1>Assessment</h1>
          <div className="skills-bars">
                     <div style={{display:"flex" ,justifyContent:"space-between"}}>
                        <p>Progress</p>
                        <p>15% Completed</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "15%"}}></div>
                        </div>
                        <h4><span style={{color: "#FF0000",fontFamily:"Inter",fontStyle:"normal",fontSize:"14px",fontWeight:"500"}}>5 Days Left</span> to Complete your Assessment</h4>
             </div>
        {/* PROGRESS BAR ENDING */}

                <div className='assessment' >
                 <div  className='numbers'>1</div>

                <div>
                 <div className='assessment-text'>
                     <p>📋 1. Questionare</p>
                     <p>Basic Questions</p>
                 </div>
                 <div>
                 <button className="assessment-btn">Continue From Where you Left</button>
                 </div>
                 </div>
             </div>

             <div className='assessment'>
                 <div  className='numbers'>2</div>

                <div>
                 <div  className='assessment-text'>
                     <p>2.Questionare</p>
                     <p>Basic Questions</p>
                 </div>
              
                 </div>
             </div>

             <div className='assessment'>
                 <div  className='numbers'>3</div>

                <div>
                 <div  className='assessment-text'>
                     <p>3.Questionare</p>
                     <p>Basic Questions</p>
                 </div>
                 </div>
             </div>

             <div className='assessment'>
                 <div className='numbers'>4</div>

                <div>
                 <div  className='assessment-text'>
                     <p>4.Questionare</p>
                     <p>Basic Questions</p>
                 </div>
                 </div>
             </div>


             </div> {/*end */}












      </div>


</main>

    </>
  )
}

export default Dashboard