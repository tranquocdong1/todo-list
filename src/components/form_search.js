import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function FormSearch(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inputtext, setInputText] = useState("");

  function handlerChange(e) {
    setInputText(e.target.value);
  }

  function handlerSaveChange() {
    props.addTodo(inputtext);
    handleClose();
  }

  return (
    <form className="row">
      <div className="col-8">
        <input type="text" className="form-control" placeholder="search ... " />
      </div>
      <div className="col-4">
        <button onClick={handleShow} type="button" className="btn btn-primary">
          Create
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              onChange={handlerChange}
              value={inputtext}
              type="text"
              className="form-control"
              placeholder="Todo name"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handlerSaveChange}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </form>
  );
}

export default FormSearch;
