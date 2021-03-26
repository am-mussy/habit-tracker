let rerender = () => {
    console.log('render state')
}

let state = {
    habits: [
        {
            name: "Бэг",
            progress: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            days: 31
        },
        {
            name: "Do anal",
            progress: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            days: 31
        },

    ],

    userData: {
        level: "100",
        img: "lion",
        progress: "10%",
    },
    monthData: {
        days: 31
    }
}

export let addHabit = (habit) => {

    let progress = []

    for (let i = 0; i < 31; i++) {
        progress.push(0)
    }

    state.habits.push(
        {
            name: habit,
            progress: progress,
            days: 31
        }
    )
    rerender()
}

export let changeCheckBox = (id) => {

    for (let i = 0; i < state.habits.length; i++) {

        console.log(state.habits[i].name === id.split(' ')[0])
        console.log(state.habits[i].name, id.split(' ')[0])
        if (state.habits[i].name === id.split(' ')[0]) {


            if (state.habits[i].progress[id.split(' ')[1]] === 0) {
                state.habits[i].progress[id.split(' ')[1]] = 1
            } else {
                state.habits[i].progress[id.split(' ')[1]] = 0
            }
        }
    }

    rerender()
}

export const subscrabe = (observer) => {
    rerender = observer
}

export default state