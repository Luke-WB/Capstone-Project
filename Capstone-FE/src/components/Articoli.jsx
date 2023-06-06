import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { aggiungiArticoliCarrello, getArticoli } from "../redux/action";

function Articoli() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const articolo = useSelector((state) => state.user.articoli);
  const idCarrello = useSelector((state) => state.user.idCarrello);

  useEffect(() => {
    dispatch(getArticoli(token));
  }, []);

  return (
    <>
      <Container>
        <div className="d-flex justify-content-between flex-wrap ">
          {articolo.map((e, i) => (
            <Card style={{ width: "18rem", height: "37rem" }} key={i} className="mt-5 cardArticoli">
              <Card.Img variant="top" src={e.img} alt="Immagine articolo" className="img" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{e.nome}</Card.Title>
                  <Card.Text className="fw-bold">{e.marca}</Card.Text>
                  <div className="mt-4">
                    <Card.Text>Descrizione prodotto:</Card.Text>
                    <Card.Text>{e.descrizione}</Card.Text>
                  </div>
                </div>
                <div>
                  <Card.Text className="text-center fw-bold">{e.prezzo} €</Card.Text>
                  <Button
                    className="button w-100"
                    onClick={() => {
                      dispatch(aggiungiArticoliCarrello(idCarrello, e.id, token));
                    }}
                  >
                    Aggiungi al carrello
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Articoli;
