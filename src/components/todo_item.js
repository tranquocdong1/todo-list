import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
function TodoItem(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [input, setInput] = useState("");
  function handleShowInput() {
    setInput(props.name);
  }

  function handlerChange(e) {
    setInput(e.target.value);
  }
  return (
    <div className="row item">
      <div className="col-10 item-title">{props.name}</div>
      <div className="col-2 item-group-button">
        <button
          onClick={() => {
            props.handleDelete(props.index);
          }}
          class="btn btn-outline-danger"
        >
          <i class="fa fa-trash"></i>
        </button>
        <button
          onClick={() => {
            handleShow();
            handleShowInput();
          }}
          class="btn btn-outline-success"
        >
          <i class="fa fa-edit"></i>
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            onChange={handlerChange}
            value={input}
            type="text"
            className="form-control"
            placeholder="Todo name"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              props.editTodo(input, props.index);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TodoItem;
