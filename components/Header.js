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
        return planetImage [singlePlanet]
    }

    // testing area
    // const withSwitch = (singlePlanet) =>{
    //     switch(singlePlanet){
    //         case "earth": 
    //             return planetImage.earth;
    //         case "jupiter":
    //             return planetImage.jupiter;
    //         case "mars":
    //             return planetImage.mars;
    //         case "mercury":
    //             return planetImage.mercury;
    //         case "saturn":
    //             return planetImage.saturn;
    //         case "venus":
    //             return planetImage.venus;
    //             default: return
    //     }        
    // }

    // const findMatched = (singlePlanet) =>{
    //     if(singlePlanet==="earth"){
    //         return planetImage.earth
    //     } 
    //     if(singlePlanet==="jupiter"){
    //         return planetImage.jupiter
    //     } 
    //     if(singlePlanet==="mars"){
    //         return planetImage.mars
    //     } 
    //     if(singlePlanet==="mercury"){
    //         return planetImage.mercury
    //     } 
    //     if(singlePlanet==="saturn"){
    //         return planetImage.saturn
    //     } 
    //     if(singlePlanet==="venus"){
    //         return planetImage.venus
    //     }
    //     else {
    //         return planetImage.noImg
    //     }
    // }

    function handleOnDragEnd (result) {
        // console.log(result);
        if (!result.destination) return;
        const items = Array.from(planet);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setPlanet(items);
    }

    return (
        <header className="container mx-auto w-1/3">
            <form>
                <label>
                    Name:
                    <input 
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    type="text" 
                    name="name" 
                    placeholder="Type a planet..."/>
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

        </header>
    )
}

export default Header
