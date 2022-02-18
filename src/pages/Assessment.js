import React from 'react';
import './Assessment.css';

const Assessment = () => {
  return (
    <div>
      <main className='outer-container' >
        {/* NAVBAR START------ */}
      <nav className='nav-container' style = {{background:"#FFFFFF"}}>
            <ul className='list-items'>
                <li className="list-text">Assessment</li>
                
                <li className = "list-texttwo"><span style={{backgroundColor:"#6A53A2",borderRadius: "23.5px"}}>🔔</span> Jhon Mark <span>v</span></li>
            </ul>
        </nav>
        {/* NAVBAR ENDS------- */}


        <div>
         <div>

         <div className="skills-bars" style={{padding:"30px"}}>
           
         <div style={{display:"flex" ,justifyContent:"space-between", color:"blue"}}>
                        <p>Progress</p>
                        <p>0% Completed</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "0%"}}></div>
                        </div>
                 <h4 style={{fontFamily: "Inter",fontStyle: "normal",fontWeight: "500",fontSize: "12px",lineHeight: "15px",textAlign: "right"}}>
                   <span style={{color: "#FF0000"}}>5 Days Left</span> to Complete your Assessment</h4>
             </div>


         </div>
        </div>

        
{/* ----------------- Assessment part start */}

<div className='assessment'>
                 <div className='numbers'>1</div>

                <div>
                 <div className='assessment-text'>
                     <p>Questionare</p>
                     <p>Answer the Basic questions, which help us to know more about Child</p>
                 </div>
                  <div>

                  <div className='head-cards'>

                     <div className='card-container'>
                       <div className="card">
                       <div> 🎓 </div>
                      <div className="container">
                       <h4><b>School Information</b></h4>
                       {/* <p>Architect  Engineer</p> */}
                       <progress></progress>
               </div>
             </div>
            </div>

 
          <div className='card-container'>
           <div className="card">
           <div> 👩‍👩‍👧 </div>
            <div className="container">
            <h4><b>Reason for Referral</b></h4>
            <p>Not started yet</p>
             </div>
             </div>
            </div>


           <div className='card-container'>
           <div className="card">
           <div> 👩‍👩‍👧 </div>
            <div className="container">
             <h4><b>Parent Information</b></h4>
              <p>Not started yet</p>
              </div>
               </div>
               </div>

 
                <div className='card-container'>
                <div className="card">
                 <div> 👭 </div>
                 <div className="container">
                 <h4><b>Behavioral Assessement</b></h4>
                 <p>Not started yet</p>
                 </div>
                </div>
                  </div>

               </div>


               </div>
                 <div className='loading-dots'>
                  <p style={{background: "#7860B4",borderRadius:"50%",height:"12px",width:"12px"}}></p>
                  <p style={{background: "#C4C4C4",borderRadius:"50%",height:"12px",width:"12px"}}></p>
                  <p style={{background: "#C4C4C4",borderRadius:"50%",height:"12px",width:"12px"}}></p>


                </div>
                {/* <hr /> */}
 
                  </div>

             
                    
                   
                
                 <div className='assessment-lower'>

                  <div className='lower-text'>
                  <span>👨‍👦</span> &nbsp; &nbsp; For Parents
                  </div>

                  <div className='my-btn' >
                  <button className="assessment-btn" style={{marginLeft:"250%"}}>Continue From Where you Left</button>
                  </div>
                  </div>
             </div>




             {/* -------------------- */}

     



                <div className='assessment'>
                 <div className='numbers'>2</div>

                <div>
                 <div className='assessment-text'>
                     <p>Play Worksheets</p>
                     <p>Child will play with Worksheet as a part of Assessment</p>
                     <h6>The child has to complete a set of worksheets which will be used to check where and when the child lacks physically or mentally which will be crucial for the report generation </h6>
                 </div>
                  <div>
                  </div>

     
                
              <div className='assessment-lower'>

              <div className='lower-text'>
              <span>🧒</span>&nbsp; For child
              </div>

              <div className='my-btn'  >
              <button className="assessment-btn" style={{marginLeft:"00%",background: "#B4B4B4"}}>Start Worksheet</button>
              </div>
              </div>
              </div>
              </div>
            
            
  
             <div className='assessment'>
                 <div  className='numbers'>3</div>

                <div>
                 <div className='assessment-text'>
                     <p>Meet Our Coach</p>
                     <p>Our Coach will Meet Parent & Child for Better Understanding</p>
                 </div>

                 {/* start */}
                 <div>
                   <h3 className='third-heading'>1. Remedial Therapy</h3>
                 </div>
                  <div>  {/*  Joiner div */}
                 <div style={{display:"flex" ,gap:"50px",justifyContent:"space-between",width:"60vw"}}>
                 <div style={{display:"flex",width:"40vw",justifyContent:"space-around"}}>
                   <div>
                     <h6 className='third-subheading'>👨‍👧 Meeting with Parent</h6>
                     <p>🕓 15min</p>
                   </div>
                   <div>
                   <h6 className='third-subheading'>🧒🏻 Meeting with Child</h6>
                     <p>🕓 15min</p>
                     </div>
                 </div>
                 <button style={{height:"29px",width:"150px",padding:"2px",marginTop:"25px",background: "#B4B4B4",color: "#FFFFFF",fontFamily: "Inter",borderRadius:"5px"}}>Schedule Meeting</button>
                 </div>
                 </div>
                 
                 {/* End------- */}

                 {/* Start----- */}
                 <div>
                   <h3 className='third-heading'>2. OT Therapy</h3>
                 </div>
                
                 <div style={{display:"flex" ,gap:"50px",justifyContent:"space-between",width:"60vw"}}>
                 <div style={{display:"flex",width:"40vw",justifyContent:"space-around"}}>
                   <div>
                     <h6 className='third-subheading'>👨‍👧 Meeting with Parent</h6>
                     <p>🕓 15min</p>
                   </div>
                   <div>
                   <h6 className='third-subheading'>🧒🏻 Meeting with Child</h6>
                     <p>🕓15min</p>
                     </div>
                 </div>
                 <button style={{height:"29px",width:"150px",padding:"2px",marginTop:"25px",background: "#B4B4B4",color: "#FFFFFF",fontFamily: "Inter",borderRadius:"5px"}}>Schedule Meeting</button>
                 </div>
                 {/* End---- */}
                 </div>  {/*Joiner div end*/}
                 
                 

                 <div className='assessment-lower'>

                  <div className='lower-text'>
                  <span>👨‍👨‍👦</span>&nbsp; &nbsp;For Parent and child
                  </div>

                  </div>


             </div>

             <div className='assessment'>
                 <div className='numbers'>4</div>

                <div>
                 <div className='assessment-text'>
                     <p>Child Report</p>
                     <p>Our Coach willl connect you to explain the Child Report</p>
                     <h6>By thorough examinations and with the help of the experts the team has created a full-fledged report of your child which will be reviewed with your in order to get even more clarification</h6>
                 </div>
                  <div>
                  </div>
   
                
            <div className='assessment-lower'>

            <div>
            <span>👨‍👦</span>For Parents
            </div>

            <div className='my-btn' >
            <button className="assessment-btn" style={{marginLeft:"00%",background: "#B4B4B4"}}>Continue with course</button>
            </div>
            </div>
            </div>
            </div>






        </main>



    </div>
  )
}

export default Assessment