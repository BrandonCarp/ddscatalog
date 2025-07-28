
type CalInfo = {
    day: number;
}


export default function CalBlock({day}: CalInfo){
    return (
        <>
       
            
            <div className="border border-gray-300 aspect-square p-3 ">
                <div className="text-xs">
                    {day}
                    <h1 className="text-orange-800">Slack Meeting 6pm</h1>
                </div>
              
            </div>
       
        
        </>
    )
}
