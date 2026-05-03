import { Modal, Button, Form, Row, Col, Spinner } from 'react-bootstrap'
import { useState } from 'react'
import './RequestAccessModal.css'
import { createExternalUserRequest } from "../api/externalUserApi";

export default function RequestAccessModal({ show, handleClose }) {

    const initialState = {
        firstname: '',
        lastname: '',
        email: '',
        organization: '',
        role: '',
        about: '',
        purpose: '',
        intendedUse: '',
        reportTypes: [],
        terms: false,
        policy: false
    }

    const [formData, setFormData] = useState(initialState)
    const [validated, setValidated] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        if (type === 'checkbox' && name === 'reportTypes') {
            let updated = [...formData.reportTypes]

            if (checked) {
                updated.push(value)
            } else {
                updated = updated.filter(item => item !== value)
            }

            setFormData({ ...formData, reportTypes: updated })
        } else if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked })
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")
        setSuccess(false)

        if (
            e.currentTarget.checkValidity() === false ||
            formData.reportTypes.length === 0 ||
            !formData.terms ||
            !formData.policy
        ) {
            setValidated(true)
            return
        }

        try {
            setLoading(true)

            const payload = {
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                organization: formData.organization,
                role: formData.role,
                about: formData.about,
                purpose: formData.purpose,
                intendentuse: formData.intendedUse,
                reportTypes: formData.reportTypes.join(",")
            }

            const response = await createExternalUserRequest(payload)

            if (response?.status === "success") {
                setSuccess(true)
            } else {
                setError(response?.message || "Something went wrong")
            }

        } catch (err) {
            setError(
                err?.response?.data?.message ||
                "Server error. Please try again later."
            )
        } finally {
            setLoading(false)
        }
    }

    const handleCloseAndReset = () => {
        setFormData(initialState)
        setValidated(false)
        setSuccess(false)
        setError("")
        setLoading(false)
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleCloseAndReset} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title className="modal-title-small">
                    Request Data Access
                </Modal.Title>
            </Modal.Header>

            {/* ✅ SUCCESS VIEW */}
            {success ? (
                <Modal.Body className="text-center py-4">
                    <h5 className="text-success mb-2">
                        Request Submitted
                    </h5>

                    <p className="small text-muted">
                        Your request has been sent successfully.
                        Our team will review it and contact you via email.
                    </p>

                    <Button
                        variant="success"
                        size="sm"
                        onClick={handleCloseAndReset}
                    >
                        Close
                    </Button>
                </Modal.Body>
            ) : (
                <Form noValidate validated={validated} onSubmit={handleSubmit}>

                    <Modal.Body className="small-form">

                        {/* ❌ ERROR MESSAGE */}
                        {error && (
                            <div className="alert alert-danger py-2 small">
                                {error}
                            </div>
                        )}

                        {/* Personal Info */}
                        <h6 className="section-title">Personal Info</h6>

                        <Row>
                            <Col>
                                <Form.Control
                                    name="firstname"
                                    placeholder="First Name"
                                    required
                                    onChange={handleChange}
                                />
                            </Col>

                            <Col>
                                <Form.Control
                                    name="lastname"
                                    placeholder="Last Name"
                                    required
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>

                        <Form.Control
                            className="mt-2"
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            onChange={handleChange}
                        />

                        <Form.Control
                            className="mt-2"
                            name="organization"
                            placeholder="Organization"
                            required
                            onChange={handleChange}
                        />

                        <Form.Control
                            className="mt-2"
                            name="role"
                            placeholder="Role"
                            required
                            onChange={handleChange}
                        />

                        {/* Research Details */}
                        <h6 className="section-title mt-3">
                            Research Details
                        </h6>

                        <Form.Control
                            as="textarea"
                            rows={2}
                            name="about"
                            placeholder="About you / your team"
                            required
                            onChange={handleChange}
                        />

                        <Form.Control
                            as="textarea"
                            rows={2}
                            name="purpose"
                            placeholder="Purpose"
                            className="mt-2"
                            required
                            onChange={handleChange}
                        />

                        <Form.Select
                            className="mt-2"
                            name="intendedUse"
                            required
                            onChange={handleChange}
                        >
                            <option value="">Select Intended Use</option>
                            <option>Academic Research</option>
                            <option>Government Policy</option>
                            <option>NGO / Conservation</option>
                            <option>Commercial Study</option>
                        </Form.Select>

                        {/* Data Request */}
                        <h6 className="section-title mt-3">
                            Data Request
                        </h6>

                        <div className="checkbox-group">
                            {[
                                "ELEPHANT_REPORT",
                                "ODOUR_REPORT",
                                "SENSOR_DATA",
                                "ENVIRONMENTAL_DATA"
                            ].map((type) => (
                                <label key={type} className="custom-check">
                                    <input
                                        type="checkbox"
                                        name="reportTypes"
                                        value={type}
                                        onChange={handleChange}
                                    />
                                    <span className="box"></span>
                                    {type.replaceAll("_", " ")}
                                </label>
                            ))}
                        </div>

                        {validated && formData.reportTypes.length === 0 && (
                            <div className="text-danger small mt-1">
                                Select at least one report type
                            </div>
                        )}

                        {/* Agreement */}
                        <h6 className="section-title mt-3">
                            Agreement
                        </h6>

                        <Form.Check
                            type="checkbox"
                            name="terms"
                            label="I agree to Terms & Conditions"
                            required
                            onChange={handleChange}
                        />

                        <Form.Check
                            type="checkbox"
                            name="policy"
                            label="I agree to Data Usage Policy"
                            required
                            onChange={handleChange}
                        />

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="light" onClick={handleCloseAndReset}>
                            Cancel
                        </Button>

                        <Button variant="success" type="submit" disabled={loading}>
                            {loading ? (
                                <>
                                    <Spinner size="sm" className="me-2" />
                                    Sending...
                                </>
                            ) : (
                                "Submit Request"
                            )}
                        </Button>
                    </Modal.Footer>

                </Form>
            )}
        </Modal>
    )
}
