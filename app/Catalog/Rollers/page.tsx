
import ItemBox from "@/components/ItemBox"
import CatalogLayout from "../../components/layoutDynamic"


const rollerList: { [key: string]: string } = {
  '2" SHORT STEM NYLON, 4"': "SN-4-2",
  '2" LONG STEM NYLON, 7"': "LN-7-2",
  '2" SHORT STEM STEEL, 4"': "SS-4-2",
  '2" LONG STEM STEEL, 7"': "LS-7-2",
  '2" LONG STEM STEEL, 9"': "LS-9-2",
  '3" SHORT STEM NYLON, 4"': "SN-4-3",
  '3" LONG STEM NYLON, 7"': "LN-7-3",
  '3" SHORT STEM STEEL, 4"': "SS-4-3",
  '3" LONG STEM STEEL, 7"': "LS-7-3",
};



export default function Rollers(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Rollers">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(rollerList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    