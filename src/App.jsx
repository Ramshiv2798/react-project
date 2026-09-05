//import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import "./components/styles.css";
import Doctorcard from "./components/Doctorcard";
import Addnewdoctor from "./components/Addnewdoctor";

function App() {
  // const [count, setCount] = useState(0);
//  const [data, setData] = useState("");

  //useEffect(() => {
    //console.log("API calling or data changed:", data);
  //}, [data]);

  return (
    <div>
      {/* <p>Data: {data}</p> */}
      {/* <button
        onClick={() => {
          let a = prompt("Enter a name");
          setData(a);
        }}
      
        New Data
      </button>> */}

      {/* <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button> */}

      <Navbar />
      <Section />

      <div className="doctorparent">
        <Doctorcard name="Sivaram" specialization="Bones" gender="male" />
        <Doctorcard name="Teja" specialization="Muscles" gender="male" />
        <Doctorcard name="Vasavi" specialization="Psycho" gender="female" />
        <Doctorcard name="Madhu" specialization="Orthocare" gender="male" />
        <Doctorcard name="Aditya" specialization="Skin Specialist" gender="male" />
        <Doctorcard name="Deva" specialization="Lungs" gender="male" />
      </div>

      <Addnewdoctor />
    </div>
  );
}

export default App;
