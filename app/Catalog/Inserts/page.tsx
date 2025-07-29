
import ItemBox from "@/components/DrumBox"
import CatalogLayout from "../../components/CatalogLayout"


const insertList: { [key: string]: string } = {
  "509 COLONIAL WHITE, 1PC": "IN-509-COL-WT-1",
  "508 CHARLESTON, WHITE, 1PC": "IN-508-CHA-WT-1",
  "510 PRAIRIE, WHITE, 1PC": "IN-510-PRA-WT-1",
  "501 SUNSET, WHITE, 2PCS": "IN-501-SUN-WT-2",
  "502 SUNSET, WHITE, 3PCS": "IN-502-SUN-WT-3",
  "503 SUNSET, WHITE, 4PCS": "IN-503-SUN-WT-4",
  "504 SUNSET, WHITE, 7PCS": "IN-504-SUN-WT-7",
  "505 SUNSET, WHITE, 8PCS": "IN-505-SUN-WT-8",
  "506 SUNSET, WHITE, 5PCS": "IN-506-SUN-WT-5",
  "612 STOCKTON, WHITE, 1PC": "IN-612-STO-WT-1",
  "608 CHARLESTON, WHITE, 1PC": "IN-608-CHA-WT-1",
  "610 PRAIRIE, WHITE, 1PC": "IN-610-PRA-WT-1",
  "611 MADISON, WHITE, 1PC": "IN-611-MAD-WT-1",
  "613 MADISON ARCH, WHITE, 2PCS": "IN-613-MAR-WT-2",
  "603 SUNSET, WHITE, 2PCS": "IN-603-SUN-WT-2",
  "605 SUNSET, WHITE, 4PCS": "IN-605-SUN-WT-4",
  "509 COLONIAL ALMOND, 1PC": "IN-509-COL-AL-1",
  "508 CHARLESTON, ALMOND, 1PC": "IN-508-CHA-AL-1",
  "510 PRAIRIE, ALMOND, 1PC": "IN-510-PRA-AL-1",
  "503 SUNSET, ALMOND, 4PCS": "IN-503-SUN-AL-4",
  "505 SUNSET, ALMOND, 8PCS": "IN-505-SUN-AL-8",
  "509 COLONIAL BROWN, 1PC": "IN-509-COL-BR-1",
  "508 CHARLESTON, BROWN, 1PC": "IN-508-CHA-BR-1",
  "510 PRAIRIE, BROWN, 1PC": "IN-510-PRA-BR-1",
  "503 SUNSET, BROWN, 4PCS": "IN-503-SUN-BR-4",
  "505 SUNSET, BROWN, 8PCS": "IN-505-SUN-BR-8",
  "509 COLONIAL SANDTONE, 1PC": "IN-509-COL-ST-1",
  "508 CHARLESTON, SANDTONE, 1PC": "IN-508-CHA-ST-1",
  "510 PRAIRIE, SANDTONE, 1PC": "IN-510-PRA-ST-1",
  "503 SUNSET, SANDTONE, 4PCS": "IN-503-SUN-ST-4",
  "505 SUNSET, SANDTONE, 8PCS": "IN-505-SUN-ST-8",
  "509 COLONIAL BLACK, 1PC": "IN-509-COL-BK-1",
  "505 SUNSET, BLACK, 8PCS": "IN-505-SUN-BK-8",
  "SQ24, WHITE, 1PC": "IN-SQ24-WT-1",
  "REC14, WHITE, 1PC": "IN-REC14-WT-1",
  "GRILLE ON ARCH1, WHITE, 2PCS": "IN-GA1-WT-2",
  "VERTICAL GRILLE ON ARCH1, WHITE, 2PCS": "IN-VGA1-WT-2",
};






export default function Inserts(){
    return (
  <>
  <div className="flex items-center justify-center">
  <CatalogLayout title="Inserts">
  <div className="grid grid-cols-4 space-y-3 space-x-3">
   {Object.entries(insertList).map(([key, value]) => (
    <ItemBox key={key} id={key} description={value} />
  ))}

    </div>
    </CatalogLayout>
    </div>
    </>
    )
}
    