import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import RoutingButton from "./RoutingButtons";

export default function UserProfile() {
  const { currentUser } = useAuth();
  // const [history, setHistory] = useState([]);
  // let array = [];
  // array = props.history;
  // console.log("the germs are" , props.history);

  return (
    <div>
      <h1>Hello </h1>

      {/* <h1>{array}</h1> */}
    </div>
  );
}
