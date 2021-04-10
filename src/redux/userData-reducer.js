
const CHANGE_USER_DATA = 'CHANGE_USER_DATA'

let initialState = {
    level: "100",
    img: "lion",
    progress: "10%",
}

const userDataReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_USER_DATA:

            let stateCopy = { ...state }
            stateCopy.level = action.level
            stateCopy.img = action.img
            stateCopy.progress = action.progress
            return stateCopy
    }

    return state
}

export const userDataActionCreator = (level, img, progress) => (

    {
        type: CHANGE_USER_DATA,
        level,
        img,
        progress
    }
)

export default userDataReducer