import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import earthImg from "../images/earth.jpeg";
import jupiterImg from "../images/jupiter.jpeg";
import marsImg from "../images/mars.jpeg";
import mercuryImg from "../images/mercury.jpeg";
import saturnImg from "../images/saturn.jpeg";
import venusImg from "../images/venus.jpeg";
import Planet from "./Planet";
import noImg from "../images/noimg.jpg";

const planetImage = {
  earth: earthImg,
  jupiter: jupiterImg,
  mars: marsImg,
  mercury: mercuryImg,
  saturn: saturnImg,
  venus: venusImg,
};

function Header() {
  const [planet, setPlanet] = useState([]);
  const [input, setInput] = useState("");

  const storePlanet = (event) => {
    event.preventDefault();

    var nameArr = input.split(",");
    setPlanet(nameArr);

    setInput("");
  };

  // Planet Image
  const planetImg = (singlePlanet) => {
    const lowerCasePlanet = singlePlanet.toLowerCase();
    return planetImage[lowerCasePlanet.replace(/\s/g, "")] || noImg;
  };

  // Drag and Drop...
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(planet);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPlanet(items);
  }

  return (
    <header className="container mx-auto w-1/3" download>
      <form className="mt-5">
        <label>
          Planet:
          <input
            className="border border-gray-300 py-1 px-4 ml-1 rounded"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
            name="name"
            placeholder=" Type a planet..."
          />
        </label>
        <input
          className="border border-indigo-600 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 ml-1 rounded"
          onClick={storePlanet}
          type="submit"
          value="Generate"
        />
      </form>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {planet.map((singlePlanet, index) => (
                <Draggable
                  key={singlePlanet}
                  draggableId={singlePlanet}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Planet
                        singlePlanet={singlePlanet}
                        singleImg={planetImg(singlePlanet)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <button className="my-5" type="submit">
        <a
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="#"
          download="page.html"
        >
          Download
        </a>
      </button>
    </header>
  );
}

export default Header;
