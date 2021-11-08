import React, { useState } from "react";
import Germs from "./Germs";
//import xtype from "xtypejs";

function Experiments({ data, id, count, listExperiments }) {
  //   console.log("Experiments are", experiment);
  //   console.log("Type of listExperiments in Experiment is", xtype(experiment));
  //   const result = Object.keys(experiment).map((key) => experiment[key]);
  //   console.log("data is ", data);
  //   console.log("Type of data in Experiment is", xtype(data));
  //   console.log("data germs is ", data.germs);
  //   console.log("listExperiments is ", listExperiments);
  //   console.log("data type of id is ", typeof id);

  return (
    <div>
      <div>
        {/* <h3>Experiment {listExperiments.length}</h3> */}
        <h3 class="text-center">Experiment </h3>

        {/* This shows id for each experiment / optional to display*/}
        {id}

        {data.germs.map((item) => (
          <Germs name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default Experiments;
