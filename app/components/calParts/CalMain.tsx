import CalBlock from "./CalBlock"

const dayList = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10 ,11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28
]



export default function CalMain(){
    return (
        <>
        <div className="w-[80%] ">
           <ul className="grid  md:grid-cols-7 ">
           {dayList.map((item) => (
                    <li key={item}>
                        <CalBlock day={item} />
                    </li>
                ))}
           </ul>
        </div>
        
        </>
    )
}





{/* <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul> */}