import React, { useState } from 'react';
import Home from './Home';

function Addnewdoctor() {
  let [name, setName] = useState('');
  let  [age, setAge] = useState('');
  let  [gender, setGender] = useState('');
  let  [specialization, setSpecialization] = useState('');
  let  [salary, setSalary] = useState('');
  let [newdoctor, setNewdoctor] = useState(null);
  
  function handleSubmit(event) {
    event.preventDefault();
    const doctor = {
      id: Date.now(),
      name,
      age,
      gender,
      specialization,
      salary,
    };
    setNewdoctor(doctor);
  }

  return (
    <div className="form-container">
      <h1>Add new doctor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Doctor Name"
          className="text-field"
        />

        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter Age"
          className="text-field"
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="text-field"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="text"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          placeholder="Enter Specialization"
          className="text-field"
        />

        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Enter Salary"
          className="text-field"
        />

        <button type="submit">Add Doctor</button>
      </form>
      {newdoctor && (
        <div className="doctor-info">
          <h2>Added Doctor</h2>
          <p><strong>Name:</strong> {newdoctor.name}</p>
          <p><strong>Age:</strong> {newdoctor.age}</p>
          <p><strong>Gender:</strong> {newdoctor.gender}</p>
          <p><strong>Specialization:</strong> {newdoctor.specialization}</p>
          <p><strong>Salary:</strong> {newdoctor.salary}</p>
        </div>
      )}
      <Home newdoctor={newdoctor}/>
    </div>
  );
}

export default Addnewdoctor;
