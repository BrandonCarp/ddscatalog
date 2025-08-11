import SpringBox from "./SpringBox";

const torList9: { [key: string]: string } = {
  "2ID-207-27": "TS-2-207-27",     
  "2ID-207-24": "TS-2-207-24",      
  "2ID-218-28.25": "TS-2-218-28",   
  "2ID-225-29.75": "TS-2-225-29",   
  "2ID-234-32.75": "TS-2-234-32",   
  "2ID-234-30.25": "TS-2-234-30",   
  "2ID-243-34": "TS-2-243-34",     
  "2ID-250-36": "TS-2-250-36",     
  "2ID-262-42.75": "TS-2-262-42",   
};


export default function Tor9() {
  return (
    <>
       <section className="flex-none ">
              <h1 className="text-2xl font-bold text-red-800 pb-1">9' TORSION SPRINGS</h1>
      
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
                <tbody>
                  {Object.entries(torList9).map(([part, itemNumber]) => {
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