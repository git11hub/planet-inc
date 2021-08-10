import React, { useState } from 'react';
import earthImg from '../images/earth.jpeg';
import jupiterImg from '../images/jupiter.jpeg';
import marsImg from '../images/mars.jpeg';
import mercuryImg from '../images/mercury.jpeg';
import saturnImg from '../images/saturn.jpeg';
import venusImg from '../images/venus.jpeg';
import Planet from './Planet';

const planetImage = {
    earth: earthImg,
    jupiter: jupiterImg,
    mars: marsImg,
    mercury: mercuryImg,
    saturn: saturnImg,
    venus: venusImg,
}

// const findMatched = () =>{
//         if(singlePlanet==="earth"){
//             return planetImage.earth
//         } 
//         if(singlePlanet==="jupiter"){
//             return planetImage.jupiter
//         } 
//         if(singlePlanet==="mars"){
//             return planetImage.mars
//         } 
//         if(singlePlanet==="mercury"){
//             return planetImage.mercury
//         } 
//         if(singlePlanet==="saturn"){
//             return planetImage.saturn
//         } 
//         if(singlePlanet==="venus"){
//             return planetImage.venus
//         }
//     }

function Header() {

    const [planet, setPlanet] = useState([]);
    const [input, setInput] = useState("");

    // console.log(planet);

    const aOk = (event) =>{
        event.preventDefault();
        // setPlanet(input)

        var nameArr = input.split(',');
        setPlanet(nameArr);

        setInput("");
    }

    const findMatched = (singlePlanet) =>{
        if(singlePlanet==="earth"){
            return planetImage.earth
        } 
        if(singlePlanet==="jupiter"){
            return planetImage.jupiter
        } 
        if(singlePlanet==="mars"){
            return planetImage.mars
        } 
        if(singlePlanet==="mercury"){
            return planetImage.mercury
        } 
        if(singlePlanet==="saturn"){
            return planetImage.saturn
        } 
        if(singlePlanet==="venus"){
            return planetImage.venus
        }
        else {
            return planetImage.noImg
        }
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
            {planet.map(singlePlanet => <Planet key={singlePlanet} singlePlanet={singlePlanet} singleImg={findMatched(singlePlanet)}/>)}
        </header>
    )
}

export default Header
