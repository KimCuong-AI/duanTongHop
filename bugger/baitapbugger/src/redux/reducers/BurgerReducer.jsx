const BurgerState = {
    burger: { salad: 1, cheese: 1, beef: 1 },
    menu: {
        salad: 10,
        cheese: 20,
        beef: 55,
    },
    total: 85,

}
//burger.salad=3; burger['salad']
export const BurgerReducer = (state = BurgerState, action) => {
    switch (action.type) {
        case 'ADD_BREADMID': {
            console.log(action)
            //thay đổi số lượng
            if (action.amount === -1 && state.burger[action.propsBurger] < 1) {
                return { ...state }
            }
            let burgerUpdate = { ...state.burger };
            burgerUpdate[action.propsBurger] += action.amount;
            state.burger = burgerUpdate;
            //tính tông tiền
            state.total += action.amount * state.menu[action.propsBurger];
            return { ...state }

        }
    }

    return { ...state }
}
