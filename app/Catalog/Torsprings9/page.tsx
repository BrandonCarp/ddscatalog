
import ItemBox from "@/components/DrumBox"
import CatalogLayout from "../../components/CatalogLayout"


const torList9: { [key: string]: string } = {
  "2ID-207-27": "TS-2-207-27",
  "2ID-207-24": "TS-2-207-24",
  "2ID-218-28.25": "TS-2-218-28",
  "2ID-225-29.75": "TS-2-225-29",
  "2ID-234-32.75": "TS-2-234-32",
  "2ID-234-30.25": "TS-2-234-30",
  "2ID-243-34": "TS-2-243-34",
  "2ID-250-36": "TS-2-250-36",
  "2ID-262-42.75": "TS-2-262-42",
};




export default function Torsprings9(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Torsion Springs 9'">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(torList9).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    
  