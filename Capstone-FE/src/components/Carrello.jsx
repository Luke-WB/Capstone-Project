import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { creaOrdine, rimuoviArticoliCarrello, trovaIdCarrello } from "../redux/action";

function Carrello() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const carrello = useSelector((state) => state.user.carrello);
  const idUser = useSelector((state) => state.user.idUser);
  const idCarrello = useSelector((state) => state.user.idCarrello);

  useEffect(() => {
    dispatch(trovaIdCarrello(idUser, token));
  }, []);

  return (
    <>
      <Container className="my-5">
        <Card className="mt-5 cardCarrello">
          <Card.Header>Riepilogo Carrello</Card.Header>
          <Card.Body className="ms-4">
            <Card.Title className="mb-4">Articoli aggiunti al carrello: {carrello.articoli.length}</Card.Title>
            {carrello.articoli.map((e, i) => (
              <Card body key={i} className="w-50 mb-4 sfondo">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <img src={e.img} alt="Immagine articolo" className="w-25" />
                    <div className="d-flex flex-column justify-content-between ms-4">
                      <p>{e.nome}</p>
                      <p>{e.marca}</p>
                      <p className="fw-bold">$ {e.prezzo}</p>
                    </div>
                  </div>
                  <div>
                    <Button
                      className="button"
                      onClick={() => dispatch(rimuoviArticoliCarrello(idCarrello, e.id, token))}
                    >
                      Rimuovi
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
            <Button
              className="buttonO my-4"
              onClick={() => {
                dispatch(creaOrdine(idUser, idCarrello, token));
              }}
            >
              Procedi all'ordine
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Carrello;
