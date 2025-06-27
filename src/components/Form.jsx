import { useState } from "react";
import "./Form.css";
import { isEmpty, isEmailValid, isContactValid } from "../utils/validation";

const Form = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    contact: "",
    gender: "",
    desigination: "",
    resume: "",
    url: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const validationError = {};
    if (isEmpty(values.fullName)) {
      validationError.fullName = "Full name is required";
    }

    if (isEmpty(values.contact)) {
      validationError.contact = "Contact is required";
    }
    if (isEmpty(values.email)) {
      validationError.email = "Email is required";
    }
    if (isEmpty(values.gender)) {
      validationError.gender = "Gender is required";
    }
    if (isEmailValid(values.email)) {
      validationError.email = "Please enter a valid email";
    }
    if (isContactValid(values.contact)) {
      validationError.contact = "Please enter a valid contact";
    }
    return validationError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = handleValidation();
    setErrors(validationError);
    if (Object.keys(validationError).length == 0) {
      alert("Successfully submitted");
      setValues({
        fullName: "",
        email: "",
        contact: "",
        gender: "",
        desigination: "",
        resume: "",
        url: "",
      });
    }
  };

  const handleReset = () => {
    setErrors("");
    setValues({
      fullName: "",
      email: "",
      contact: "",
      gender: "",
      desigination: "",
      resume: "",
      url: "",
    });
  };

  return (
    <div className="container">
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv required-field">
          <label htmlFor="fullName" className="inputLabel">
            Full Name
          </label>
          <input
            type="text"
            className="inputBox"
            name="fullName"
            onChange={(e) => handleChange(e)}
            value={values.fullName}
          />
          {errors.fullName && (
            <small className="errors">{errors.fullName}</small>
          )}
        </div>

        <div className="inputDiv required-field">
          <label htmlFor="email" className="inputLabel">
            Email
          </label>
          <input
            type="text"
            className="inputBox"
            name="email"
            onChange={(e) => handleChange(e)}
            value={values.email}
          />
          {errors.email && <small className="errors">{errors.email}</small>}
        </div>
        <div className="inputDiv required-field">
          <label htmlFor="contact" className="inputLabel">
            Mobile No
          </label>
          <input
            type="text"
            className="inputBox"
            name="contact"
            onChange={(e) => handleChange(e)}
            value={values.contact}
          />
          {errors.contact && <small className="errors">{errors.contact}</small>}
        </div>
        <div className="inputDiv required-field inputRadio">
          <label htmlFor="contact" className="inputLabel">
            Gender
          </label>
          <input type="radio" name="gender" onChange={(e) => handleChange(e)} />
          Male
          <input type="radio" name="gender" onChange={(e) => handleChange(e)} />
          Female
          <input type="radio" name="gender" onChange={(e) => handleChange(e)} />
          Other
          <br />
          {errors.gender && <small className="errors">{errors.gender}</small>}
        </div>
        <div className="inputDiv required-field">
          <label htmlFor="desigination" className="inputLabel">
            Desigination
          </label>
          <select
            name="desigination"
            className="inputBox"
            id="desigination"
            onChange={(e) => handleChange(e)}
          >
            <option value="developer" selected defaultValue="developer">
              Developer
            </option>
            <option value="tester">Tester</option>
            <option value="support">Support</option>
          </select>
        </div>
        <div className="inputDiv ">
          <label
            htmlFor="resume"
            className="inputLabel"
            onChange={(e) => handleChange(e)}
          >
            Resume
          </label>
          <input
            type="file"
            name="resume"
            className="buttonSubmit"
            onChange={(e) => handleChange(e)}
            value={values.resume}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="url" className="inputLabel">
            Portfolio URL
          </label>
          <input
            type="text"
            className="inputBox"
            name="url"
            onChange={(e) => handleChange(e)}
            value={values.url}
          />
        </div>
        <div className="buttonDiv">
          <button type="button" className="buttonReset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="buttonSubmit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
