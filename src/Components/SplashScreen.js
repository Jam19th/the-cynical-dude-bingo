import React from 'react';
import '../SplashScreen.css';
import { Modal, Button } from 'react-bootstrap';

const SplashScreen = ({ show, onClose }) => (
    <Modal show={show} onHide={onClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>Bingo!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Congratulations, you won!
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
);


export default SplashScreen;
