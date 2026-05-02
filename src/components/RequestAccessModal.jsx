import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import './RequestAccessModal.css'

export default function RequestAccessModal({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title className="modal-title-small">
                    Request Data Access
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form className="small-form">

                    {/* Personal Info */}
                    <h6 className="section-title">Personal Info</h6>
                    <Row>
                        <Col>
                            <Form.Control placeholder="First Name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last Name" />
                        </Col>
                    </Row>

                    <Form.Control className="mt-2" placeholder="Email" />
                    <Form.Control className="mt-2" placeholder="Organization" />
                    <Form.Control className="mt-2" placeholder="Role" />

                    {/* Research Details */}
                    <h6 className="section-title mt-3">Research Details</h6>
                    <Form.Control
                        as="textarea"
                        rows={2}
                        placeholder="About you / your team"
                        className="mt-1"
                    />

                    <Form.Control
                        as="textarea"
                        rows={2}
                        placeholder="Purpose"
                        className="mt-2"
                    />

                    <Form.Select className="mt-2">
                        <option>Intended Use</option>
                        <option>Academic Research</option>
                        <option>Government Policy</option>
                        <option>NGO / Conservation</option>
                        <option>Commercial Study</option>
                    </Form.Select>

                    {/* Data Request */}
                    <h6 className="section-title mt-3">Data Request</h6>

                    <div className="checkbox-group">

                        <label className="custom-check">
                            <input type="checkbox" />
                            <span className="box"></span>
                            Elephant Detection Reports
                        </label>

                        <label className="custom-check">
                            <input type="checkbox" />
                            <span className="box"></span>
                            Odour Signature Reports
                        </label>

                        <label className="custom-check">
                            <input type="checkbox" />
                            <span className="box"></span>
                            Sensor Raw Data
                        </label>

                        <label className="custom-check">
                            <input type="checkbox" />
                            <span className="box"></span>
                            Environmental Data
                        </label>

                    </div>



                    {/* Agreement */}
                    <h6 className="section-title mt-3">Agreement</h6>

                    <Form.Check
                        type="checkbox"
                        label="I agree to Terms & Conditions"
                    />

                    <Form.Check
                        type="checkbox"
                        label="I agree to Data Usage Policy"
                    />

                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="success">
                    Submit Request
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
