import React, { useState } from 'react';
import './SignUp.css';
import Axios from 'axios';

const SignUp = () => {
  const url = 'http://localhost:8080/user/add';
  const [data, setData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  function submit(e) {
    e.preventDefault();

    // Validate the form data
    if (validateForm()) {
      Axios.post(url, {
        name: data.name,
        email: data.email,
        address: data.address,
        phone: data.phone,
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.error('Error submitting the form:', error);
        });
    }
  }

  function validateForm() {
    let isValid = true;
    let newErrors = {};

    // Validate Name
    if (!data.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Validate Email
    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email is not valid';
      isValid = false;
    }

    // Validate Phone
    if (!data.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(data.phone)) {
      newErrors.phone = 'Phone number is not valid';
      isValid = false;
    }

    // Set the new errors
    setErrors(newErrors);

    return isValid;
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <div className="SignUp">
      <h1>Sign Up</h1>
      <div className="card">
        <div className="card-body">
          {/* form  */}
          <form onSubmit={(e) => submit(e)}>
            <div className="form-group">
              <label htmlFor="exampleInputName">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="nameHelp"
                placeholder="Name"
                onChange={(e) => handle(e)}
                value={data.name}
              />
              {errors.name && <small className="text-danger">{errors.name}</small>}

              <label htmlFor="exampleInputPhone">Phone Number</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                aria-describedby="phoneHelp"
                placeholder="Phone"
                onChange={(e) => handle(e)}
                value={data.phone}
              />
              {errors.phone && <small className="text-danger">{errors.phone}</small>}

              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                onChange={(e) => handle(e)}
                value={data.email}
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}

              <label htmlFor="exampleInputAddress">Address</label>
              <textarea
                rows="4"
                cols="50"
                className="form-control"
                id="address"
                aria-describedby="emailHelp"
                placeholder="Address"
                onChange={(e) => handle(e)}
                value={data.address}
              />
              {/* No need for validation here as it's optional */}
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
