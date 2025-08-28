" use client";
import Image from "next/image";

export default function LmAd() {
  return (
    <>
      <div className="relative h-[100vh] w-[100vw] bg-gray-200">
        {/* Black BG Drop */}
        <Image
          src={"/images/ad/lmtrans.png"}
          alt="Lift Master Operator"
          height={850}
          width={850}
          className="ml-20 z-3 absolute"
        />
        <div className="flex flex-col items-center justify-center  space-y-3 bottom-0 mb-20 ml-33 z-3 absolute text-white">
          <Image
            src={"/images/ad/lmlogo2.png"}
            alt="Lift Master Logo"
            height={350}
            width={350}
            className=""
          />
          <div className="flex space-x-2">
            <h1 className="font-bold text-xl mt-3">
              Where Reliability Meets Supply
            </h1>
            <Image
              src={"/images/ad/tlogo4.png"}
              alt="Doors Direct"
              height={140}
              width={140}
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center z-5 absolute text-white bottom-0 mb-65 ml-30 ">
          <h1 className="text-red-800 font-bold text-3xl mb-3">
            RESIDENTIAL OPERATORS
          </h1>
          <h2 className="font-bold text-4xl mb-7">
            Instant. Inovative. Intuitive.
          </h2>
          <h3 className="font-bold text-2xl mb-2">Place your order today.</h3>
          <h4 className="font-bold text-2xl">(856) 662-6666</h4>
        </div>
        <div className="w-[500px] h-full ml-25 bg-gradient-to-b from-red-900  to-black"></div>
      </div>
    </>
  );
}

// Instant. Innovative. Intuitive.
