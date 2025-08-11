import ExtSpringBox from "./ExtSpringBox";

const extList8: { [key: string]: string } = {
  "27-48-80": "E-27-80",
  "27-48-90": "E-27-90",
  "27-48-100": "E-27-100",
  "27-48-110": "E-27-110",
  "27-48-120": "E-27-120",
  "27-48-130": "E-27-130",
  "27-48-140": "E-27-140",
  "27-48-150": "E-27-150",
  "27-48-160": "E-27-160",
  "27-48-170": "E-27-170",
  "27-48-180": "E-27-180",
  "27-48-190": "E-27-190",
  "27-48-200": "E-27-200",
  "27-48-210": "E-27-210",
  "27-48-220": "E-27-220",
  "27-48-240": "E-27-240",
  "27-48-260": "E-27-260",
  "27-48-280": "E-27-280",
  "27-48-300": "E-27-300",
  "27-48-320": "E-27-320",
  "27-48-340": "E-27-340",
  "27-48-360": "E-27-360",
  "27-48-380": "E-27-380",
  "27-48-400": "E-27-400",
};


export default function Ext7() {
  return (
    <section className="mb-8">
      <h1 className="text-2xl font-bold text-red-800 pb-2">8' EXTENSION SPRINGS</h1>
      <table className="min-w-full border-collapse border">
         <thead>
                  <tr className="text-red-800">
                    <th className="border border-gray-600 px-4  text-left">PART</th>
                    <th className="border border-gray-600 px-4  text-left">ITEM NUMBER</th>
                   
                  </tr>
                </thead>
<tbody className="">
        {Object.entries(extList8).map(([part, itemNumber]) => (
          <ExtSpringBox key={part} id={part} label={itemNumber} />
        ))}
      </tbody>
      </table>
      
    </section>
  );
}