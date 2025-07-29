
import ItemBox from "@/components/DrumBox"
import CatalogLayout from "../../components/CatalogLayout"


const torList7: { [key: string]: string } = {
  "2ID-207-22.25": "TS-2-207-22",
  "2ID-207-20": "TS-2-207-20",
  "2ID-218-23.25": "TS-2-218-23",
  "2ID-225-24.5": "TS-2-225-24",
  "2ID-234-27.25": "TS-2-234-27",
  "2ID-234-25.25": "TS-2-234-25",
  "2ID-243-28.25": "TS-2-243-28",
  "2ID-250-29.75": "TS-2-250-29",
  "2ID-262-35.25": "TS-2-262-35",
  "2ID-262-33.25": "TS-2-262-33",
  "2ID-262-31.5": "TS-2-262-31",
};





export default function Torsprings7(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Torsion Springs 7'">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(torList7).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    
  