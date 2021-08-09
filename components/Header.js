import React, { useState } from 'react';

function Header() {

    const [planet, setPlanet] = useState();
    const [input, setInput] = useState("");

    const aOk = (event) =>{
        event.preventDefault();
        setPlanet(input)

        setInput("");
    }

    return (
        <header className="">
            <form>
                <label>
                    Name:
                    <input 
                    value={input}
                    // onChange={(event) => setPlanet(event.target.value)} 
                    // onSubmit={aOk()}
                    onChange={(event) => setInput(event.target.value)}
                    type="text" 
                    name="name" 
                    placeholder="Type a planet..."/>
                </label>
                {/* <input onClick={aOk} type="submit" defaultValue="Generate" /> */}
                <button onClick={aOk}>Add tag</button>
            </form>
            <h1>{planet}</h1>
        </header>
    )
}

export default Header
