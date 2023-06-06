import { Button, Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import ModaleUser from "./ModaleUser";

function User() {
  const user = useSelector((state) => state.user.user);

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Container className="mt-5 ">
        <Card className="mt-5 cardFattura">
          <Card.Header className="fw-bold fs-4 border-white my-2">IL MIO PROFILO</Card.Header>
          <Card.Body className="d-flex m-2 mb-5 ms-3">
            <div className="d-flex flex-column w-50">
              <Card.Text>
                NOME: <span className="fw-bold">{user.firstname}</span>
              </Card.Text>
              <Card.Text>
                COGNOME: <span className="fw-bold">{user.lastname}</span>
              </Card.Text>
              <Card.Text>
                DATA DI NASCITA: <span className="fw-bold">{user.dataNascita}</span>
              </Card.Text>
              <Card.Text>
                INDIRIZZO: <span className="fw-bold">{user.indirizzo}</span>
              </Card.Text>
              <Card.Text>
                E-MAIL: <span className="fw-bold">{user.email}</span>
              </Card.Text>
              <Card.Text className="text-secondary">
                USERNAME: <span className="fw-bold">{user.username}</span>
              </Card.Text>
              <Card.Text className="text-secondary">
                PASSWORD: <span className="fw-bold">*************</span>
              </Card.Text>
            </div>
            <div className="w-50 bordo text-center">
              <Button
                className="button"
                onClick={() => {
                  setModalShow(true);
                }}
              >
                Modifica profilo
              </Button>
              <ModaleUser show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default User;
