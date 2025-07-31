
import ItemBox from "@/components/Drums/DrumBox"
import CatalogLayout from "../../components/CatalogLayout"


const ebpList: { [key: string]: string } = {
  '3-3/8"  RES, END BEARING PLATE': "EP-R-3",
  '3-3/8" COMM, END BEARING PLATE': "EP-C-3",
  '4-3/8" END BEARING PLATE': "EP-CR-4",
  '5" END BEARING PLATE': "EP-CR-5",
  '6" END BEARING PLATE': "EP-CR-6",
};





export default function Endbearingplate(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="End Bearing Plates">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(ebpList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    