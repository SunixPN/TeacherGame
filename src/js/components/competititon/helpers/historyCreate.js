export const historyCreate = (tasks) => {
    const history = []

    for (let i = 0; i < tasks.length; i++) {
        history.push([])
    }

    return history
}