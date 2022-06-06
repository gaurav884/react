import './App.css';
import { useState } from "react"


function App() {
  const emailReg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const passReg =/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;
  const [name, setName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const [email, setEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const [password, setPassword] = useState("");
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false)

  const isEnterdNameValid = name.trim() !== "";
  const enteredNameisInvalid = enteredNameTouched && !isEnterdNameValid;

  const isEnterdEmailValid = (emailReg.test(String(email)));
  const enteredEmailisInvalid = enteredEmailTouched && !isEnterdEmailValid;

  const isEnterdPasswordValid = (passReg.test(String(password)));
  const enteredPasswordisInvalid = enteredPasswordTouched && !isEnterdPasswordValid;
  

  var isFormValid = false;

  if(isEnterdNameValid && isEnterdEmailValid && isEnterdPasswordValid){
    isFormValid = true;
  }
  
  function nameChangeHandler(e) {
    setName(e.target.value)
  }

  function nameBlurHandler(e) {
    setEnteredNameTouched(true)

  }

  function emailChangeHandler(e) {
    setEmail(e.target.value)
  }

  function emailBlurHandler(e) {
    setEnteredEmailTouched(true)

  }

  function passowordChangeHandler(e) {
    setPassword(e.target.value)
  }

  function passwordBlurHandler(e) {
    setEnteredPasswordTouched(true)

  }

  function submissionHandler(e) {
    e.preventDefault();

    console.log("submitted")
    setName("");
    setEnteredNameTouched(false)

    setPassword("");
    setEnteredPasswordTouched(false)

    setEmail("");
    setEnteredEmailTouched(false)
  }

  return (
    <div className="App">
      <h1>Create your Account</h1>
      <form className="form-container">
        <div className="name-container f-c">
          <div style={{ display: "flex", width: "100%" }}>
            <label className="f-l">Name:</label>
            <input className="f-i" type="text" placeholder="Enter your name here..." value={name} onChange={(e) => { nameChangeHandler(e) }} onBlur={(e) => { nameBlurHandler(e) }} />
          </div>
          {(enteredNameisInvalid) && <p className="f-p">Please enter this field correctly !</p>}
        </div>
        <div className="email-container f-c">
          <div style={{ display: "flex", width: "100%" }}>
            <label className="f-l">Email:</label>
            <input className="f-i" type="email" placeholder="Enter your email here..." value={email} onChange={(e)=>{emailChangeHandler(e)}} onBlur={(e) => { emailBlurHandler(e) }}/>
          </div>
          {(enteredEmailisInvalid) && <p className="f-p">Please enter correct email !</p>}
        </div>
        <div className="password-container f-c">
          <div style={{ display: "flex", width: "100%" }}>
            <label className="f-l">password:</label>
            <input className="f-i" type="password" placeholder="Create a password..." value={password} onChange={(e)=>{ passowordChangeHandler(e)}} onBlur={(e) => { passwordBlurHandler(e) }}/>
          </div>
          {(enteredPasswordisInvalid) && <p className="f-p">Please enter a strong password !</p>}
        </div>
        {/* <div className="confirm-password-container f-c">
          <div style={{ display: "flex", width: "100%" }}>
            <label className="f-l">Confirm Pass:</label>
            <input className="f-i" type="password" placeholder="Confirm your password..." value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
          </div>
          <p className="f-p">Please enter this field correctly !</p>
        </div> */}

        <button type="submit"  disabled={!isFormValid} className="btn" onClick={(e) => {submissionHandler(e)}}>Submit</button>
      </form>
    </div>
  );
}

export default App;
