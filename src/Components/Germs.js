import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStateValue } from "../contexts/StateProvider";

function Germs({ name, image }) {
  // const [{ selectedGerms, user }] = useStateValue();

  console.log("type of name is:", typeof name);

  return (
    <div class="text-center">
      <div>{/* <h1>Hello, {user.email}</h1> */}</div>

      <Card
        style={{
          color: "white",
          background: "gray",
          width: "10rem",
          marginBottom: "1rem",
        }}
      >
        {/* <Button variant="secondary" disabled> */}
        <div class="text-center">{name}</div>

        {/* <Image src={image} className="card-img img" /> */}
        {/* </Button> */}
      </Card>
    </div>
  );
}

export default Germs;
