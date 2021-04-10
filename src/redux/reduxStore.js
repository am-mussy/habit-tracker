import { combineReducers, createStore } from "redux";
import habits from "./habit-reducer";
import monthData from "./month-reducer";
import userData from "./userData-reducer";
import addHabitModal from "./window-reduce";


// редьюсеры, запихать названия в объект
let reducers = combineReducers({
    habits,
    monthData,
    userData,
    addHabitModal

});



let store = createStore(reducers)

export default store