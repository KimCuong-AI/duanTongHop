const stateModel = {
    // model: ['topclothes', 'botclothes']
}

export const ModelReducer= (state = stateModel, action) => {
    switch (action.type) {
        case 'SET_CLOTH': {
            state.img=action.payload.img;
            return {...state}

        }



        default:
            return state
    }
}
