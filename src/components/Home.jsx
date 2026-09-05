import { useState, useEffect } from "react";
import Doctorcard from "./Doctorcard";

function Home({ newdoctor }) {
  let [doctors, setDoctors] = useState([]);
  let [search, setSearch] = useState("");
  let [specialization, setSpecialization] = useState("");

  function fetchdata() {
    let data = [
      {
        id: 1,
        name: "Teja",
        age: 26,
        gender: "Male",
        specialization: "Muscles",
        salary: 7000000,
      },
      {
        id: 2,
        name: "Sam",
        age: 26,
        gender: "Male",
        specialization: "Bones",
        salary: 4000000,
      },
      {
        id: 3,
        name: "Anu",
        age: 25,
        gender: "Female",
        specialization: "Heart",
        salary: 5000000,
      },
    ];

    setDoctors(data);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    if (newdoctor) {
      setDoctors((prev) => [...prev, newdoctor]);
    }
  }, [newdoctor]);

  const filtereddoctors = doctors.filter((val) => {
    return (
      val.name.toLowerCase().includes(search.toLowerCase()) &&
      (
        specialization == "" ||
        val.specialization == specialization
      )
    );
  });

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          className="text-field"
          value={search}
          placeholder="search doctor"
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

      {filtereddoctors.length > 0 ? (
        <div className="doctorparent">
          {filtereddoctors.map((doctor) => {
            return (
              <Doctorcard
                key={doctor.id}
                name={doctor.name}
                gender={doctor.gender}
                specialization={doctor.specialization}
              />
            );
          })}
        </div>
      ) : (
        <h1>No Doctors Found</h1>
      )}
    </div>
  );
}

export default Home;