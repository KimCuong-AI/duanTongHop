const BurgerState = {
    burger: { salad: 1, cheese: 1, beef: 1 },
    menu: {
        salad: 10,
        cheese: 20,
        beef: 55,
    },
    total: 85,

}
export const BaiTapBurgerReducer = (state = BurgerState, ation) => {
    switch (ation.type) {
        case 'THAY_DOI': {
            let burgerUpDate = { ...state.burger };
            if (ation.soLuong === -1 && state.burger[ation.propsMenu] < 1) {
                return { ...state }
            }

            for (let props in burgerUpDate) {
                if (props === ation.propsMenu) {
                    burgerUpDate[props] += ation.soLuong;
                }
            }
            state.burger = burgerUpDate;
            state.total += ation.soLuong *state.menu[ation.propsMenu];

            return { ...state }
        }
    }
    return state;
}