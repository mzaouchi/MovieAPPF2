import { Rating } from "@mui/material";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddMovie=({handleAdd})=>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle] = useState('')
    const [descriptionA,setDescriptionA] = useState('')
    const [posterA,setPosterA] = useState('')
    const [ratingA,setRatingA] = useState(0)



    return(
        <div className="modalL">
            <Button variant="outline-success" onClick={handleShow}>
                +
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add a new movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" onChange={(e)=> setTitle(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter description" onChange={(e)=> setDescriptionA(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Picture</Form.Label>
                            <Form.Control type="text" placeholder="Enter picture" onChange={(e)=> setPosterA(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Rating</Form.Label>
                            <br/>
                            <Rating onChange={(e)=> setRatingA(e.target.value)}/>
                        </Form.Group>
                        
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{handleAdd({title, description : descriptionA, posterURL : posterA, rating : ratingA, id : Math.random()});handleClose()}}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default AddMovie