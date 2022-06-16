import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Auth from "../utils/auth";
import "../assets/css/login.css";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

function Login() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: {
          ...userFormData,
        },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.log(err);
      setShowAlert(true);
    }
    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="Login">
      <Form Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
        </Form.Group>
        <Button
          block="true"
          size="lg"
          type="submit"
          disabled={!(userFormData.email && userFormData.password)}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
