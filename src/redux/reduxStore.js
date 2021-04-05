import { combineReducers, createStore } from "redux";
import habits from "./habit-reducer";
import monthData from "./month-reducer";
import userData from "./userData-reducer";


// редьюсеры, запихать названия в объект
let reducers = combineReducers({
    habits,
    monthData,
    userData
});

let store = createStore(reducers)

export default store