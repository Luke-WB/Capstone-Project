import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/action";

function Login() {
  /* const admin = {
    username: "",
    password: "",
  }; */
  const user = {
    username: "",
    password: "",
  };

  const [input, setInput] = useState(user);
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    setInput((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Card className="text-center w-25 my-5">
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form>
              <Form.Group md="4" controlId="validationCustom01">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Username"
                  onChange={(e) => handleChange("username", e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustom02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  onChange={(e) => handleChange("password", e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button
              className="my-4"
              onClick={() => {
                dispatch(loginUser(input));
              }}
            >
              Submit form
            </Button>
            <div>Non sei registrato?</div>
            <Button href="/registrazione" className="my-2 mb-4">
              Crea il tuo account!
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Login;
