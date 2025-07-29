
import ItemBox from "@/components/DrumBox"
import CatalogLayout from "../../components/CatalogLayout"

const torList7: { [key: string]: string } = {
  '2" ID, 207 WIRE, 22.25" LONG': "TS-2-207-22",
  '2" ID, 207 WIRE, 20" LONG': "TS-2-207-20",
  '2" ID, 218 WIRE, 23.25" LONG': "TS-2-218-23",
  '2" ID, 225 WIRE, 24.5" LONG': "TS-2-225-24",
  '2" ID, 234 WIRE, 27.25" LONG': "TS-2-234-27",
  '2" ID, 234 WIRE, 25.25" LONG': "TS-2-234-25",
  '2" ID, 243 WIRE, 28.25" LONG': "TS-2-243-28",
  '2" ID, 250 WIRE, 29.75" LONG': "TS-2-250-29",
  '2" ID, 262 WIRE, 35.25" LONG': "TS-2-262-35",
  '2" ID, 262 WIRE, 33.25" LONG': "TS-2-262-33",
  '2"ID, 262 WIRE, 31.5" LONG': "TS-2-262-31",
};




export default function Extsprings8(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Extension Springs 8'">
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
    
  