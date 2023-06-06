import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import logo from "../assets/img/Logo principale - nero.png";

function Fattura() {
  const ordine = useSelector((state) => state.user.ordine);
  const fattura = useSelector((state) => state.user.fattura);
  const idFattura = useSelector((state) => state.user.idFattura);

  const creaPDF = () => {
    let doc = new jsPDF();
    const logoSito = `${logo}`;

    /* PARTE SOPRA */
    doc.addImage(logoSito, "png", 15, 10, 20, 20);
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(7);
    doc.text(150, 15, `${ordine.azienda.nome}`);
    doc.setFont("Helvetica", "normal");
    doc.text(150, 20, `Via Italia, 85/P - 25525 - ${ordine.azienda.città}`);
    doc.text(150, 25, `P.iva IT${ordine.azienda.partitaIva} - C.F. ${ordine.azienda.codiceFiscale}`);
    doc.text(150, 30, `FATTURA nr. ${ordine.id}/${ordine.dataOrdine.slice(0, 4)} del ${ordine.dataOrdine}`);
    doc.line(20, 40, 190, 40, "S");

    /* PARTE CENTRALE SOPRA */
    doc.setFont("Helvetica", "bold");
    doc.text(20, 45, `P.IVA IT${ordine.azienda.partitaIva}`);
    doc.text(20, 50, `C.F. ${ordine.azienda.codiceFiscale}`);
    doc.text(110, 45, `DESTINATARIO`);
    doc.setFont("Helvetica", "normal");
    doc.text(110, 50, `${ordine.user.firstname} ${ordine.user.lastname}`);
    doc.text(110, 55, `${ordine.user.indirizzo}`);

    /* PARTE CENTRALE ARTICOLI */
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(6);
    doc.line(20, 70, 190, 70, "S");
    doc.line(20, 70, 20, 75, "S");
    doc.line(30, 70, 30, 75, "S");
    doc.setFont("Helvetica", "bold");
    doc.text(21, 73, "CODICE");
    doc.text(35, 73, "DESCRIZIONE");
    doc.text(160, 73, "PREZZO");
    doc.setFont("Helvetica", "normal");
    doc.line(155, 70, 155, 75, "S");
    doc.line(190, 70, 190, 75, "S");
    doc.line(20, 75, 190, 75, "S");
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(7);
    ordine.articoli.map(
      (e, i) => (
        doc.line(20, 85 + i * 10, 190, 85 + i * 10, "S"),
        doc.line(20, 75 + i * 10, 20, 85 + i * 10, "S"),
        doc.line(30, 75 + i * 10, 30, 85 + i * 10, "S"),
        doc.line(155, 75 + i * 10, 155, 85 + i * 10, "S"),
        doc.line(190, 75 + i * 10, 190, 85 + i * 10, "S"),
        doc.text(24, 80 + i * 10, `P${e.id}`),
        doc.text(35, 79 + i * 10, `${e.nome}`),
        doc.text(35, 83 + i * 10, `${e.marca}`),
        doc.text(160, 80 + i * 10, `€ ${e.prezzo}`)
      )
    );

    /* PARTE SOTTO */
    doc.setFont("Helvetica", "normal");
    doc.line(20, 230, 190, 230, "S");
    doc.line(110, 230, 110, 250, "S");
    doc.text(20, 235, "MODALITA' DI PAGAMENTO");
    doc.setFont("Helvetica", "bold");
    doc.text(20, 240, "Carta di credito");
    doc.text(120, 240, `${ordine.dataConsegna}`);
    doc.setFont("Helvetica", "normal");
    doc.text(120, 235, "CONSEGNA");
    doc.setFont("Helvetica", "italic");
    doc.setFontSize(10);
    doc.line(20, 250, 190, 250, "S");
    doc.line(110, 250, 110, 280, "S");
    doc.text(20, 255, "RIEPILOGO IVA");
    doc.text(
      20,
      260,

      "Operazione senza applicazione dell’IVA, effettuata ai sensi dell’articolo 1, commi da 54 a 89, l. n. 190 del 2014 così come modificato dalla l. n. 208 del 2015 e dalla l. n. 145 del 2018”",
      { maxWidth: 90 }
    );
    doc.line(20, 280, 190, 280, "S");
    doc.setFont("Helvetica", "normal");
    doc.text(150, 255, `Importo totale € ${fattura.importoTotale.toFixed(2)}`);
    doc.text(150, 260, `Prezzo consegna € ${ordine.prezzoConsegna}`);
    doc.setFontSize(20);
    doc.setFont("Helvetica", "bold");
    doc.text(150, 270, `€ ${fattura.importoTotale.toFixed(2)}`);
    doc.setFontSize(6);
    doc.text(170, 290, `${ordine.azienda.nome}`);
    doc.text(20, 290, `FATTURA nr. ${ordine.id}/${ordine.dataOrdine.slice(0, 4)} del ${ordine.dataOrdine}`);
    doc.save(`Fattura${idFattura}.pdf`);
  };

  useEffect(() => {}, []);

  return (
    <>
      {ordine.statoOrdine === "ANNULLATO" ? (
        <Button className="button" disabled>
          Scarica la fattura
        </Button>
      ) : (
        <Button
          className="button"
          onClick={() => {
            creaPDF();
          }}
        >
          Scarica la fattura
        </Button>
      )}
    </>
  );
}

export default Fattura;
