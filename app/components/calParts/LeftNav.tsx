import MiniCalendar from './MiniCalendar'

export default function LeftNav(){
    return (
        <>
        <div className="w-[20%]">
            <button className="flex items-stretch bg-red-600 text-white text-sm rounded shadow overflow-hidden">
  <span className="px-4 py-1 flex items-center">CREATE</span>
  <span className="border-l border-red-900 px-2 py-1 flex items-center bg-red-600">▼</span>
</button>
<div>
{/* <MiniCalendar  /> */}

</div>
        </div>
        
        </>
    )
}