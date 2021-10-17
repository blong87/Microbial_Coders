//questionpage takes in an array of names, creates button objects from it. Will pass names given to it to the parent

import React from "react";
import PropTypes, { string } from "prop-types";
import RoutingButtons from "./RoutingButtons";
import { useState } from "react";
import { useContext } from "react";
import PersonTracker from "./PersonTracker";
import { useEffect } from "react";
import { getName } from "./firebaseUtils";

//need some styling here to create the look we are going for

//takes a parameter, an object defined below with the name of the germ, a picture and the list of germ names.
const QuestionPage = (props) => {
  //array of button objects from the global context.
  const { buttonNameArray, updateArray } = useContext(PersonTracker);

  //the array of names stored here, gets the most recent name from context
  const arrays = buttonNameArray[buttonNameArray.length - 1].buttonList;

  //current name of the button
  const currentName = buttonNameArray[buttonNameArray.length - 1].name.slice(
    0,
    -4
  );

  // const selectedName = buttonNameArray[buttonNameArray.length - 1].name.slice(
  //   0,
  //   -4
  // );
  //current image of the button
  const image = buttonNameArray[buttonNameArray.length - 1].image;

  //state of image array
  const [images, setImages] = useState([]);

  //gets the images of each button attached to the page

  async function getImages() {
    let tempImage = [];

    for (let pic of arrays) {
      //gets the object representation of the button
      let obj = await getName(pic);

      //if the return from getName is an object (returns a string if not)
      if (obj !== string) {
        tempImage.push(obj.image);
      } else {
        tempImage.push("nothing");
      }
    }
    //updates the image state elementwise

    setImages([...tempImage]);
  }
  useEffect(() => {
    getImages().then((r) => console.log(images));
  }, [buttonNameArray]);

  //for every name in the array, create a div containing a button that passes in the name of the node.
  return (
    <div className="center-bottom">
      <p className={"p mt-5"}>
        {" "}
        Click on the navigation buttons below to identify bacteria.
      </p>
      <hr />
      <h1 className={"h1"}>{currentName}</h1>
      <div className="text-center mt-5">
        <img
          src={image}
          className="mx-auto"
          style={{ maxWidth: "300px", maxHeight: "300px" }}
        />
      </div>
      <div className="flex">
        {" "}
        {arrays.map((list, index) => (
          <div className="pages" key={index}>
            <RoutingButtons button={list} image={images[index]}>
              {" "}
            </RoutingButtons>
          </div>
        ))}
      </div>
    </div>
  );
};
//this is what the object passed into props should look like by default
QuestionPage.defaultProps = {
  name: "Homepage 0000",
  image:
    "https://images-ext-1.discordapp.net/external/i9Sm7SJlP_Cud2bLMpml0JfaX7QfZi86JvG43TC6hU8/https/www.verywellhealth.com/thmb/-jD_krAWs3AEusH0FN_Mpm3pB3I%3D/2823x2117/smart/filters%3Ano_upscale%28%29/microphotograph-of-example-of-staining-bacteria-using-gram-method--at-x1250-magnification-173288072-ab648ac296f846faaa075a7101f06024.jpg?width=1248&height=936",
  buttonList: ["Gram Positive 0000", "Gram Negative 0000"],
};

//this is what the object passed into props should look like in general (essentially creating a class definition here for the object i want to pass in)
QuestionPage.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  buttonList: PropTypes.arrayOf(PropTypes.string),
};

export default QuestionPage;
