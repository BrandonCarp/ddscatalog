import CatalogLayout from "@/components/CatalogLayout";
import ItemBox from "@/components/DrumBox"



type DrumInfo = {
  label: string;
  image: string;
  description: string[];
};

const drumList: { [key: string]: DrumInfo } = {
  "400-8": { label: "D-400-8", image: "/images/drums/400-8.jpg", description: [ "Maximum door height: 8'","Capacity: 265 lbs per drum", `Maximum cable size: 1/8"`, `Cable length: Floor to shaft \n      +63" minus amount of hi-lift`
   ]},
  "400-12": { label: "D-400-12", image: "/images/drums/400-12.jpg", description: ["Maxiumum door height: 12'", "Capacity: 375 lbs per drum", 'Cable length: Floor to shaft \n      center +8"'
   ]},
  "5250-18": { label: "D-5250-18", image: "/images/drums/5250-18.jpg", description: [`Maximum door height: 19'3"`, "Capacity: 1,100 lbs per drum", 'Maximum cable size: 1/4"', 'Cable length: Floor to \n       shaft center +14"'
   ]},
  "400-54": { label: "D-400-54", image: "/images/drums/400-54.jpg", description: ["Maximum door height: 32'", "Capacity: 1,100 lbs per drum", 'Maximum cable size: 1/4"',
    'Cable length: Floor to \n       shaft +14"'
   ]},
};

const highList: { [key: string]: DrumInfo } = {
"5250-54": { label: "D-5250-54", image: "/images/drums/5250-54.jpg", description: [ "Maximum door height: 8'","Capacity: 265 lbs per drum", `Maximum cable size: 1/8"`, `Cable length: Floor to shaft \n      +63" minus amount of hi-lift`
   ] },
  "5750-120": { label: "D-5750-120", image: "/images/drums/5750-120.jpg", description: [ "Maximum door height: 8'","Capacity: 265 lbs per drum", `Maximum cable size: 1/8"`, `Cable length: Floor to shaft \n      +63" minus amount of hi-lift`
   ] },
  
};

const vertList: { [key: string]: DrumInfo } = {
  "1100-18": { label: "D-1100-18", image: "/images/drums/1100-18.jpg", description: ["Maximum door height: 28'", "Capacity: 800lbs per drum", 'Maximum cable size: 1/4"', 'Cable length: Floor to shaft  \n      center +181"'
   ] },"850-11": { label: "D-850-11", image: "/images/drums/850-11.jpg", description: [ "Maximum door height: 8'","Capacity: 265 lbs per drum", `Maximum cable size: 1/8"`, `Cable length: Floor to shaft \n     +63" minus amount of hi-lift`
   ] },
};


export default function Drums() {
  return (
    <>
      <CatalogLayout title={"Drums"} color={"red"}>
        <div className="px-5"> {/* Added padding here */}
          {/* Top Section — STANDARD LIFT */}
          <div className="mt-2 py-1">
            <div>
              <h1 className="font-bold text-[26px] text-red-800">STANDARD LIFT</h1>
              <h5 className="font-semibold text-xs text-slate-600">SOLD IN PAIRS</h5>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-1">

              {Object.entries(drumList).map(([key, value]) => (
                <ItemBox key={key} id={key} description={value} />
              ))}
            </div>
          </div>

          {/* Bottom Section — HI-LIFT */}
          <div className=" border-t  py-2  ">
            <div>
              <h1 className="font-bold text-[26px] text-red-800">HI-LIFT</h1>
              <h5 className="font-semibold text-xs text-slate-600">SOLD IN PAIRS</h5>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-1 items-stretch">

              {Object.entries(highList).map(([key, value]) => (
                <ItemBox key={key} id={key} description={value} />
              ))}
            </div>
               {/* Verticle Lift  */}
          <div className="border-t  py-1">
  <div className="">
    <h1 className="font-bold text-[26px] text-red-800">VERTICAL LIFT</h1>
    <h5 className="font-semibold text-xs text-slate-600">SOLD IN PAIRS</h5>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-7 items-stretch">
    {Object.entries(vertList).map(([key, value]) => (
      <ItemBox key={key} id={key} description={value} />
    ))}
  </div>
</div>
          </div>
          {/* Verticle Lift  */}
          {/* <div className="border-t  py-1">
  <div className="">
    <h1 className="font-bold text-[26px] text-red-800">VERTICAL LIFT</h1>
    <h5 className="font-semibold text-xs text-slate-600">SOLD IN PAIRS</h5>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-7 items-stretch">
    {Object.entries(vertList).map(([key, value]) => (
      <ItemBox key={key} id={key} description={value} />
    ))}
  </div>
</div> */}



        </div>
      </CatalogLayout>
    </>
  );
}
