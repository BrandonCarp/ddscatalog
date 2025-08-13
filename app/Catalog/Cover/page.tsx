import Image from "next/image";


export default function Cover() {
 
  return (
    <>
      <div
        id="catalog-cover"
        style={{ position: "relative", width: "100vw", height: "100vh" }}
      >
        {/* Background image */}
        <Image
          src="/images/Cover/flag.png"
          alt="flag"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        {/* Left free-floating parts container */}
        <div className=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            overflow: "visible",
          }}
        >
          
          {/* Track */}
          <div
            style={{
              position: "absolute",
              top: "-39px",
              left: "-350px",
              width: "1200px",
              height: "1200px",
            }}
          >
            <Image
              src="/images/Cover/track.png"
              alt="track"
              fill
              style={{ objectFit: "contain" }}
              className="rotate-90"
            />
          </div>
  {/* Angle */}
          <div
            style={{
              position: "absolute",
              top: "320px",
              right: "-200px",
              width: "800px",
              height: "800px",
            }}
          >
            <Image
              src="/images/Cover/angle.png"
              alt="angle"
              fill
              style={{ objectFit: "contain" }}
              className="rotate-55"
            />
          </div>
         
          {/* Torsion1 */}
          <div
            style={{
              position: "absolute",
              top: "370px",
              right: "-120px",
              width: "900px",
              height: "900px",
            }}
          >
            <Image
              src="/images/Cover/tor1.png"
              alt="torsion"
              fill
              style={{ objectFit: "contain" }}
              className="rotate-240 "
            />
          </div>

          
          {/* Torsion2 */}
          <div
            style={{
              position: "absolute",
              top: "365px",
              right: "-450px",
              width: "900px",
              height: "900px",
            }}
          >
            <Image
              src="/images/Cover/tor2.png"
              alt="torsion"
              fill
              style={{ objectFit: "contain" }}
              className="rotate-120 z-3"
            />
          </div>
        </div>

        {/* Global dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />

        {/* Right-hand darker panel */}
        <div
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
        </div>
      </div>

 
    </>
  );
}
