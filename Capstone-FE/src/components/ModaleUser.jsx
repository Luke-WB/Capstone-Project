import { useState } from "react";
import { Card, Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { putUser } from "../redux/action";

function ModaleUser(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const idUser = useSelector((state) => state.user.idUser);
  const idCarrello = useSelector((state) => state.user.idCarrello);
  const carrello = useSelector((state) => state.user.carrello);
  const user = useSelector((state) => state.user.user);
  const ordini = useSelector((state) => state.user.ordini);
  console.log(idCarrello, user);

  const idRuolo = user.roles !== undefined ? user.roles[0].id : <p></p>;
  const nomeRuolo = user.roles !== undefined ? user.roles[0].roleName : <p></p>;
  const utente = {
    id: idUser,
    firstname: "",
    lastname: "",
    username: user.username,
    email: user.email,
    password: user.password,
    dataNascita: "",
    indirizzo: "",
    numeroTelefono: "",
    roles: [
      {
        id: idRuolo,
        roleName: nomeRuolo,
      },
    ],
    ordini: ordini,
    carrello: {
      id: idCarrello,
      articoli: carrello.articoli,
    },
  };
  const [input, setInput] = useState(utente);

  const handleChange = (field, value) => {
    setInput((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Modal show={props.show} onHide={props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <div className="modaleUser">
        <Modal.Header className="my-4 pb-4 d-flex justify-content-center align-items-center">
          <Modal.Title>MODIFICA PROFILO</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mx-3">
          <Form className="text-center">
            <Form.Group className="mb-4">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nome"
                onChange={(e) => handleChange("firstname", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Cognome"
                onChange={(e) => handleChange("lastname", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Data di nascita</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Data di nascita"
                onChange={(e) => handleChange("dataNascita", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Indirizzo</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Indirizzo"
                onChange={(e) => handleChange("indirizzo", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Cellulare</Form.Label>
              <Form.Control
                required
                type="tel"
                placeholder="Numero di telefono"
                onChange={(e) => handleChange("numeroTelefono", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>E-mail</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend" className="button text-white">
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
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button
            className="my-4 button mx-3"
            onClick={() => {
              dispatch(putUser(idUser, token, input));
              props.onHide();
            }}
          >
            Conferma modifiche!
          </Button>
          <Button className="my-4 button mx-3" onClick={props.onHide}>
            Annulla
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}
export default ModaleUser;
