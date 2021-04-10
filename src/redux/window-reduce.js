
const SHOW_ADD_HABIT_MODAL_WINDOW = 'SHOW_ADD_HABIT_MODAL_WINDOW'
const CLOSE_ADD_HABIT_MODAL_WINDOW = 'CLOSE_ADD_HABIT_MODAL_WINDOW'

let initialState =

{
    addHabitModal: {
        isOpen: false
    },
    pisos: {
        sosay: false
    }
}

const addHabitModalReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_ADD_HABIT_MODAL_WINDOW: {

            let stateCopy = { ...state }
            stateCopy.addHabitModal = { ...state.addHabitModal }

            stateCopy.addHabitModal.isOpen = true

            return {

                isOpen: true
            }
        }

        case CLOSE_ADD_HABIT_MODAL_WINDOW: {

            let stateCopy = { ...state }
            stateCopy.addHabitModal = { ...state.addHabitModal }

            stateCopy.addHabitModal.isOpen = false

            return {

                isOpen: false
            }
        }
    }

    return state
}

export const showaAddHabitModalWindowActionCreator = () => (

    {
        type: SHOW_ADD_HABIT_MODAL_WINDOW
    }
)

export const closeAddHabitModalWindowActionCreator = () => (

    {
        type: CLOSE_ADD_HABIT_MODAL_WINDOW
    }
)

export default addHabitModalReducer
