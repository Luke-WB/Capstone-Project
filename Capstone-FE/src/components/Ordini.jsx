import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFatture, getOrdini, getStatoOrdine } from "../redux/action";
import { Button, Card, Collapse, Container, Fade } from "react-bootstrap";
import Fatture from "./Fatture";
import Pacco from "./Pacco";

function Ordini() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const idUser = useSelector((state) => state.user.idUser);
  const idCarrello = useSelector((state) => state.user.idCarrello);
  const ordini = useSelector((state) => state.user.ordini);
  const fatture = useSelector((state) => state.user.fatture);
  console.log(fatture);

  useEffect(() => {
    dispatch(getOrdini(token, idUser, idCarrello));
    dispatch(getFatture(token, idUser));
  }, []);

  return (
    <>
      <Container>
        {ordini !== [] ? (
          ordini.map((e, i) => (
            <Card key={i} className="mt-5 cardFattura">
              <Card.Header className="fw-bold fs-4 border-white my-2">NUMERO ORDINE: {e.numero}</Card.Header>
              <Card.Body className="d-flex m-2 mb-5 ms-3">
                <div className="d-flex flex-column w-50">
                  <Card.Text className="fs-5">
                    DATA PREVISTA PER LA CONSEGNA: <span className="fw-bold">{e.dataConsegna}</span>
                  </Card.Text>
                  <Card.Text>
                    Ordine effetuato in data: <span className="fw-bold">{e.dataOrdine}</span>
                  </Card.Text>
                  <Card.Text>
                    Articoli totali acquistati: <span className="fw-bold">{e.articoli.length}</span>
                  </Card.Text>
                  {fatture[i] !== undefined ? (
                    <Card.Text>
                      Importo totale: <span className="fw-bold">{fatture[i].importoTotale.toFixed(2)}</span> €
                    </Card.Text>
                  ) : (
                    <p></p>
                  )}
                </div>
                <div className="d-flex flex-column align-items-center w-50 bordo">
                  <Pacco ordine={e} />
                  <Fatture id={i} />
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Card className="mt-5 cardFattura text-center">
            <Card.Header className="fw-bold fs-4 border-white my-2">NESSUN ORDINE</Card.Header>
            <Card.Body className="d-flex flex-column align-items-center m-2 mb-5 ms-3">
              <Card.Text className="fs-4 my-5">
                Non ci sono ordini! Clicca sul pulsante per effettuare il tuo primo ordine!
              </Card.Text>
              <Button className="button mt-5" href="/articoli">
                Vai agli articoli!
              </Button>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
}

export default Ordini;
