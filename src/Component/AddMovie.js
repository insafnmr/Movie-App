import { Modal, Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const AddMovie = ({ handleAddMovie }) => {

    const [show, setShow] = useState(false);
    const [newMovie, setNewMovie] = useState({
        id: uuidv4(),
        title: "",
        description: "",
        posterURL: "",
        rate: 0
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const mySubmitHandler = (event) => {
        event.preventDefault();
        handleAddMovie(newMovie)
        setNewMovie({
            id: uuidv4(),
            title: "",
            description: "",
            posterURL: "",
            rate: ""
        })
        handleClose()
    }
    const handleChange = (e) => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value
        })
    }


    return (
        <>
            <button type="button" class="btn btn-outline-danger" onClick={handleShow}>Add new movie</button>
            <Modal style={{ backgroundColor: 'transparent' }} show={show} onHide={handleClose} animation={false} >
                <Modal.Header >
                    <Modal.Title> New Movie </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={mySubmitHandler}>
                        <Form.Control type="text" name="title" placeholder="Title" onChange={handleChange} required />
                        <Form.Control type="text" as="textarea" name="description" placeholder="Description" onChange={handleChange} required />
                        <Form.Control type="text" name="posterURL" placeholder="PosterURL" onChange={handleChange} required />
                        <Form.Control type="number" name="rate" placeholder="Rate" onChange={handleChange} required min={0} max={7}/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type='submit' onClick={mySubmitHandler}>Save Changes</Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default AddMovie;
