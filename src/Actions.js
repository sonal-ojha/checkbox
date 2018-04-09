
const initialState={
    checked:true
}

export const ClearText=(state={initialState})=>{
    return(
        {
            type:"CLEAR",
            payload:false
        }   
    )
}