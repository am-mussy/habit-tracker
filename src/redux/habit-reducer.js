
const CHANGE_CHECKBOX = 'CHANGE_CHECKBOX'
const ADD_HABIT = 'ADD_HABIT'
const REMOVE_HABIT = 'REMOVE_HABIT'

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



// Камастура возвращает сразу объекты
// Решил так не делать


const habitReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_HABIT: {

            let stateCopy = [...state]

            let progress = []
            for (let i = 0; i < 31; i++) {
                progress.push(0)
            }

            stateCopy.push(
                {
                    name: action.habit,
                    progress: progress,
                    days: 31
                }
            )
            return stateCopy
        }
        case CHANGE_CHECKBOX: {

            let stateCopy = [...state]


            for (let i = 0; i < stateCopy.length; i++) {

                if (stateCopy[i].name === action.id.split(' ')[0]) {

                    if (stateCopy[i].progress[action.id.split(' ')[1]] === 0) {
                        stateCopy[i].progress[action.id.split(' ')[1]] = 1
                    } else {
                        stateCopy[i].progress[action.id.split(' ')[1]] = 0
                    }
                }
            }

            return stateCopy
        }
        case REMOVE_HABIT: {

            let stateCopy = [...state]

            stateCopy = stateCopy.filter(e => e.name !== action.habit)

            return stateCopy
        }
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

export const removeHabitActionCreator = (habitName) => (

    {
        type: REMOVE_HABIT,
        habit: habitName
    }
)


export default habitReducer