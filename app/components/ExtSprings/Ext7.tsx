"use client";

import ExtSpringBox from "./ExtSpringBox";

const extList7: { [key: string]: string } = {
  "25-42-60": "254260",
  "25-42-70": "254270",
  "25-42-80": "254280",
  "25-42-90": "254290",
  "25-42-100": "2542100",
  "25-42-110": "2542110",
  "25-42-120": "2542120",
  "25-42-130": "2542130",
  "25-42-140": "2542140",
  "25-42-150": "2542150",
  "25-42-160": "2542160",
  "25-42-170": "2542170",
  "25-42-180": "2542180",
  "25-42-190": "2542190",
  "25-42-200": "2542200",
  "25-42-210": "2542210",
  "25-42-220": "2542220",
  "25-42-230": "2542230",
  "25-42-240": "2542240",
  "25-42-260": "2542260",
  "25-42-280": "2542280",
  "25-42-300": "2542300",
};

export default function Ext7() {
  return (
    <section className="mb-8">
      <h1 className="text-3xl font-bold text-red-800 pb-2">
        7' EXTENSION SPRINGS
      </h1>

      <table className="min-w-full border-collapse border ">
        <thead>
          <tr className="text-red-800">
            <th className="border border-gray-600 px-4  text-left">PART</th>
            <th className="border border-gray-600 px-4  text-left">
              ITEM NUMBER
            </th>
          </tr>
        </thead>
        <tbody className="">
          {Object.entries(extList7).map(([part, itemNumber]) => (
            <ExtSpringBox key={part} id={part} label={itemNumber} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
