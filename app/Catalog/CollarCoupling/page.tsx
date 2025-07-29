
import ItemBox from "@/components/DrumBox"
import CatalogLayout from "../../components/CatalogLayout"


const collarList: { [key: string]: string } = {
  '1" COLLAR': "COL-1-1",
  '1-1/4" COLLAR': "COL-1-125",
  '1" COUPLING': "CL-1-1",
  '1-1/4" COUPLING': "CL-1-125",
};





export default function CollarCoupling(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Collars & Couplings">
  <div className="flex justify-center text-center  space-y-3 space-x-2">
   {Object.entries(collarList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    