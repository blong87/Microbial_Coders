import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Germs({ name, image }) {
  return (
    <Card style={{ color: "#00005c", width: "15rem", marginBottom: "30px" }}>
      <Button variant="secondary" disabled>
        <Card.Title>{name}</Card.Title>

        <Image src={image} className="card-img img" />
      </Button>
    </Card>
  );
}

export default Germs;
