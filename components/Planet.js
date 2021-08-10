import Image from 'next/image';
import earthImg from '../images/earth.jpeg';
import jupiterImg from '../images/jupiter.jpeg';
import marsImg from '../images/mars.jpeg';
import mercuryImg from '../images/mercury.jpeg';
import saturnImg from '../images/saturn.jpeg';
import venusImg from '../images/venus.jpeg';
import noImg from '../images/noimg.jpg'

const planetImage = {
    earth: earthImg,
    jupiter: jupiterImg,
    mars: marsImg,
    mercury: mercuryImg,
    saturn: saturnImg,
    venus: venusImg,
    noImg: noImg
}


// const matchedPlanet = () => {
//     planetImage.match(/earth/g)
// }

function Planet({singlePlanet, singleImg}) {

    // const findMatched = () =>{
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


    return (
        <div className="grid grid-cols-2 h-32 border border-gray-200 my-4">
            <div className="relative">
                {/* <Image alt="planet" width={150} height={100} class="absolute top-0 left-0 w-full h-32 object-cover" src={singlePlanet==="venus"? planetImage.venus : planetImage.earth} /> */}
                {singleImg && (
                    <Image alt="planet" width={150} height={100} class="absolute top-0 left-0 w-full h-32 object-cover" src={singleImg} />
                )}
            </div>
            <p className="text-3xl font-bold text-left p-10">{singlePlanet}</p>
            {console.log(singleImg)}
        </div>
        // <div>
        //     {singlePlanet}
        // </div>
    )
}

export default Planet
