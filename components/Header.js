import React, { useState } from 'react';
import earthImg from '../images/earth.jpeg';
import jupiterImg from '../images/jupiter.jpeg';
import marsImg from '../images/mars.jpeg';
import mercuryImg from '../images/mercury.jpeg';
import saturnImg from '../images/saturn.jpeg';
import venusImg from '../images/venus.jpeg';
import Planet from './Planet';
import noImg from '../images/noimg.jpg';

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

const planetImage = {
    earth: earthImg,
    jupiter: jupiterImg,
    mars: marsImg,
    mercury: mercuryImg,
    saturn: saturnImg,
    venus: venusImg,
    noImg: noImg
}

function Header() {

    const [planet, setPlanet] = useState([]);
    const [input, setInput] = useState("");

    console.log(planet);

    const aOk = (event) =>{
        event.preventDefault();
        // setPlanet(input)

        var nameArr = input.split(',');
        setPlanet(nameArr);

        setInput("");
    }

    // again againTry
    const againTry = (singlePlanet) => {
        const lowerCasePlanet = singlePlanet.toLowerCase();
        return planetImage [lowerCasePlanet.replace(/\s/g, '')]
    }

    function handleOnDragEnd (result) {
        // console.log(result);
        if (!result.destination) return;
        const items = Array.from(planet);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setPlanet(items);
    }
    
    return (
        <header className="container mx-auto w-1/3" download>
            <form>
                <label>
                    Planet:
                    <input 
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    type="text" 
                    name="name" 
                    placeholder=" Type a planet..."/>
                </label>
                <input onClick={aOk} type="submit" value="Generate" />
            </form>
            {/* {planet.map(singlePlanet => <h1 key={singlePlanet}>{singlePlanet}</h1>)} */}

            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters">
                    {(provided)=>(
                <div {...provided.droppableProps} ref={provided.innerRef}>
                    {planet.map((singlePlanet, index) => <Draggable key={singlePlanet} draggableId={singlePlanet} index={index}>
                        {(provided)=>(
                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <Planet singlePlanet={singlePlanet} singleImg={againTry(singlePlanet)}/>
                            </div>
                        )}
                        </Draggable>
                        )
                        }
                      {provided.placeholder}  
                </div>
                )}
                
                </Droppable>
            </DragDropContext>

            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="path/to/file.ext" download>Download this page</button> */}

            <button className="mt-5" type="submit">
                <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="#" download="page.html">Download</a>
            </button>
        </header>
    )
}

export default Header
