import Image, { type StaticImageData } from "next/image";

interface boxspecs {
  image: StaticImageData;
  name: string;
  details: string[];
}

export default function LMbox({ image, name, details }: boxspecs) {
  return (
    <div className="border-1 rounded-xl">
      <div className="flex flex-col items-center justify-center p-2">
        <h1 className="font-semibold border-b-2 text-[14px]">{name}</h1>
        <Image src={image} alt="logo" width={150} height={150} className="" />
        {details.map((d) => (
          <ul className="list-disc list-inside w-full text-left px-5">
            <li key={d} className="text-[12px] font-semibold border-b">
              {d}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
