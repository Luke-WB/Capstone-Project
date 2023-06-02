import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import jsPDF from "jspdf";
import { getFattura, getOrdine, trovaIdFattura } from "../redux/action";

function Fattura() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const ordine = useSelector((state) => state.user.ordine);
  const fattura = useSelector((state) => state.user.fattura);
  const idOrdine = useSelector((state) => state.user.idOrdine);
  const idFattura = useSelector((state) => state.user.idFattura);

  const creaPDF = () => {
    let doc = new jsPDF();
    doc.text(20, 20, `IL TUO ORDINE: ${ordine.numero}`);
    doc.text(20, 30, `IN STATO: ${ordine.statoOrdine}`);
    doc.text(20, 40, `EFFETTUATO DA: ${ordine.azienda.nomeAzienda}`);
    doc.text(20, 50, `SARA' CONSEGNATO AL TUO INDIRIZZO: ${ordine.user.indirizzo}`);
    doc.text(20, 60, ` IN DATA: ${ordine.dataConsegna}`);
    doc.text(20, 70, `PREZZO TOTALE FATTURA: ${fattura.importoTotale}`);
    doc.setFont("verdana", "italic");
    doc.setFontSize(7);
    doc.text(
      20,
      80,

      "Operazione senza applicazione dell’IVA, effettuata ai sensi dell’articolo 1, commi da 54 a 89, l. n. 190 del 2014 così come modificato dalla l. n. 208 del 2015 e dalla l. n. 145 del 2018”",
      { maxWidth: 170 }
    );

    doc.save(`Fattura${idFattura}.pdf`);
  };

  useEffect(() => {
    dispatch(getOrdine(idOrdine, token));
    dispatch(trovaIdFattura(token, idOrdine));
    dispatch(() => getFattura(idFattura, token));
  }, []);

  return (
    <>
      <Button
        className="my-4 button"
        onClick={() => {
          creaPDF();
        }}
      >
        Scarica la fattura
      </Button>
    </>
  );
}

export default Fattura;
