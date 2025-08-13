import Image from "next/image";

export default function Cover3() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        
        {/* Background color from bottom 60% */}
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-red-800 -z-10" />

        {/* Hero Section */}
        <header className="relative flex flex-col items-center pt-5 mt-10 pb-0 w-full bg-white">
          
          {/* Outer top border */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[360px] border-t border-black z-20" />

          {/* Left vertical + inward line */}
          <div className="absolute top-0 left-[calc(50%-180px)] h-[calc(100%-40px)] border-l border-black z-30" />
          <div className="absolute bottom-[40px] left-[calc(50%-180px)] w-[50px] border-t border-black z-30" />

          {/* Right vertical + inward line */}
          <div className="absolute top-0 right-[calc(50%-180px)] h-[calc(100%-40px)] border-r border-black z-30" />
          <div className="absolute bottom-[40px] right-[calc(50%-180px)] w-[50px] border-t border-black z-30" />

          {/* PRODUCT text */}
          <div className="relative z-40 flex flex-col items-center">
            <Image
              src="/images/logo.jpg"
              width={200}
              height={150}
              alt="Logo"
              className="mb-4"
            />

            <h1 className="text-5xl pb-25">PRODUCT</h1>
          </div>

          {/* Gray box for CATALOG, now outside the content wrapper */}
          <div className="absolute bottom-0 w-[650px] h-[90px] bg-gray-200 flex justify-center items-center z-10">
            <h1 className="text-6xl pb-3">CATALOG</h1>
          </div>
        </header>

        {/* House Image directly below gray box */}
        <Image
          src="/images/Cover2/house.jpg"
          alt="Garage Door House"
          height={650}
          width={650}
          className="mt-0"
        />

        {/* Side by side images */}
        <div className="flex mt-2 space-x-2 w-[650px] max-w-full">
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
    </>
  );
}
