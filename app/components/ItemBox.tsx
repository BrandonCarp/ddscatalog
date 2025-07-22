'use client';
import Image from "next/image";

export default function ItemBox(){
    return (
        <div className="flex flex-col justify-center items-center border-1 ">
            <Image
                        src="/prodImages/2_NYLON_SS_ROLLER.jpg"
                        alt="Part"
                        width={150}
          height={150}
        
                      />
                      {/* Description */}
                    <div className="flex flex-col items-center border-1 px-2 w-[170px]">
                        <h1>SN-4-2</h1>
                        <h1>2" Short Stem Nylon, 4"</h1>
                        
                        </div>  
        </div>
    )
}