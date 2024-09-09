import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import MyButton from "../ui/Button/Button";
import "./modal.css";
import { useSelector } from "react-redux";

function ModalCard(props) {
  const offer = useSelector((state) => state.selectedOffer);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title>Offer Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-card-header d-flex p-3">
          <img src={offer?.icon} alt="" width="120px" />
          <div className="modal-card-header-content mx-3">
            <h3>{offer?.name}</h3>
            <MyButton text={`+ ${offer?.amount}`} type="btnUIOne" />
          </div>
        </div>

        <div className="modal-card-details p-3 my-2">
          <h4>Offer Details</h4>
          <p>{offer?.short_description}</p>
        </div>

        <div className="modal-card-instruction p-3">
          <h4>Instructions</h4>
          <ul className="modal-card-instruction-list mt-3">
            {offer?.instructions_array?.map(
              (instruction, index) =>
                instruction && (
                  <div className="d-flex align-items-start" key={index}>
                    <span className="instruction-number me-2">{index + 1}</span>
                    <li className="mb-3">{instruction}</li>
                  </div>
                )
            )}
          </ul>
        </div>
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-center">
        <a href={offer?.url} target="_blank" rel="noopener noreferrer">
          <Button variant="success">Start earning Now!</Button>
        </a>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCard;
