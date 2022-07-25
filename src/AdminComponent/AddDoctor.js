import React ,{useState}from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Adddoctor = (open) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
      if(!open) return null;
  return (
    <div> 
        <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add doctor</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Department :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Department name"
            autoFocus
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Type:</Form.Label>
          <Form.Control type="text" placeholder='type' />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default Adddoctor