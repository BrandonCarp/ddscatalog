import ExtSpringBox from "./ExtSpringBox";

const extList8: { [key: string]: string } = {
  "27-48-80": "274880",
  "27-48-90": "274890",
  "27-48-100": "2748100",
  "27-48-110": "2748110",
  "27-48-120": "2748120",
  "27-48-130": "2748130",
  "27-48-140": "2748140",
  "27-48-150": "2748150",
  "27-48-160": "2748160",
  "27-48-170": "2748170",
  "27-48-180": "2748180",
  "27-48-190": "2748190",
  "27-48-200": "2748200",
  "27-48-210": "2748210",
  "27-48-220": "2748220",
  "27-48-240": "2748240",
  "27-48-260": "2748260",
  "27-48-280": "2748280",
  "27-48-300": "2748300",
  "27-48-320": "2748320",
  "27-48-340": "2748340",
  "27-48-360": "2748360",
  "27-48-380": "2748380",
  "27-48-400": "2748400",
};

export default function Ext7() {
  return (
    <section className="mb-8">
      <h1 className="text-3xl font-bold text-red-900 pb-2">
        8' EXTENSION SPRINGS
      </h1>
      <table className="min-w-full border-collapse border">
        <thead>
          <tr className="text-red-900">
            <th className="border border-gray-600 px-4  text-left">PART</th>
            <th className="border border-gray-600 px-4  text-left">
              ITEM NUMBER
            </th>
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
