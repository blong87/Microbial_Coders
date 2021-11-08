import React, { useState, useEffect } from "react";
import Header from "./Header";
import Germs from "./Germs";
import { db } from "../firebase";
import { useStateValue } from "../contexts/StateProvider";
import Experiments from "./Experiments";
//import xtype from "xtypejs";

function ListExperiments() {
  const [{ selectedGerms, user }, dispatch] = useStateValue();

  //this state to store all the experiments of a user
  const [listExperiments, setListExperiments] = useState([]);

  // console.log("experiment lists is: ", listExperiments);
  // console.log("List of Experiments", listExperiments);

  //when this component loads, run below once
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("experiments")
        // .doc(experiment.uid)
        .onSnapshot((snapshot) =>
          setListExperiments(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
      // console.log("List of Experiments", listExperiments);
      // console.log("db: ", db.collection("Experiments").id);
    } else {
      setListExperiments([]);
    }
  }, []);

  // console.log("experiment lists is: ", listExperiments);
  // // console.log("experiment id is: ", listExperiments.data[0].id);

  // console.log("Type of listExperiments is ", xtype(listExperiments));
  // console.log("list length: ", listExperiments.length);

  return (
    <div>
      <div>
        <Header />
      </div>
      <h1>You have saved these experiments:</h1>
      {listExperiments.map((germ) => (
        <Experiments
          data={germ?.data}
          image={germ.image}
          id={germ.id}
          uid={user.uid}
          listExperiments={listExperiments}
        />
      ))}
      {/* <Experiments listExperiments={listExperiments} />) */}
      {/* {listExperiments.data.map((item) => (
        <div>{"name: " + item.name}</div>
      ))} */}
    </div>
  );
}

export default ListExperiments;
