import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { creaFattura, rimuoviArticoliCarrello, trovaIdOrdine } from "../redux/action";

function Carrello() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const carrello = useSelector((state) => state.user.carrello);
  const idOrdine = useSelector((state) => state.user.idOrdine);
  console.log(idOrdine, "ORDINE ID");
  const idUser = useSelector((state) => state.user.idUser);
  const user = useSelector((state) => state.user.user);
  const idCarrello = useSelector((state) => state.user.idCarrello);
  const ordine = useSelector((state) => state.user.ordine);

  let somma = 0;
  carrello.articoli.forEach((e) => {
    somma += e.prezzo;
  });

  useEffect(() => {
    dispatch(trovaIdOrdine(token, idUser, idCarrello, carrello));
  }, []);

  return (
    <>
      <Container>
        <Card className="mt-5 cardOrdine">
          <Card.Header>Riepilogo Ordine</Card.Header>
          <Card.Body className="ms-3 my-3">
            <div className="d-flex justify-content-between">
              <div className="w-50">
                <Card.Title>Articoli</Card.Title>
                <Card.Text>Il tuo ordine contiene: {carrello.articoli.length} articoli</Card.Text>
                {carrello.articoli.map((e, i) => (
                  <Card body key={i} className="my-4 sfondo" style={{ width: "95%" }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <img src={e.img} alt="Immagine articolo" className="w-25" />
                        <div className="d-flex flex-column justify-content-between ms-4">
                          <p>{e.nome}</p>
                          <p>{e.marca}</p>
                          <p className="fw-bold">$ {e.prezzo}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="w-50 bordo ">
                <Card.Title className="mb-5">Numero ordine: {ordine.numero}</Card.Title>
                <Card.Text className="mb-5">
                  L'indirizzo di consegna è: <span className="fw-bold">{user.indirizzo}</span>
                </Card.Text>
                <Card.Text className="mb-5">
                  La data di consegna è prevista per il: <span className="fw-bold">{ordine.dataConsegna}</span>
                </Card.Text>
                <Card.Text className="mb-5">
                  Il prezzo della consegna è di: <span className="fw-bold">{ordine.prezzoConsegna} €</span>
                </Card.Text>
                <Card.Text className="mb-5">
                  Il prezzo totale del carrello è di: <span className="fw-bold">{somma.toFixed(2)} €</span>
                </Card.Text>
                <Button className="button" onClick={() => dispatch(creaFattura(idOrdine, token))}>
                  Conferma ordine
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Carrello;
