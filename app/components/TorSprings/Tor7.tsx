import SpringBox from "./SpringBox";

const torList7: { [key: string]: string } = {
  "2ID-207-22.25": "TS-2-207-22",
  "2ID-207-20": "TS-2-207-20",
  "2ID-218-23.25": "TS-2-218-23",
  "2ID-225-24.5": "TS-2-225-24",
  "2ID-234-27.25": "TS-2-234-27",
  "2ID-234-25.25": "TS-2-234-25",
  "2ID-243-28.25": "TS-2-243-28",
  "2ID-250-29.75": "TS-2-250-29",
  "2ID-262-35.25": "TS-2-262-35",
  "2ID-262-33.25": "TS-2-262-33",
  "2ID-262-31.5": "TS-2-262-31",
};

export default function Tor7() {
  return (
    <>
       <section className="flex-none h-[300px] mb-8 ">
              <h1 className="text-2xl font-bold text-red-800 pb-1">7' TORSION SPRINGS</h1>
      
              <table className="min-w-full border-collapse border ">
                <thead>
                  <tr className="text-red-800">
                    <th className="border border-gray-600 px-4  text-left">PART</th>
                    <th className="border border-gray-600 px-4  text-left">ITEM NUMBER</th>
                    <th className="border border-gray-600 px-4  text-center">ID</th>
                    <th className="border border-gray-600 px-4  text-center">WIRE</th>
                    <th className="border border-gray-600 px-4  text-center">LGTH</th>
                  </tr>
                </thead>
                <tbody className="">
                  {Object.entries(torList7).map(([part, itemNumber]) => {
                    const [prefix, wireSize, wireLength] = part.split("-");
                    return (
                      <SpringBox
                        key={part}
                        id={part}
                        description={{ label: itemNumber, prefix, wireSize, wireLength }}
                      />
                    );
                  })}
                </tbody>
              </table>
            </section>
   </>
  );
}