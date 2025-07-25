
type CalInfo = {
    day: number;
}
// export default function ItemBox({ id, description }: ItemBoxProps) {

export default function CalBlock({day}: CalInfo){
    return (
        <>
        <div className="">
            
            <div className="border border-gray-300 h-25 w-25">
                <div className="p-2">
                    {day}
                </div>
              
            </div>
        </div>
        
        </>
    )
}
