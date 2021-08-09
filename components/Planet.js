import Image from 'next/image';
import earthImg from '../images/earth.jpeg';
import jupiterImg from '../images/jupiter.jpeg';
import marsImg from '../images/mars.jpeg';
import mercuryImg from '../images/mercury.jpeg';
import saturnImg from '../images/saturn.jpeg';
import venusImg from '../images/venus.jpeg';

function Planet({singlePlanet}) {
    return (
        <div className="grid grid-cols-2 h-32 border border-gray-200 my-4">
            <div className="relative">
                <Image alt="planet" width={75} height={32} class="absolute top-0 left-0 w-full h-32 object-cover" src={venusImg} />
            </div>
            <p className="text-3xl font-bold text-left p-10">{singlePlanet}</p>
        </div>
        // <div>
        //     {singlePlanet}
        // </div>
    )
}

export default Planet
