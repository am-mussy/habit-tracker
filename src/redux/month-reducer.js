
const CHANGE_MONTH = 'CHANGE_MONTH'

let initialState = {
    days: 31
}

const monthReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_MONTH:
            let stateCopy = { ...state }
            stateCopy.days = action.days
            return stateCopy
    }

    return state
}

export const changeMonthActionCreator = (days) => (

    {
        type: CHANGE_MONTH,
        days
    }
)

export default monthReducer