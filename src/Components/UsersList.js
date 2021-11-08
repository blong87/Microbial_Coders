import React, { useState, useEffect } from "react";
import Header from "./Header";
import { db } from "../firebase";
import { useStateValue } from "../contexts/StateProvider";

function UsersList() {
  const [{ selectedGerms, user }, dispatch] = useStateValue();

  const [usersList, setUsersList] = useState("");

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUsersList(
        snapshot.docs.map((doc) => ({
          id: doc.id,
        }))
      )
    );
    console.log("usersList is: ", typeof usersList);
  }, []);

  // useEffect(() => {
  //     if (user) {
  //       db.collection("users")
  //         .doc(user?.uid)
  //         .collection("experiments")
  //         // .doc(experiment.uid)
  //         .onSnapshot((snapshot) =>
  //           setListExperiments(
  //             snapshot.docs.map((doc) => ({
  //               id: doc.id,
  //               data: doc.data(),
  //             }))
  //           )
  //         );
  //       console.log("List of Experiments", listExperiments);
  //       console.log("db: ", db.collection("Experiments").id);
  //     } else {
  //       setListExperiments([]);
  //     }
  //   }, []);

  //   console.log(`Found ${snapshot.size} user(s).`);
  //   const docs = snapshot.docs;
  //   docs.forEach((docSnapshot) => {
  //     console.log(docSnapshot.id);
  //   });

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <h1 className="text-center">List of students</h1>
        {/* <button onClick={onClick}>Show All Student</button> */}
      </div>
      {/* {usersList.map((userList) => {})} */}
    </div>
  );
}

export default UsersList;

//   useEffect(() => {
//     if (user) {
//       db.collection("users")
//         // .doc(user?.uid)
//         .onSnapshot((snapshot) =>
//           setUsersList(
//             snapshot.docs.map((doc) => ({
//               id: doc.id,
//               data: doc.data(),
//             }))
//           )
//         );
//       // console.log("List of Experiments", listExperiments);
//       // console.log("db: ", db.collection("Experiments").id);
//     } else {
//       setUsersList([]);
//     }
//   }, []);

//   console.log("userList is: ", usersList);
//   console.log("Type of userList is", typeof usersList);
