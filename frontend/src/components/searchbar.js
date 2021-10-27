import React, {useState, useEffect} from 'react'
import Edit from "./Edit"

export const Searchbar = () => {
    const [search, setSearch] = useState("");
    const [person, setPerson] = useState("");
    const [no1, setNo1] = useState("");
    const [ap1, setAp1] = useState("");
    const [ci1, setCi1] = useState("");
    const [sx1, setSx1] = useState("");
    const [status, setStatus] = useState("");
    

    const get_person = async e => {
        e.preventDefault();
      try {
        const response = await fetch(`http://localhost:5000/registro/${search}`);
        const data = await response.json();
        console.log(data)
        await setPerson(data);
        console.log(person)
      } catch (err) {
        console.error(err.message);
        setPerson("");
      }
    };

    const delete_person = async e => {
    e.preventDefault();
      try {
        const response = await fetch(`http://localhost:5000/registro/${search}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
        const data = await response.json();
        console.log(data);
        setPerson("");
        setSearch("");
        setStatus("Deleted");
        console.log(status)

  
      } catch (err) {
        console.error(err.message);
        setStatus("Not found")
      }
    };

    const update_person = async e => {
                e.preventDefault();
        try {
          const body = { no: no1, ap: ap1, ci: ci1, sx: sx1 };
          console.log(JSON.stringify(body));
          const response = await fetch(`http://localhost:5000/registro/${search}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          })
          const data = await response.json();
          console.log(data);
          setNo1("");
          setCi1("");
          setAp1("");
          setSx1("");
          setSearch("");
          setPerson("");
          setStatus("Updated");
  
    
        } catch (err) {
          console.error(err.message);
        }
      };


    return (
        <div>
    <div className="container">
     <div className="input-group mb-3">
      <input type="search" id="form1" class="form-control" placeholder="Citizen id" 
       value={search}
       onChange={e => setSearch(e.target.value)}/>
      <button type="button" class="btn btn-primary" onClick={get_person}>Search</button>
    </div>  
    </div>

    <div className="container">
<form className="border p-4">
  <div className="mb-2">
    <label for="fname" className="form-label">First Name</label>
    <input type="text" placeholder={person.no_persona} className="form-control" id="fname" required
          value={no1}
          onChange={e => setNo1(e.target.value)}>
    </input>
  </div>
  <div className="mb-2">
    <label for="sname" className="form-label">Second Name</label>
    <input type="text" className="form-control" id="sname" required
        placeholder={person.ap_persona}
        value={ap1}
        onChange={e => setAp1(e.target.value)}>
    </input>
  </div>
  <div className="mb-2">
    <label for="ci" className="form-label">Citizen id</label>
    <input disabled type="text" className="form-control" id="ci" required    
        value={person.ci_persona}
        onChange={e => setCi1(e.target.value)}>
    </input>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadio1"
        value="Male"
        onChange={e => setSx1(e.target.value)}>
    </input>
  <label className="form-check-label" for="flexRadio1">
    Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadio2" checked
        value="Female"
        onChange={e => setSx1(e.target.value)}>
    </input>  
  <label className="form-check-label" for="flexRadio2">
    Female
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadio3" checked
          value="Other"
          onChange={e => setSx1(e.target.value)}>
      </input>
  <label className="form-check-label" for="flexRadio3">
    Other
  </label>
</div>
  <button onClick={delete_person} className="btn btn-danger mt-3 me-3">Delete</button>
  <button onClick={update_person} className="btn btn-secondary mt-3">Update</button>
</form>
<div className="mt-2">
    {status}
</div>
</div>
 
    </div>
    
    )}

export default Searchbar
