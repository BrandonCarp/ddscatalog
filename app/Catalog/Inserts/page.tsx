import Image from "next/image";
import CatalogLayout from "../../components/CatalogLayout";

const insertList: { [key: string]: string } = {
  "509 COLONIAL WHITE, 1PC": "509WH",
  "508 CHARLESTON, WHITE, 1PC": "508WH",
  "510 PRAIRIE, WHITE, 1PC": "510WH",
  "501 SUNSET, WHITE, 2PCS": "501WH",
  "502 SUNSET, WHITE, 3PCS": "502WH",
  "503 SUNSET, WHITE, 4PCS": "503WH",
  "504 SUNSET, WHITE, 7PCS": "504WH",
  "505 SUNSET, WHITE, 8PCS": "505WH",
  "506 SUNSET, WHITE, 5PCS": "506WH",
  "612 STOCKTON, WHITE, 1PC": "612WH",
  "608 CHARLESTON, WHITE, 1PC": "608WH",
  "610 PRAIRIE, WHITE, 1PC": "610WH",
  "611 MADISON, WHITE, 1PC": "611WH",
  "613 MADISON ARCH, WHITE, 2PCS": "613WH",
  "603 SUNSET, WHITE, 2PCS": "603WH",
  "605 SUNSET, WHITE, 4PCS": "605WH",
  "509 COLONIAL ALMOND, 1PC": "509AL",
  "508 CHARLESTON, ALMOND, 1PC": "508AL",
  "510 PRAIRIE, ALMOND, 1PC": "510AL",
  "503 SUNSET, ALMOND, 4PCS": "503AL",
  "505 SUNSET, ALMOND, 8PCS": "505AL",
  "509 COLONIAL BROWN, 1PC": "509BR",
  "508 CHARLESTON, BROWN, 1PC": "508BR",
  "510 PRAIRIE, BROWN, 1PC": "510BR",
  "503 SUNSET, BROWN, 4PCS": "503BR",
  "505 SUNSET, BROWN, 8PCS": "505BR",
  "509 COLONIAL SANDTONE, 1PC": "509ST",
  "508 CHARLESTON, SANDTONE, 1PC": "508ST",
  "510 PRAIRIE, SANDTONE, 1PC": "510ST",
  "503 SUNSET, SANDTONE, 4PCS": "503ST",
  "505 SUNSET, SANDTONE, 8PCS": "505ST",
  "509 COLONIAL BLACK, 1PC": "509BK",
  "505 SUNSET, BLACK, 8PCS": "505BK",
  "SQ24, WHITE, 1PC": "S24WH",
  "REC14, WHITE, 1PC": "R14WH",
  "GRILLE ON ARCH1, WHITE, 2PCS": "GA1WH",
  "VERTICAL GRILLE ON ARCH1, WHITE, 2PCS": "VA1WH",
};

export default function InsertTable() {
  return (
    <CatalogLayout title={"INSERTS"} pagenum="10" reverseFooter>
      <div className="overflow-x-auto mx-4 max-w-5xl text-xs">
        <h1 className="font-black text-3xl text-red-900 p-4">CLOPAY INSERTS</h1>
        <div className="flex justify-center">
          <table className=" table-auto border border-gray-300 text-[11px]">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-2 py-1 text-left w-2/3">
                  Insert Description
                </th>
                <th className="px-2 py-1 text-left w-1/3">Item Code</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(insertList).map(([desc, code], index) => (
                <tr
                  key={desc}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="px-2 py-1 font-medium text-gray-800">
                    {desc}
                  </td>
                  <td className="px-2 py-1 text-blue-700">{code}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Image Div */}
          <div className="">
            <Image
              src={"/images/inserts/cloinserts.png"}
              alt={"Clopay Inserts"}
              width={500}
              height={100}
              className="p-5"
            />
            <Image
              src={"/images/inserts/house1.png"}
              alt={"Clopay Inserts"}
              width={500}
              height={100}
              className="p-5 mt-15"
            />
          </div>
        </div>
      </div>
    </CatalogLayout>
  );
}
