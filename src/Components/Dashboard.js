import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Header";
import { auth } from "../firebase";
import { useStateValue } from "../contexts/StateProvider";

export default function Dashboard() {
  // currentUser = user;
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  // const [{ user, dispatch }] = useStateValue();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Admin Controls</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-secondary w-100 mt-3">
            Update Profile
          </Link>
          <Link to="/add-form" className="btn btn-secondary w-100 mt-3">
            Add Form
          </Link>
          <Link to="/update-form" className="btn btn-secondary w-100 mt-3">
            Update Form
          </Link>
          <Link to="/delete-form" className="btn btn-secondary w-100 mt-3">
            Delete Form
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
