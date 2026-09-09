import axios from 'axios'
import { useState, useEffect } from "react";
import Doctorcard from "./Doctorcard";


function Home({ newdoctor,deletedata,updatedata}) {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("");

  async function getapidata(){
 let response=await axios.get("https://doctorapibackend.onrender.com/doctors")
 console.log(response)//response- {}
 console.log(response.data) //actual data
 setDoctors(response.data)


    
    //setDoctors(data);
  }

  useEffect(() => {
    getapidata();
  }, [newdoctor]);

  // useEffect(() => {
    // if (newdoctor) {
      // setDoctors((prev) => [...prev, newdoctor]);
    // }
      //}, [newdoctor]);

  const filteredDoctors = doctors.filter((doc) => {
  const matchesName = doc.name.toLowerCase().includes(search.toLowerCase());
    const matchesSpecialization =
      specialization === "" || doc.specialization === specialization;
    return matchesName && matchesSpecialization;
  });

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          className="text-field"
          value={search}
          placeholder="Search Doctor"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="text-field"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="">Select Specialization</option>
          <option value="Muscles">Muscles</option>
          <option value="Bones">Bones</option>
          <option value="Heart">Heart</option>
        </select>
      </div>

      {filteredDoctors.length > 0 ? (
        <div className="doctorcontainer">
          {filteredDoctors.map((doctor) => (
            <Doctorcard
              deletedata={deletedata}
              updatedata={updatedata}
              key={doctor.id}
              id={doctor.id}
              name={doctor.name}
              gender={doctor.gender}
              specialization={doctor.specialization}
            />
          ))}
        </div>
      ) : (
        <h1>No Doctors Found</h1>
      )}
    </div>
  );
}

export default Home;
