import { Button, Card, Container } from "react-bootstrap";
import { rimuoviArticoliCarrello, svuotaCarrello, svuotaFattura, trovaIdFattura } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Fattura from "./Fattura";
import Pacco from "./Pacco";
import ModaleOrdineOk from "./ModaleOrdineOk";
import ModaleOrdineNullo from "./ModaleOrdineNullo";

function OrdineConfermato() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const idCarrello = useSelector((state) => state.user.idCarrello);
  const idOrdine = useSelector((state) => state.user.idOrdine);
  console.log(idOrdine, "ORDINE IDD");
  const carrello = useSelector((state) => state.user.carrello);
  const ordine = useSelector((state) => state.user.ordine);
  const fattura = useSelector((state) => state.user.fattura);
  console.log(fattura, "FATTURA");
  const [smShow, setSmShow] = useState(false);

  const handleClose = () => setSmShow(false);
  const handleShow = () => setSmShow(true);

  const idArticoli = carrello.articoli !== undefined ? carrello.articoli.map((e) => e.id) : <p></p>;
  const eliminaArticoliByCarrello = () => {
    idArticoli.forEach((e) => {
      dispatch(rimuoviArticoliCarrello(idCarrello, e, token));
    });
  };

  useEffect(() => {
    dispatch(trovaIdFattura(token, idOrdine));
    eliminaArticoliByCarrello();
    dispatch(svuotaCarrello());
    handleShow();
  }, []);

  return (
    <>
      <Container className="pb-5">
        <Card className="mt-5 cardFattura">
          <Card.Header className="fw-bold fs-4 border-white my-2">NUMERO ORDINE: {ordine.numero}</Card.Header>
          <Card.Body className="d-flex m-2 mb-5 ms-3">
            <div className="d-flex flex-column w-50">
              <Card.Text className="fs-5">
                DATA PREVISTA PER LA CONSEGNA: <span className="fw-bold">{ordine.dataConsegna}</span>
              </Card.Text>
              <Card.Text>
                Ordine effetuato in data: <span className="fw-bold">{ordine.dataOrdine}</span>
              </Card.Text>
              {ordine.articoli !== undefined ? (
                <Card.Text>
                  Articoli totali acquistati: <span className="fw-bold">{ordine.articoli.length}</span>
                </Card.Text>
              ) : (
                <p></p>
              )}

              {fattura.importoTotale !== undefined ? (
                <Card.Text>
                  Importo totale: <span className="fw-bold">{fattura.importoTotale.toFixed(2)}</span> €
                </Card.Text>
              ) : (
                <p></p>
              )}
              {ordine.articoli !== undefined ? (
                ordine.articoli.map((e, i) => (
                  <Card body key={i} className="my-3 sfondo" style={{ width: "90%" }}>
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
                ))
              ) : (
                <p></p>
              )}
            </div>
            <div className="d-flex flex-column align-items-center w-50 bordo">
              <Button className="button mb-4" onClick={() => dispatch(svuotaFattura())}>
                Torna alla home!
              </Button>
              <Pacco ordine={ordine} />
              <Fattura />
            </div>
          </Card.Body>
        </Card>
        {ordine.statoOrdine === "ANNULLATO" ? (
          <ModaleOrdineNullo show={smShow} handleClose={handleClose} />
        ) : (
          <ModaleOrdineOk show={smShow} handleClose={handleClose} />
        )}
      </Container>
    </>
  );
}

export default OrdineConfermato;
