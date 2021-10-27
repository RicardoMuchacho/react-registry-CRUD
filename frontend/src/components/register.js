import React, {useState} from 'react'

export const Register = () => {
    const [no, setNo] = useState("");
    const [ap, setAp] = useState("");
    const [ci, setCi] = useState("");
    const [sx, setSx] = useState("");
    const [status, setStatus] = useState("");

    const submit = async e => {
      e.preventDefault();
      try {
        const body = { no, ap, ci, sx };
        console.log(JSON.stringify(body));
        const response = await fetch("http://localhost:5000/registro", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
        const data = await response.json();
        console.log(data);
        setNo("");
        setCi("");
        setAp("");
        setSx("");
        setStatus("Registered");

  
      } catch (err) {
        console.error(err.message);
      }
    };

    return (
<div className="container border p-4">
<form onSubmit={submit}>
  <div className="mb-2">
    <label for="fname" className="form-label">First Name</label>
    <input type="text" className="form-control" id="fname" required
    value={no}
          onChange={e => setNo(e.target.value)}>
    </input>
  </div>
  <div className="mb-2">
    <label for="sname" className="form-label">Second Name</label>
    <input type="text" className="form-control" id="sname" required
        value={ap}
        onChange={e => setAp(e.target.value)}>
    </input>
  </div>
  <div className="mb-2">
    <label for="ci" className="form-label">Citizen id</label>
    <input type="text" className="form-control" id="ci" required    
        value={ci}
        onChange={e => setCi(e.target.value)}>
    </input>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadio1"
        value="Male"
        onChange={e => setSx(e.target.value)}>
    </input>
  <label className="form-check-label" for="flexRadio1">
    Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadio2" checked
        value="Female"
        onChange={e => setSx(e.target.value)}>
    </input>  
  <label className="form-check-label" for="flexRadio2">
    Female
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadio3" checked
          value="Other"
          onChange={e => setSx(e.target.value)}>
      </input>
  <label className="form-check-label" for="flexRadio3">
    Other
  </label>
</div>
  <button type="submit"  className="btn btn-primary mt-3">Submit</button>
</form>
<div className="mt-2">
    {status}
</div>
</div>
    )
}

export default Register