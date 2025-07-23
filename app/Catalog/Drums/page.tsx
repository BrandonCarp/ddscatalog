import CatalogLayout from "@/components/layoutDynamic";
import ItemBox from "@/components/ItemBox"



type DrumInfo = {
  label: string;
  image: string;
  description: string[];
};

const drumList: { [key: string]: DrumInfo } = {
  "400-8": { label: "D-400-8", image: "/images/drums/400-8.jpg", description: [ "Maximum door height: 8'","Capacity: 265 lbs per drum", `Maximum cable size: 1/8"`, `Cable length: Floor to shaft \n+63" minus amount of hi-lift`
   ]},
  "400-12": { label: "D-400-12", image: "/images/drums/400-12.jpg", description: [ "Maximum door height: 8'","Capacity: 265 lbs per drum", `Maximum cable size: 1/8"`, `Cable length: Floor to shaft \n+63" minus amount of hi-lift`
   ]},
  "5250-18": { label: "D-5250-18", image: "/images/drums/5250-18.jpg", description: [ "Maximum door height: 8'","Capacity: 265 lbs per drum", `Maximum cable size: 1/8"`, 'Cable length: Floor to shaft \n+63" minus amount of hi-lift'
   ]},
  "400-54": { label: "D-400-54", image: "/images/drums/400-54.jpg", description: [ "Maximum door height: 8'","Capacity: 265 lbs per drum", `Maximum cable size: 1/8"`, 'Cable length: Floor to shaft \n+63" minus amount of hi-lift'
   ]},
};

// const highList: { [key: string]: DrumInfo } = {
// "5250-54": { label: "D-5250-54", image: "/images/drums/5250-54.jpg" },
//   "5750-120": { label: "D-5750-120", image: "/images/drums/5750-120.jpg" },
//   "850-11": { label: "D-850-11", image: "/images/drums/850-11.jpg" },
//   "1100-18": { label: "D-1100-18", image: "/images/drums/1100-18.jpg" }
// };



export default function Drums(){
    return (
  <>
  <CatalogLayout title={"Drums"}>
  <div className="flex items-center justify-center">
  <div className="grid grid-cols-4 ">
   {Object.entries(drumList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    
    </div>
    </CatalogLayout>
    </>
    )
}
    
  