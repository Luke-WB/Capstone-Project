import { Modal } from "react-bootstrap";
import { BsFillCheckCircleFill } from "react-icons/bs";

function ModaleOrdine(props) {
  return (
    <Modal
      size="sm"
      show={props.show}
      onHide={props.handleClose}
      aria-labelledby="example-modal-sizes-title-sm"
      centered
    >
      <div className="modale">
        <Modal.Header closeButton className="modaleHeader">
          <Modal.Title id="example-modal-sizes-title-sm"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center ">
          <BsFillCheckCircleFill className="check mb-5" />
          <div className="my-5 text-center fw-bold">IL TUO ORDINE E' STATO EFFETTUATO CORRETTAMENTE!</div>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default ModaleOrdine;
