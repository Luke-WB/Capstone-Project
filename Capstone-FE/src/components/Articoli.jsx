import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { aggiungiArticoliCarrello, getArticoli } from "../redux/action";
import tasieraLogi from "../assets/img/Tastiera-logi.jpeg";

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
            <Card style={{ width: "18rem" }} key={i} className="mt-5 cardArticoli">
              <Card.Img variant="top" src={tasieraLogi} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{e.nome}</Card.Title>
                <Card.Text className="d-flex flex-column justify-content-between">
                  <div>
                    <p>{e.marca}</p>
                    <p>Descrizione prodotto: {e.descrizione}</p>
                    <p className="text-center fw-bold">{e.prezzo} €</p>
                  </div>
                  <Button
                    className="button w-100"
                    onClick={() => {
                      dispatch(aggiungiArticoliCarrello(idCarrello, e.id, token));
                    }}
                  >
                    Aggiungi al carrello
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Articoli;
