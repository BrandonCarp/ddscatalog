'use client';
import Image from "next/image";

type ItemBoxProps = {
  id: string;
  description: string;
};

export default function ItemBox({id, description}: ItemBoxProps){
    return (
        <>
        <div className="flex flex-col justify-center items-center w-[180px] h-[180px] bg-white py-3 rounded border-1">
            <Image
                        src="/prodImages/2_NYLON_SS_ROLLER.jpg"
                        alt="Part"
                        width={100}
                        height={150}
          
        
                      />
                      {/* Description */}
                    <div className="flex flex-col items-center justify-center text-center  border-t-1 w-full  pt-1 text-center px-1 text-sm">
                        
                        <h1 className="">{id}</h1>
                        <h1>{description}</h1>
                        </div>  
        </div>
        </>
    )
}