import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
    <div className='home-heading'>
        <h2>Hello 😊</h2>
        <h2>Welcome to SpEd@Home 🏠 📚</h2>

    </div>
    <div className='home-body'>
        <div>
          <span style={{color:"green"}}> ⬅ </span> <u>Go to Dashboard to see your activity</u>
        </div>
    </div>
    </>
  )
}

export default Home