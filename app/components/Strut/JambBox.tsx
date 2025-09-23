// JambBox.tsx
import Image from "next/image";

export default function JambBox() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <h2 className="font-bold text-lg text-gray-700">{label}</h2> */}
      <Image
        src="/images/JBEB/JB1.png"
        alt=""
        width={125}
        height={125}
        className="my-2"
      />
      {/* <h1 className="font-bold text-[24px] text-red-900">JAMB BRACKETS</h1> */}
      <ul className="list-disc font-semibold text-[15px]">
        <li className="odd:bg-gray-100 even:bg-white px-5 py-2 whitespace-nowrap">
          #1 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM1</span>
        </li>
        <li className="odd:bg-gray-100 even:bg-white px-2 py-1 whitespace-nowrap">
          #2 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM2</span>
        </li>
        <li className="odd:bg-gray-100 even:bg-white px-2 py-1 whitespace-nowrap">
          #3 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM3</span>
        </li>
        <li className="odd:bg-gray-100 even:bg-white px-2 py-1 whitespace-nowrap">
          #4 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM4</span>
        </li>
        <li className="odd:bg-gray-100 even:bg-white px-2 py-1 whitespace-nowrap">
          #5 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM5</span>
        </li>
        <li className="odd:bg-gray-100 even:bg-white px-2 py-1 whitespace-nowrap">
          #6 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM6</span>
        </li>
        <li className="odd:bg-gray-100 even:bg-white px-2 py-1 whitespace-nowrap">
          #7 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM7</span>
        </li>
        <li className="odd:bg-gray-100 even:bg-white px-2 py-1 whitespace-nowrap">
          #8 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM8</span>
        </li>
        <li className="odd:bg-gray-100 even:bg-white px-2 py-1 whitespace-nowrap">
          #9 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM9</span>
        </li>
        <li className="odd:bg-gray-100 even:bg-white px-2 py-1 whitespace-nowrap">
          #10 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM10</span>
        </li>
        <li className="odd:bg-gray-100 even:bg-white px-2 py-1 whitespace-nowrap">
          #11 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM11</span>
        </li>
        <li className="odd:bg-gray-100 even:bg-white px-2 py-1 whitespace-nowrap">
          #12 JAMB BRACKET PART:
          <span className="text-red-900 font-bold text-[16px]"> JAM12</span>
        </li>
      </ul>
    </div>
  );
}
