import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  let navigate = useNavigate();
  const [Loading, setLoading] = useState(true);

  const [ErrorMsg, setErrorMsg] = useState("");
  const [FormData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
  });

  function getFormData({ target }) {
    setFormData({
      ...FormData,
      [target.name]: target.value,
    });
    console.log(FormData);
  }

  function sendData(e) {
    e.preventDefault();
    setLoading(false);
    async function getData(Data) {
      let { data } = await axios.post(
        `https://routeegypt.herokuapp.com/signup`,
        Data
      );
      console.log(data);
      if (data.message === "success") {
        navigate("/SignIn");
      } else {
        setLoading(true);
        console.log("try Again");
        setErrorMsg(data.errors.email.message);
      }
      return data;
    }
    getData(FormData);
  }

  return (
    <>
      <h1>Registeration Form</h1>

      {ErrorMsg ? (
        <>
          <div className="alert alert-danger">{ErrorMsg}</div>
        </>
      ) : (
        ""
      )}

      <form onSubmit={sendData}>
        <label htmlFor="first_name">First Name :</label>
        <input
          onChange={getFormData}
          type="text"
          name="first_name"
          placeholder="U FName"
          id="first_name"
          className="form-control my-3"
        />
        <label htmlFor="last_name">Last Name :</label>
        <input
          onChange={getFormData}
          type="text"
          name="last_name"
          placeholder="U LName"
          id="last_name"
          className="form-control my-3"
        />
        <label htmlFor="email">Email :</label>
        <input
          onChange={getFormData}
          type={"email"}
          name="email"
          placeholder="U Email"
          id="email"
          className="form-control my-3"
        />
        <label htmlFor="password">Password :</label>
        <input
          onChange={getFormData}
          type={"password"}
          name="password"
          placeholder="U Password"
          id="password"
          className="form-control my-3"
        />
        <label htmlFor="age">Age :</label>
        <input
          onChange={getFormData}
          type={"number"}
          name="age"
          placeholder="U Age"
          id="age"
          className="form-control my-3"
        />
        <button className="btn btn-primary float-end" type={"submit"}>
          {Loading ? "SignUp" : "Loading..."}
        </button>
      </form>
    </>
  );
}
