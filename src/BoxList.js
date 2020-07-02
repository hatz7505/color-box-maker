import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  //function create list of box components
  const renderBoxes = () => {
    return boxes.map((box) => (
      <div>
        <Box color={box.color} height={box.height} width={box.width} />
      </div>
    ));
  }

  // function to add a new box object to state list
  const addBox = (newBox) => {
    let newestBox = { ...newBox, id: uuidv4() };
    setBoxes((boxes) =>
      [...boxes, newestBox]
    );
  }
  return(
    <div>
      <NewBoxForm addBox={addBox}/>
      {renderBoxes()}
    </div>
  )
}

export default BoxList;