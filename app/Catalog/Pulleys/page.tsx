
import ItemBox from "@/components/DrumBox"
import CatalogLayout from "../../components/CatalogLayout"


const pulleyList: { [key: string]: string } = {
  '3" STEEL PULLEY': "P-S-3",
  '3" GOLD PULLEY': "P-G-3",
  '3" CAST IRON PULLEY': "P-C-3",
  '4" STEEL PULLEY': "P-S-4",
  '4" STEEL STUD PULLEY': "P-ST-4",
  '4" CAST IRON PULLEY': "P-C-4",
  '5" STEEL STUD PULLEY': "P-ST-5",
  '3" FORK': "P-F-3",
  '3" SAFETY FORK': "P-SF-3",
  '4" FORK': "P-F-4",
};

export default function Pulleys(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Pulleys">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(pulleyList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    
  