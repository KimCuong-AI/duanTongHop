const stateChoosen ={
    ChoosenCategory:"topclothes",
} 

export const ChoosenCategoryReducer= (state = stateChoosen, action) => {
    switch (action.type) {
        case "SET_CATEGORY":{
            console.log(action)
            state.ChoosenCategory=action.payload;
            return {...state}
        }
    default:
        return state
    }
}
