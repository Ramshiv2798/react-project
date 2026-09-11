import React from 'react';
import { useState } from 'react';
import Home from './Home';
import axios from 'axios'
import { useContext } from 'react';
import { DoctorContext } from './DoctorProvider';

function Addnewdoctor() {
  let {setNewdoctor} =useContext(DoctorContext)
    let [name, setName] = useState('');
    let [age, setAge] = useState('');
    let [gender, setGender] = useState('');
    let [specialization, setSpecialization] = useState('');
    let [salary, setSalary] = useState('');
    //let [newdoctor, setNewdoctor] = useState(null);
    async function handleSubmit(e) {
      try{
        e.preventDefault();
        let formdetails = {id:Date.now(), name, age, gender, specialization, salary};
        await axios.post('https://doctorapibackend.onrender.com/doctors',formdetails)
        alert('data posted')
        setNewdoctor(formdetails);
      } catch(err){
        console.log(err)
      }
    }
     //async function deletedata(id){
      //try{
        //await axios.delete(`https://doctorapibackend.onrender.com/doctors/${id}`)
        //alert('deleted')
        //setNewdoctor(id)
      //} catch(err){
        //console.log(err)
      //}
    //}
  

    //async function updatedata(id){
      //try{
      //let updated={
        // name: 'john', 
         //age: 25,
          //gender:'male',
         //salary: 50000,
          //specialization: 'bones'
        //}
      //await axios.put(`https://doctorapibackend.onrender.com/doctors/${id}`,updated)
      //alert('updated')
      //setNewdoctor(updated)
    //} catch(err){
      //console.log(err)
    //}
  //}
  return (
    <div className="form-container">
      <h1>Add New Doctor</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Doctor Name"/>
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age"/>
        <select name="" id="" value={gender} onChange={(e)=>setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="text" value={specialization} onChange={(e)=>setSpecialization(e.target.value)} placeholder="Enter Specialization"/>
        <input type="number" value={salary} onChange={(e)=>setSalary(e.target.value)} placeholder="Enter Salary" />
        <button type="submit">Add Doctor</button>
      </form>
      <Home/>
    </div>
  );
}

export default Addnewdoctor;