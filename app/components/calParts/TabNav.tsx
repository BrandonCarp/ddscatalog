import RightTabNav from "./RightTabNav"

export default function TabNav(){
    return (
        <>
        <div className="flex shadow p-2  justify-between">
            <div className="flex space-x-5 items-center">
 <h1 className="text-red-700 font-semibold ">Calendar</h1>
            <div className="space-x-3 flex">
                <button className="bg-gray-300 font-semibold text-sm text-gray-700 border border-gray-400 px-2 py-1 rounded hover:bg-gray-400">Today</button>
                <div>
<button className="bg-gray-300 font-semibold text-sm text-gray-700 border border-gray-400 px-3 py-1 rounded hover:bg-gray-400">L</button>
                <button className="bg-gray-300 font-semibold text-sm text-gray-700 border border-gray-400 px-3 py-1 rounded hover:bg-gray-400">R</button>
                <span className="ml-3 text-sm">August 2025</span>
                </div>
                
            </div>
            </div>
           <RightTabNav />
        </div>
        </>
    )
}