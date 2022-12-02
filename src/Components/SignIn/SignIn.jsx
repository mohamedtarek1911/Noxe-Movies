import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  let NavTo = useNavigate();
  const [Loading, setLoading] = useState(true);

  const [ErrorMsg, setErrorMsg] = useState("");
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
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
        `https://routeegypt.herokuapp.com/signin`,
        Data
      );
      console.log(data.token);
      if (data.message === "success") {
        localStorage.setItem("key", data.token);
        // localStorage.setItem("token");
        NavTo("/Home");
      } else {
        setLoading(true);
        console.log("try Again");
        setErrorMsg(data.message);
      }
      return data;
    }
    getData(FormData);
  }

  return (
    <>
      <h1>Login Form</h1>

      {ErrorMsg ? (
        <>
          <div className="alert alert-danger">{ErrorMsg}</div>
        </>
      ) : (
        ""
      )}

      <form onSubmit={sendData}>
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

        <button className="btn btn-primary float-end" type={"submit"}>
          {Loading ? "Login" : "Loading..."}
        </button>
      </form>
    </>
  );
}
