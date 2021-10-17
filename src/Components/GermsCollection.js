import React from "react";
import Header from "./Header";
import Germs from "./Germs";
import PropTypes, { string } from "prop-types";

import { useStateValue } from "../contexts/StateProvider";

function GermsCollection() {
  const [{ selectedGerms }] = useStateValue();

  return (
    <div>
      <div>
        <Header />
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
