import React from 'react';
import {useState }  from 'react'; 
import './QuizButtons.jsx';
import './QuizButtons.css';

export default function QuizButtons({className, style}){

    const [color1, setcolor1]= useState('#F07681'); // default baby pink 
    const [color2, setcolor2]= useState('#F07681'); 
    const [color3, setcolor3]= useState('#F07681'); 
    const [color4, setcolor4]= useState('#F07681'); 
    const [color5, setcolor5]= useState('#F07681'); 
   
    const handleClicked= button =>
    {
     
      if(button== "b1")
      {
         setcolor1('#38BFB6'); // make it baby blue
      }
      else{
         setcolor1('#F07681'); // normal color 
      }
      if(button== "b2")
      {
         setcolor2('#38BFB6'); // make it baby blue
      }
      else{
          setcolor2('#F07681'); // normal color 
      }
      if(button== "b3")
      {
         setcolor3('#38BFB6'); // make it baby blue
      }
      else{
          setcolor3('#F07681'); // normal color 
      }
      if(button== "b4")
      {
         setcolor4('#38BFB6'); // make it baby blue
      }
      else{
          setcolor4('#F07681'); // normal color 
      }
      if(button== "b5")
      {
         setcolor5('#38BFB6'); // make it baby blue
      }
      else{
          setcolor5('#F07681'); // normal color 
      }
    }

    return(
        
        <div className = {className} style={style}>

           <div className= 'disagree'>Disagree</div>
           <div className= 'agree'>Agree</div>
               <button
               className= 'b1'
               onClick={ ()=>handleClicked("b1")}
               style={{backgroundColor: color1}}
                 /> 
                 <button
               className= 'b2'
               onClick={()=>handleClicked("b2")}
               style={{backgroundColor: color2}}
                 /> 
                   <button
               className= 'b3'
               onClick={()=>handleClicked("b3")}
               style={{backgroundColor: color3}}
                 /> 
                   <button
               className= 'b4'
               onClick={()=>handleClicked("b4")}
               style={{backgroundColor: color4}}
                 /> 
                   <button
               className= 'b5'
               onClick={()=>handleClicked("b5")}
               style={{backgroundColor: color5}}
                 /> 
        </div>
        
    )
}