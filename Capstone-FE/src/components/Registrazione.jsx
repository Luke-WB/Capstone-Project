import { useState } from "react";
import { Button, InputGroup, Form, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { regisrazioneUser } from "../redux/action";

function Registrazione() {
  /* const admin = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    dataNascita: "",
    indirizzo: "",
    numeroTelefono: "",
    roles: ["ROLE_ADMIN"],
  }; */

  const user = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    dataNascita: "",
    indirizzo: "",
    numeroTelefono: "",
    roles: ["ROLE_USER"],
  };

  const [input, setInput] = useState(user);
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    setInput((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  function showPwd() {
    const input = document.getElementById("pwd");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <Card className="text-center w-25 my-5 cardCarrello">
          <Card.Body>
            <Card.Title className="mb-4">Registrazione</Card.Title>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group md="4" controlId="validationCustom01" className="mb-4">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nome"
                  onChange={(e) => handleChange("firstname", e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustom02" className="mb-4">
                <Form.Label>Cognome</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Cognome"
                  onChange={(e) => handleChange("lastname", e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustomUsername" className="mb-4">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => handleChange("username", e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustom03" className="mb-4">
                <Form.Label>Data di nascita</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="Data di nascita"
                  onChange={(e) => handleChange("dataNascita", e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustom04" className="mb-4">
                <Form.Label>Indirizzo</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Indirizzo"
                  onChange={(e) => handleChange("indirizzo", e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustom05" className="mb-4">
                <Form.Label>Cellulare</Form.Label>
                <Form.Control
                  required
                  type="tel"
                  placeholder="Numero di telefono"
                  onChange={(e) => handleChange("numeroTelefono", e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustomEmail" className="mb-4">
                <Form.Label>E-mail</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend" className="buttonO text-white">
                    @
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">Please choose an email.</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group md="4" controlId="pwd" className="mb-4">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                  <Button className="buttonO" onClick={() => showPwd()}>
                    O
                  </Button>
                  <Form.Control.Feedback type="invalid">Please choose a password.</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Button
                className="buttonO mt-2 mb-4"
                onClick={() => {
                  dispatch(regisrazioneUser(input));
                }}
              >
                Crea account!
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Registrazione;
