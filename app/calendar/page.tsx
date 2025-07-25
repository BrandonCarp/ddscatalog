'use client';


import CalMain from "@/components/calParts/CalMain";
import SearchNav from "@/components/calParts/SearchNav";
import TabNav from "@/components/calParts/TabNav";
import LeftNav from "@/components/calParts/LeftNav";

export default function Cal(){
   

    return (
        <>
        <div>
            <nav>
                <SearchNav />
                {/* Search Bar /\, Tabs \/ */}
                <TabNav />
            </nav>
            <div className="flex ">
                <LeftNav />
                <CalMain />
            </div>
        
        </div>
        </>
    )
}


// {Object.entries(rollerList2).map(([key, value]) => (
//     <RollerBox key={key} id={key} description={value}  />
//   ))} 