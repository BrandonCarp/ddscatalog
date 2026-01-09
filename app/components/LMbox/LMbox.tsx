import Image, { type StaticImageData } from "next/image";

interface boxspecs {
  image: StaticImageData;
  name: string;
  details: string[];
}

export default function LMbox({ image, name, details }: boxspecs) {
  return (
    <div className="border-3 rounded-2xl">
      <div className="flex flex-col items-center justify-center p-3">
        <h1 className="font-bold border-b-3 text-[24px] ">{name}</h1>
        <Image src={image} alt="logo" width={250} height={250} className="" />
        {details.map((d) => (
          <ul key={d} className="list-disc list-inside w-full text-left px-5">
            <li className="text-[18px] font-bold border-b">{d}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
