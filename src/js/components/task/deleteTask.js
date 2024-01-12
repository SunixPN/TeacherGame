import { renderTasks } from "./renderTasks"

export const deleteTask = (event) => {
    const id = event.target.previousElementSibling.textContent
    let tasks = JSON.parse(sessionStorage.getItem("tasks"))

    tasks = tasks.filter(task => task.id !== Number(id))
    sessionStorage.setItem("tasks", JSON.stringify(tasks))

    event.target.parentElement.classList.add("task--out")

    setTimeout(renderTasks, 300)
}