'use client';
import Image from "next/image";


type VinylInfo = {
  label: string;
  details: string;
  
};

interface VinylProps {
  id: string;
  description: VinylInfo;

}

export default function VinylBox({ id, description}: VinylProps) {

  return (
    <div className="shadow ">
        <div className="flex">
             <div className="font-semibold "><span className="text-gray-600 text-sm pr-1">PART</span><span className="pr-7 text-md">{id}</span> </div>  <span className=" text-sm">{description.details}</span>
        </div>

    </div>
  );
}


