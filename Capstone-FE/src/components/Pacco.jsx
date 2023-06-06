import { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getStatoOrdine } from "../redux/action";

function Pacco(props) {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const idUser = useSelector((state) => state.user.idUser);
  const idCarrello = useSelector((state) => state.user.idCarrello);

  return (
    <>
      {props.ordine.dataOrdine > props.ordine.dataConsegna || props.ordine.statoOrdine === "ANNULLATO" ? (
        <Button className="button mb-4" disabled>
          Traccia il mio pacco!
        </Button>
      ) : (
        <>
          <Button
            className="button mb-4"
            onClick={() => {
              dispatch(getStatoOrdine(token, idUser, idCarrello, props.ordine.numero));
              setOpen(!open);
            }}
          >
            Traccia il mio pacco!
          </Button>
          <Collapse in={open}>
            <div id="example-fade-text" className="text-center padre mb-5">
              {props.ordine.statoOrdine === "SPEDITO" ? (
                <>
                  <div className="text-center pacco">
                    <div className="q"></div>
                    <div className="ln"></div>
                    <div className="qn"></div>
                    <div className="ln"></div>
                    <div className="qn"></div>
                  </div>
                  <div className="figlios">
                    <p>
                      <span className="fw-bold">{props.ordine.statoOrdine}</span>
                    </p>
                    <p>{props.ordine.riepilogo}</p>
                  </div>
                </>
              ) : props.ordine.statoOrdine === "IN_CONSEGNA" ? (
                <>
                  <div className="text-center pacco">
                    <div className="q"></div>
                    <div className="l"></div>
                    <div className="q"></div>
                    <div className="ln"></div>
                    <div className="qn"></div>
                  </div>
                  <div className="figlioi">
                    <p>
                      <span className="fw-bold">IN {props.ordine.statoOrdine.slice(3)}</span>
                    </p>
                    <p>{props.ordine.riepilogo}</p>
                  </div>
                </>
              ) : props.ordine.statoOrdine === "CONSEGNATO" ? (
                <>
                  <div className="text-center pacco">
                    <div className="q"></div>
                    <div className="l"></div>
                    <div className="q"></div>
                    <div className="l"></div>
                    <div className="q"></div>
                  </div>
                  <div className="figlioc">
                    <p>
                      <span className="fw-bold">{props.ordine.statoOrdine}</span>
                    </p>
                    <p>{props.ordine.riepilogo}</p>
                  </div>
                </>
              ) : (
                <p></p>
              )}
            </div>
          </Collapse>
        </>
      )}
    </>
  );
}

export default Pacco;
