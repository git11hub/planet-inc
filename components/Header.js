import React, { useState } from 'react';
import earthImg from '../images/earth.jpeg';
import jupiterImg from '../images/jupiter.jpeg';
import marsImg from '../images/mars.jpeg';
import mercuryImg from '../images/mercury.jpeg';
import saturnImg from '../images/saturn.jpeg';
import venusImg from '../images/venus.jpeg';
import Planet from './Planet';

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

    return (
        <header className="">
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
            {planet.map(singlePlanet => <Planet key={singlePlanet} singlePlanet={singlePlanet}/>)}
        </header>
    )
}

export default Header
