
import ItemBox from "@/components/ItemBox"
import CatalogLayout from "../../components/layoutDynamic"


const torList8: { [key: string]: string } = {
  "2ID-207-24.75": "TS-2-207-24",
  "2ID-207-22.25": "TS-2-207-22",
  "2ID-218-26": "TS-2-218-26",
  "2ID-225-27.25": "TS-2-225-27",
  "2ID-234-30.25": "TS-2-234-30",
  "2ID-234-28": "TS-2-234-28",
  "2ID-243-31.5": "TS-2-243-31",
  "2ID-250-33.25": "TS-2-250-33",
  "2ID-262-39.25": "TS-2-262-39",
};



export default function Torsprings8(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Torsion Springs 8'">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(torList8).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    
  