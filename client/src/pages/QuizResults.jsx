
import React from 'react';
import NavBar from './NavBarCustomer.jsx';
import './QuizResults.jsx';
import './QuizResults.css';

function PetImages() {
    return (
      <div>
        <img src="./Images/Sunshine.png" alt="Description" className="sunshine" />
      </div>
    );
  }


export default function QuizResults(){
    return(
        <div className= 'background'>
     <svg xmlns="http://www.w3.org/2000/svg" width="249" height="249" viewBox="0 0 249 249" fill="none" >
     <circle cx="124.5" cy="124.5" r="124.5" fill="#F07681" 
      />
     </svg>
     <div className= 'petname'>Sunshine!</div>
     <div className= 'personality'>ENFP-T</div>
     <div className= 'description'> Such individuals 
       need a playful furry friend 
       who can also give them a sense of calmness. We have carefully selected your pet to best fit you.
       Your Purrrrrrfect match is Sunshine!</div>
      <button className= 'retakequiz'>Retake Quiz</button>
      <button className= 'disc_alt'>Discover Alternatives</button>
      <div className= 'retakequizdes'>If you think this is not your personality, you can resubmit the form </div>
      <div className= 'disc_alt_des'>Find out the other matches you have made and choose your desired pet yourself</div>
      <PetImages/>
      <NavBar/>
        </div>
    )
}