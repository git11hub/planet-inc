import Image from "next/image";

function Planet({ singlePlanet, singleImg }) {
  return (
    <div className="grid grid-cols-2 h-32 border border-gray-200 my-4">
      <div className="relative">
        {singleImg && (
          <Image
            alt="planet"
            width={180}
            height={126}
            className="absolute top-0 left-0 w-full h-32 object-cover"
            src={singleImg}
          />
        )}
      </div>
      <p className="text-3xl font-bold text-left p-10">{singlePlanet}</p>
    </div>
  );
}

export default Planet;
