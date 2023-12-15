
import {useNavigate} from "react-router-dom";
import React from 'react';
import NavBar from './NavBarCustomer.jsx';
import './Quiz.jsx';
import './Quiz.css';
import QuizButtons from './QuizButtons.jsx';
import Layout from "./Layout.jsx";
import './QuizResults.jsx'
import './QuizResults.css'


export default function Quiz(){
  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate('/mycart');
  }

  const handleDoneClick = () => {
    navigate('/QuizResults');
  }

    return(
        
        <div className = "background5"> 
        <button onClick={handleCartClick} className="mycartteal2">
        <img src="./Images/cart TEAL.png" alt="Description" className="mycartteal2-icon" />
        </button> 
        <div className= 'text1'>You regularly make new friends.</div>
        <div className= 'text2'>You spend a lot of your free time exploring various random topics that pique your interest.</div>
        <div className= 'text3'>Seeing other people cry can easily make you feel like you want to cry too.</div>
        <div className= 'text4'>You prefer to completely finish one project before starting another.</div>
        <div className= 'text5'>You are very sentimental.</div>
        <div className= 'text6'>You like to use organizing tools like schedules and lists.</div>
        <button onClick={handleDoneClick} className= 'done'>Done</button>
        <QuizButtons className='q1'/>
        <QuizButtons className='q2'/>
        <QuizButtons className='q3'/>
        <QuizButtons className='q4'/>
        <QuizButtons className='q5'/>
        <QuizButtons className='q6'/>
        <Layout/>
        <NavBar/>
        </div>   
    )
}