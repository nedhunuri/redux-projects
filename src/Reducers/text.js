const text=(state="",action)=>{
    switch(action.type){
        case "SET_TEXT":
            return{
                ...state,
                value:action.payload
            }
            case "REMOVE_TEXT":
                return{
                    ...state,
                    value:""
                }
                default:
                    return state;

    }
}
export default text;