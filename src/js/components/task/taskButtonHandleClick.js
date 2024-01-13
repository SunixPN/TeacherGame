import { renderTasks } from "./renderTasks"

export const taskButtonHandleClick = (event) => {
    event.preventDefault()
    const input = event.target.previousElementSibling

    const tasks = JSON.parse(localStorage.getItem("tasks"))
    tasks.push({
        value: input.value,
        id: Date.now()
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))

    input.value = ""

    renderTasks()
}

