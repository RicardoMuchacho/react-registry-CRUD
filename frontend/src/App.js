import './App.css';
import Register from  './components/register'
import Searchbar from './components/searchbar'

//import React, {useState} from "react";


function App() {

  return (
    <div className="App">
      <div className="mt-1 d-flex justify-content-center">
        <p className="mb-2">Ricardo Muchacho Ci 27849052, Alonso Figueroa Ci 28536894</p> 
      </div>
      <h1 className="text-center mb-3">Register</h1>
      <Register />
      <h2 className="text-center mt-4 mb-3">Edit </h2>
      <Searchbar />

  

    </div>
  );
}

export default App;
