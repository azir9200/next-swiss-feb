"use client"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h3> Welcome to my home page..</h3>
     
     <Link href="/About">    <button className="btn btn-info m-6">About</button></Link>
     <Link href="/skills">    <button className="btn btn-info m-6">Skills</button></Link>

<button className="btn btn-success m-6">Success</button>

<button className="btn btn-warning">Warning</button>

<button className="btn btn-error m-6">Error</button>
      {/* <h2>Welcome to my Home Page. bla bkla bla</h2>

      <h2> Counter :  {counter}  </h2>
      <div className="  ">
        <button className="btn btn-success  p-20" 
       onClick={() => setCounter(counter + 1)}> Increase </button> 


        <button className="btn btn-success" 
        onClick={() => setCounter(counter - 1)}> Decrease </button> 
       
      </div> */}
    </div>
  );
};

export default HomePage;