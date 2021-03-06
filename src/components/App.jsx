import React, { useState } from "react";
export default App;

function App() {
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleSubmit(event) {
    //console.log("Submitted");
    // setFullName(fName + " " + lName);
    //setFullName(fName + " " + lName);
    event.preventDefault();
  }

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    // setFullName((prevValue) => {
    //   if (inputName === "fName") {
    //     return { fName: newValue, lName: prevValue.lName };
    //   } else {
    //     return { lName: newValue, fName: prevValue.fName };
    //   }

    //console.log(event);
    //console.log(event.target);

    //console.log(newValue + " " + inputName);
    // if (inputName === "fName") {
    //   setFullName({ fName: newValue });
    // } else {
    //   setFullName({ lName: newValue });
    // }
    // console.log(prevValue);

    const { value, name } = event.target;
    // setFullName((prevValue) => {
    //   if (name === "fName") {
    //     return { fName: value, lName: prevValue.lName, email: prevValue.email };
    //   } else if (name === "lName") {
    //     return { lName: value, fName: prevValue.fName, email: prevValue.email };
    //   } else if (name === "email") {
    //     return { email: value, lName: prevValue.lName, fName: prevValue.fName };
    //   }
    // });
    //   setFullName((prevValue) => {
    //     return {
    //       ...prevValue,
    //       [name]: value
    //       // [] array brackets are most important to indicate that name is the key variable and not hardcoded "name" string . Setting object key by variable using square brackets
    //     };
    //   });
    // }
    // function handleLName(event) {
    //   setLName(event.target.value);
    // }
    // function handleFName(event) {
    //   setFName(event.target.value);
    // }

    setFullName((prevValue) => ({ ...prevValue, [name]: value })); //This works
    // Wrpped {} of object in () so that JS is not confused with function {}  braces and clear that this is inline code.

    setFullName((prevValue) => {
      return { ...prevValue, [name]: value };
    }); //This has better readability.
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <p>{fullName.email}</p>
      <form onSubmit={handleSubmit}>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
        />
        <input
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          value={fullName.email}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
