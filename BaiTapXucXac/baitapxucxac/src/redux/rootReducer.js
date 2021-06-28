import {combineReducers} from 'redux'
import {XucXacReducer} from './XucXacReducer'
import {BaiTapOanTuTiReducer} from './BaiTapOanTuTiReducer'
import {BaiTapBurgerReducer} from './BaiTapBurgerReducer'
export const rootReducer =combineReducers({
    XucXacReducer,
    BaiTapOanTuTiReducer:BaiTapOanTuTiReducer,
    BaiTapBurgerReducer,

})
