import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { creaFattura, getOrdine, trovaIdOrdine } from "../redux/action";

function Carrello() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const carrello = useSelector((state) => state.user.carrello);
  const idOrdine = useSelector((state) => state.user.idOrdine);
  const user = useSelector((state) => state.user.user);
  const idCarrello = useSelector((state) => state.user.idCarrello);
  const ordine = useSelector((state) => state.user.ordine);

  useEffect(() => {
    dispatch(trovaIdOrdine(token, user.id, idCarrello, carrello.articoli));
    dispatch(() => getOrdine(idOrdine, token));
  }, []);

  return (
    <>
      <Container>
        <Card className="mt-5 cardCarrello">
          <Card.Header>Riepilogo Ordine</Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div className="w-50">
                <Card.Title>Articoli</Card.Title>
                <Card.Text>Il tuo ordine contiene: {carrello.articoli.length} articoli</Card.Text>
                {carrello.articoli.map((e, i) => (
                  <Card body key={i} className="my-3 sfondo" style={{ width: "400px" }}>
                    <div className="d-flex ">
                      <img src={e.img} alt="Immagine articolo" className="w-25" />
                      <div className="d-flex flex-column">
                        <p>{e.nome}</p>
                        <p>$ {e.prezzo}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="w-50 bordo ">
                <Card.Title className="mb-5">Numero ordine: {ordine.numero}</Card.Title>
                <Card.Text className="mb-4">L'indirizzo di consegna è: {ordine.user.indirizzo}</Card.Text>
                <Card.Text className="mb-4">La data di consegna è prevista per il: {ordine.dataConsegna}</Card.Text>
                <Card.Text className="mb-5">Il prezzo della consegna è di: {ordine.prezzoConsegna} €</Card.Text>
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
