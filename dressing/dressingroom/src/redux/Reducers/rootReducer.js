import {combineReducers} from 'redux'
import { CategoryReducer } from './CategoryReducer'
import { ChoosenCategoryReducer } from './ChoosenCategoryReducer'
import { ModelReducer } from './ModelReducer'
import {ProductReducer} from './ProductReducer'
export const rootReducer=combineReducers({
    ProductReducer:ProductReducer,
    CategoryReducer:CategoryReducer,
    ChoosenCategoryReducer:ChoosenCategoryReducer,
    ModelReducer:ModelReducer,
})  