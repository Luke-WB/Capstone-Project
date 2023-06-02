import { Button, Card, Container, Modal } from "react-bootstrap";
import { getFattura, getOrdine, trovaIdFattura } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Fattura from "./Fattura";
import ModaleOrdine from "./ModaleOrdine";

function OrdineConfermato() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const ordine = useSelector((state) => state.user.ordine);
  const fattura = useSelector((state) => state.user.fattura);
  const idOrdine = useSelector((state) => state.user.idOrdine);
  const idFattura = useSelector((state) => state.user.idFattura);
  const [smShow, setSmShow] = useState(false);

  const handleClose = () => setSmShow(false);
  const handleShow = () => setSmShow(true);

  useEffect(() => {
    dispatch(getOrdine(idOrdine, token));
    dispatch(trovaIdFattura(token, idOrdine));
    dispatch(() => getFattura(idFattura, token));
    //handleShow();
  }, []);

  return (
    <>
      <Container className="pb-5">
        <Card className="mt-5 cardCarrello">
          <Card.Header className="fw-bold fs-4 border-white my-2">NUMERO ORDINE: {ordine.numero}</Card.Header>
          <Card.Body className="d-flex my-5">
            <div className="d-flex flex-column w-50">
              <Card.Text>Data prevista per la consegna: {ordine.dataConsegna}</Card.Text>
              <Card.Text>Ordine effetuato in data: {ordine.dataOrdine}</Card.Text>
              <Card.Text>Articoli totali acquistati: {ordine.carrello.articoli.length}</Card.Text>
              {ordine.carrello.articoli.map((e, i) => (
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
              <Card.Text>Importo totale: {fattura.importoTotale} €</Card.Text>
            </div>
            <div className="d-flex flex-column align-items-center w-50">
              <Button className="button">Traccia il mio pacco!</Button>
              <Fattura />
            </div>
          </Card.Body>
        </Card>
        <ModaleOrdine show={smShow} handleClose={handleClose} />
      </Container>
    </>
  );
}

export default OrdineConfermato;
