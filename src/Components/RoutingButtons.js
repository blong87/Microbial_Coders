//this function takes in a name and returns a firebase object of the germ
import { getName } from "./firebaseUtils";
import PersonTracker from "./PersonTracker";
import { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Image } from "react-bootstrap";

//Long's code
import { useStateValue } from "../contexts/StateProvider";

// -props.button- is the name of the current germ button. -props.updateGerm- is a function to update the germ in the parent
const RoutingButton = (props) => {
  const { buttonNameArray, updateArray } = useContext(PersonTracker);

  const [{ selectedGerms }, dispatch] = useStateValue();
  // console.log("SelectedGerm is ", selectedGerms);

  // console.log("initial props: ", props)
  const [selectedGerm, setSelectedGerm] = useState([
    {
      name: "Homepage 0000",
      image:
        "https://images-ext-1.discordapp.net/external/i9Sm7SJlP_Cud2bLMpml0JfaX7QfZi86JvG43TC6hU8/https/www.verywellhealth.com/thmb/-jD_krAWs3AEusH0FN_Mpm3pB3I%3D/2823x2117/smart/filters%3Ano_upscale%28%29/microphotograph-of-example-of-staining-bacteria-using-gram-method--at-x1250-magnification-173288072-ab648ac296f846faaa075a7101f06024.jpg?width=1248&height=936",
      buttonList: ["Gram Positive 0000", "Gram Negative 0000"],
    },
  ]);

  //cut the identifier off of the name so that it can be displayed properly
  let modifiedName = props.button.slice(0, -4);

  let image = props.image;
  const addToSelection = (selectedGermName) => {
    dispatch({
      type: "ADD_TO_SELECTION",
      germ: {
        name: selectedGermName.slice(0, selectedGermName.length - 5),
        image: props.image,
      },
    });
  };

  // console.log("My selected Germs are: ",selectedGerm);
  try {
    //if clicked, load the new identifier name into the update function passed into this component. Passing anything to update will launch a rerender
    return (
      <Card>
        <Button
          variant="secondary"
          onClick={async () => {
            //gets the particular germNode object based upon the name of the node
            let fullGerm = await getName(props.button);

            //if the array of buttons exists in the current loaded germNode, update the parent with a new node to the array
            if (fullGerm.buttonList) {
              //update the array with the new germ node if clicked
              updateArray([...buttonNameArray, fullGerm]);
              console.log("The fullGerm name is: ", fullGerm.name);
              {
                addToSelection(fullGerm.name);
              }

              // console.log("The fullGerm is: ", fullGerm)

              // console.log("My first Germ is: ", selectedGerm )

              setSelectedGerm([...selectedGerm, fullGerm]);
              // console.log("My selected Germs are: ", selectedGerm);
            } else {
              //otherwise, do nothing. In the future, add styling, take up the whole page with the answer, etc. Up to Robert!
              return undefined;
            }
          }}
        >
          {modifiedName}{" "}
        </Button>

        {/* Display the image on HomePage(Question Page) */}
        <Image src={image} className="card-img img" />
      </Card>
    );
  } catch (Exception) {
    console.log(Exception);
  }
};

export default RoutingButton;
