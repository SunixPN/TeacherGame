import { renderTasks } from "./renderTasks"

export const taskButtonHandleClick = (event) => {
    event.preventDefault()
    const input = event.target.previousElementSibling

    const tasks = JSON.parse(sessionStorage.getItem("tasks"))
    tasks.push({
        value: input.value,
        id: Date.now()
    })
    sessionStorage.setItem("tasks", JSON.stringify(tasks))

    input.value = ""

    renderTasks()
}

