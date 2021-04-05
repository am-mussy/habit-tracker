
const CHANGE_USER_DATA = 'CHANGE_USER_DATA'

let initialState = {
    level: "100",
    img: "lion",
    progress: "10%",
}

const userDataReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_USER_DATA:
            state.level = action.level
            state.img = action.img
            state.progress = action.progress
            break;
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