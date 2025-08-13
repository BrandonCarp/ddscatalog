import Image from "next/image";
import { Archivo } from "next/font/google";

export default function Cover2() {
 
  return (
    <>
      <div
      className="relative flex flex-col items-center justify-center min-h-screen "
      >
        {/* Hero Section */}
        <section className="flex flex-col items-center mb-10 space-y-2">
        <Image
              src="/images/Cover/tlogo.jpg"
              alt="logo"
              height={400}
              width={400}
              className=""
              
            />
            <div className="flex justify-center border-y py-5 min-w-screen">
            <h1 className={`text-slate-800 font-medium text-5xl`}>PRODUCT CATALOG</h1>

            </div>
           
        </section>

        {/* Center Image Section */}
        <section className="flex flex-col items-center justify-center  ">
          {/* House Top */}
          <Image 
          src="/images/Cover2/house.jpg"
          alt="Garage Door House"
          height={650}
          width={650}
          />
          {/* Side by side */}
          
          <div className="flex mt-2 space-x-2">
 <Image 
          src="/images/Cover2/manu.png"
          alt="Spring Manufacturing"
          height={322}
          width={322}
          />
           <Image 
          src="/images/Cover2/lm.jpg"
          alt="Lift Master Operator"
          height={322}
          width={322}
          />
          </div>
        </section>
      
      </div>

 
    </>
  );
}



  {/* Right-hand darker panel */}
        {/* <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "35%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.9)",
            padding: "2rem",
            color: "white",
          }}
          className="flex flex-col justify-between"
        >
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/Cover/tlogo4.png"
              alt="logo"
              height={400}
              width={400}
              className="mt-5"
              style={{ mixBlendMode: "screen" }}
            />
            <h1 className="text-center mt-2 font-bold text-gray-400 text-xl">
              GARAGE DOOR DISTRIBUTION CENTER
            </h1>
            <span className="font-semibold text-gray-400 text-2xl">
              (856) 662-6666
            </span>
          </div>
          <div className="flex flex-col items-center justify-center font-semibold text-gray-400 text-5xl mb-20">
            <span>PRODUCT</span>
            <span>CATALOG</span>
          </div>
        </div> */}