
const CHANGE_CHECKBOX = 'CHANGE_CHECKBOX'
const ADD_HABIT = 'ADD_HABIT'
const MAP_HABIT = 'MAP_HABIT'

let initialState =
    [
        {
            name: "Run",
            progress: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            days: 31
        }, {
            name: "Do",
            progress: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            days: 31
        }
    ]


const habitReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_HABIT:
            let progress = []

            for (let i = 0; i < 31; i++) {
                progress.push(0)
            }

            state.push(
                {
                    name: action.habit,
                    progress: progress,
                    days: 31
                }
            )
            break;

        case CHANGE_CHECKBOX:

            for (let i = 0; i < state.length; i++) {

                if (state[i].name === action.id.split(' ')[0]) {

                    if (state[i].progress[action.id.split(' ')[1]] === 0) {
                        state[i].progress[action.id.split(' ')[1]] = 1
                    } else {
                        state[i].progress[action.id.split(' ')[1]] = 0
                    }
                }
            }
            break;
    }

    return state
}

export const checkBoxChangerActionCreator = (id) => (

    {
        type: CHANGE_CHECKBOX,
        id: id
    }
)

export const addHabitActionCreator = (habitName) => (

    {
        type: ADD_HABIT,
        habit: habitName
    }
)



export default habitReducer