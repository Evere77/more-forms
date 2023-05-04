// Worked with Mann and Kevin
import React, { useState } from "react";

const initialFormState = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const initialErrorState = {
  fname: null,
  lname: null,
  email: null,
  password: null,
  confirmPassword: null,
};

const UserFormNew = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [errorState, setErrorState] = useState(initialErrorState);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    handleError(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");
    setFormState(initialFormState);
  };

  const handleError = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "fname":
        if (value.length < 2) {
          setErrorState({
            ...errorState,
            fname: "First name must be atleast 2 characters.",
          });
        } else {
          setErrorState({
            ...errorState,
            fname: "",
          });
        }
        break;
      case "lname":
        if (value.length < 2) {
          setErrorState({
            ...errorState,
            lname: "Last name must be atleast 2 characters.",
          });
        } else {
          setErrorState({
            ...errorState,
            lname: "",
          });
        }
        break;
      case "email":
        if (!value.includes("@")) {
          setErrorState({
            ...errorState,
            email: "Email must be atleast 5 characters.",
          });
        } else {
          setErrorState({
            ...errorState,
            email: "",
          });
        }
        break;
      case "password":
        if (value.length < 8) {
          setErrorState({
            ...errorState,
            password: "Password must be atleast 8 characters.",
          });
        } else {
          setErrorState({
            ...errorState,
            password: "",
          });
        }
        break;
      case "confirmPassword":
        if (value !== formState.password) {
          setErrorState({
            ...errorState,
            confirmPassword: "Passwords do not match",
          });
        } else {
          setErrorState({
            ...errorState,
            confirmPassword: "",
          });
        }
        break;
      default:
        console.log("**Unexpected input name**");
        break;
    }
  };

  const formIsValid =
    errorState.fname === "" &&
    errorState.lname === "" &&
    errorState.email === "" &&
    errorState.password === "" &&
    errorState.confirmPassword === "";

  return (
    <div className="container">
      <div className="card mt-3">
        <h3 className="card-header">More Forms</h3>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">First Name: </label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="fname"
                value={formState.fname}
              />
              {errorState.fname && (
                <span className="form-text text-danger">
                  {errorState.fname}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name: </label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="lname"
                value={formState.lname}
              />
              {errorState.lname && (
                <span className="form-text text-danger">
                  {errorState.lname}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Email: </label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="email"
                value={formState.email}
              />
              {errorState.email && (
                <span className="form-text text-danger">
                  {errorState.email}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Password: </label>
              <input
                className="form-control"
                type="password"
                onChange={handleChange}
                name="password"
                value={formState.password}
              />
              {errorState.password && (
                <span className="form-text text-danger">
                  {errorState.password}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password:</label>
              <input
                className="form-control"
                type="password"
                onChange={handleChange}
                name="confirmPassword"
                value={formState.confirmPassword}
              />
              {errorState.confirmPassword && (
                <span className="form-text text-danger">
                  {errorState.confirmPassword}
                </span>
              )}
            </div>
            <div className="text-end">
              <input
                type="submit"
                value="Create User"
                className="btn btn-primary"
                disabled={!formIsValid}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserFormNew;