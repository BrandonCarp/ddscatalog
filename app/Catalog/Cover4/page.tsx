import Image from "next/image";

export default function Cover4() {
  return (
    <>
      <div className="relative  min-h-screen ">
        <div className=" p-5 ">
          <Image
            src="/images/logo.jpg"
            width={200}
            height={200}
            alt="Logo"
            className="mb-4"
          />
          {/* <div className="font-bold text-xl">
            <h4>7150 Westfield Ave, Pennsauken, NJ 08110</h4>
            <h5 className="">(856) 662-6666</h5>
          </div> */}
        </div>
        <div className="flex flex-col items-center justify-center">
          {/* Background color from bottom 60% */}
          <div className="absolute bottom-0 left-0 w-full h-[60%] bg-red-800 -z-10" />

          {/* Hero Section */}
          <header className="relative  w-full bg-white  p-3">
            <div className="w-full flex flex-col  justify-center items-center">
              <h1 className="text-8xl font-black">PRODUCT</h1>
              <h2 className="text-8xl font-black">CATALOG</h2>
              <div className="border-b border-5 w-[35%] mr-40" />
            </div>
          </header>

          {/* House Image directly below gray box */}
          <Image
            src="/images/Cover2/house.jpg"
            alt="Garage Door House"
            height={500}
            width={500}
            className="mt-0"
          />

          {/* Side by side images */}
          <div className="flex mt-2 space-x-2 w-[500px] max-w-full">
            <Image
              src="/images/Cover2/manu.png"
              alt="Spring Manufacturing"
              height={180}
              width={322}
              className="w-1/2 h-auto object-cover"
            />
            <Image
              src="/images/Cover2/lm.jpg"
              alt="Lift Master Operator"
              height={180}
              width={321}
              className="w-1/2 h-auto object-cover pr-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
