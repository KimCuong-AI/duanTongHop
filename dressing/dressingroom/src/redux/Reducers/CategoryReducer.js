const stateCategories = 
    [
        { "tabName": "tabTopClothes", "showName": "Áo", "type": "topclothes" },
        { "tabName": "tabBotClothes", "showName": "Quần", "type": "botclothes" },
        { "tabName": "tabShoes", "showName": "Giày dép", "type": "shoes" },
        { "tabName": "tabHandBags", "showName": "Túi xách", "type": "handbags" },
        { "tabName": "tabNecklaces", "showName": "Dây chuyền", "type": "necklaces" },
        { "tabName": "tabHairStyle", "showName": "Kiểu tóc", "type": "hairstyle" },
        { "tabName": "tabBackground", "showName": "Nền", "type": "background" }
    ]

export const CategoryReducer = (state = stateCategories, action) => {
    switch (action.type) {

        

        default:return state
    }
}
