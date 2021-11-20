import React from "react";
import { validationLogin } from "./validate";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import "./style.scss";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: validationLogin,
    onSubmit: values => console.log(values)
  })
  return (
    <Form className="form form--login" onSubmit={formik.handleSubmit}>
      <p className="form--login__title">Academy of Cryptography Techniques</p>
      <Form.FloatingLabel label="Username" controlId="flatUsername" className="mb-3">
        <Form.Control
          name="username"
          type="text"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.username}
        />
        <Form.Text className="text-danger" hidden={!formik.errors.username}>{formik.errors.username}</Form.Text>
      </Form.FloatingLabel>
      <Form.FloatingLabel label="Password" controlid="flatPassword" className="mb-3">
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          isInvalid={!!formik.errors.password}
        />
        <Form.Text className="text-danger" hidden={!formik.errors.password}>{formik.errors.password}</Form.Text>
      </Form.FloatingLabel>
      <div className="d-grid gap-2">
        <Button type="submit" size="lg">Login</Button>
      </div>
    </Form>
  );
}

export default LoginForm;