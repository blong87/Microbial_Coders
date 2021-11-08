import React, { useState } from "react";
import Header from "./Header";
import Germs from "./Germs";
import PropTypes, { string } from "prop-types";
import { Link, useHistory } from "react-router-dom";

import { useStateValue } from "../contexts/StateProvider";
import { auth, db } from "../firebase";
import ListExperiments from "./ListExperiments";

function GermsCollection() {
  const history = useHistory();
  const [{ selectedGerms, user }, dispatch] = useStateValue();
  // const [{ experimentList, user }] = useStateValue();

  const [experiments, setExperiments] = useState([]);

  const saveCollection = async (e) => {
    await db.collection("users").doc(user?.uid).collection("experiments").add({
      germs: selectedGerms,
    });
    // selectedGerms([]);
    dispatch({
      type: "EMPTY_EXPERIMENTS",
    });
    history.push("/");
  };

  const showExperiments = async (e) => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("Experiments")
        .onSnapshot((snapshot) =>
          setExperiments(
            snapshot.docs.map((doc) => ({
              germArray: doc.germ,
            }))
          )
        );
    }
    history.push("/");
    <ListExperiments />;
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div class="d-flex flex-row-reverse ">
        <button
          type="button"
          class="btn btn-primary mb-6 mr-1"
          type="submit"
          onClick={saveCollection}
        >
          SAVE
        </button>
      </div>

      <h1>You selected these germs:</h1>

      {selectedGerms.map((germ) => (
        <Germs name={germ?.name} image={germ.image} />
      ))}
    </div>
  );
}
// GermsCollection.propTypes = {
//   name: PropTypes.string,
//   image: PropTypes.string,
// };
export default GermsCollection;
