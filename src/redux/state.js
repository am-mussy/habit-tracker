let state = {
    habits: [
        {
            name: "Бэг",
            progress: [1, 1, 0, 0, 1],
            days: 31
        },
        {
            name: "Do anal",
            progress: [1, 1, 1],
            days: 31
        }
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

let addHabit = (habit) => {

    let newHabit = {
        name: "Do anal",
        progress: [1, 1, 1],
        days: 31
    }

    state.habits.push(habit)
}

export default state