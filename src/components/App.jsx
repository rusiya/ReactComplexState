import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleSubmit(event) {
    console.log("Submitted");
    setFullName(fName + " " + lName);
    event.preventDefault();
  }

  function handleLName(event) {
    setLName(event.target.value);
  }
  function handleFName(event) {
    setFName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {fullName}</h1>
      <form onSubmit={handleSubmit}>
        <input name="fName" placeholder="First Name" onChange={handleFName} />
        <input name="lName" placeholder="Last Name" onChange={handleLName} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
