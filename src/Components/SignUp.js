import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"


export default function SignUp() {

    const schoolRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await signup(schoolRef.current.value, emailRef.current.value, passwordRef.current.value)
            history.push("/dashboard")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="school">
                                <Form.Label>School</Form.Label>
                                <Form.Control type="text" ref={schoolRef} required> </Form.Control>
                            </Form.Group>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Button className="btn btn-secondary w-100" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Have an account already? Log In
                </div>
            </div>
        </Container>
    )
}