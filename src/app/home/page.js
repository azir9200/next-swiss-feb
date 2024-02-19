"use client"
import React, { useState } from 'react';

const HomePage = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h2>Welcome to my Home Page. bla bkla bla</h2>

      <h2> Counter :  {counter}  </h2>
      <div className="  ">
        <button className="btn btn-success  p-20" 
       onClick={() => setCounter(counter + 1)}> Increase </button> 


        <button className="btn btn-success" 
        onClick={() => setCounter(counter - 1)}> Decrease </button> 
       
      </div>
    </div>
  );
};

export default HomePage;