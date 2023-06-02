import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { creaOrdine, getCarrello, rimuoviArticoliCarrello } from "../redux/action";

function Carrello() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const carrello = useSelector((state) => state.user.carrello);
  const user = useSelector((state) => state.user.user);
  const idCarrello = useSelector((state) => state.user.idCarrello);
  console.log(idCarrello);

  useEffect(() => {
    dispatch(getCarrello(idCarrello, token));
  }, []);

  return (
    <>
      <Container className="my-5">
        <Card className="mt-5 sfondo">
          <Card.Header>Riepilogo Carrello</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
            {carrello.articoli.map((e, i) => (
              <Card body key={i} className="w-50 mb-5 cardCarrello">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex ">
                    <img src={e.img} alt="Immagine articolo" className="w-25" />
                    <div className="d-lfex flex-column">
                      <p>{e.nome}</p>
                      <p>{e.marca}</p>
                      <p>$ {e.prezzo}</p>
                    </div>
                  </div>
                  <div>
                    <Button
                      className="button"
                      onClick={() => {
                        dispatch(rimuoviArticoliCarrello(idCarrello, e.id, token));
                      }}
                    >
                      DELETE
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
            <Button className="button" onClick={() => dispatch(creaOrdine(user.id, idCarrello, token))}>
              Procedi all'ordine
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Carrello;
