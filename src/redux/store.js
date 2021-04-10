// // Нужн баг-фикс: Если хобби состоит из двух слов - не получается его найти (ищим по первому слову)

// import habitReducer from "./habit-reducer"


// let store = {
//     _state: {
//         habits: [
//             {
//                 name: "run",
//                 progress: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//                 days: 31
//             },
//             {
//                 name: "Do",
//                 progress: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//                 days: 31
//             },
//         ],

//         userData: {
//             level: "100",
//             img: "lion",
//             progress: "10%",
//         },
//         monthData: {
//             days: 31
//         }
//     },

//     getState() {
//         return this._state
//     },

//     _callSubscriber() {
//         //console.log('render this._state')
//     },


//     dispatch(action) {

//         this._state.habits = habitReducer(this._state, action)
//         this._callSubscriber(this._state)
//     },

//     subscrabe(observer) {
//         this._callSubscriber = observer
//     }
// }



// export default store
