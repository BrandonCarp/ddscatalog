
import ItemBox from "@/components/ItemBox"
import CatalogLayout from "../../components/layoutDynamic"


const strutList: { [key: string]: string } = {
  "2-1/4\" STRUT 8'": "ST-8-2",
  "2-1/4\" STRUT 9'": "ST-9-2",
  "2-1/4\" STRUT 10'": "ST-10-2",
  "2-1/4\" STRUT 12'": "ST-12-2",
  "2-1/4\" STRUT 14'": "ST-14-2",
  "2-1/4\" STRUT 15'": "ST-15-2",
  "2-1/4\" STRUT 16'": "ST-16-2",
  "2-1/4\" STRUT 18'": "ST-18-2",
  "3\" STRUT 16'": "ST-16-3",
  "3\" STRUT 18'": "ST-18-3",
  "3\" STRUT 20'": "ST-20-3",
  "3\" STRUT 24'": "ST-24-3",
};


export default function Struts(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Struts">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(strutList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    