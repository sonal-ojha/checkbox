const state1={
    checked:true
}

export const ClearCheckBoxReducer=(state=state1,action)=>{

    switch (action.type){
        case "CLEAR":
            return Object.assign({},state,{checked:action.payload})
        default:
            return state;
    }
}