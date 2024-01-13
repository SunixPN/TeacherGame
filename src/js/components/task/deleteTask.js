import { renderTasks } from "./renderTasks"

export const deleteTask = (event) => {
    const id = event.target.previousElementSibling.textContent
    let tasks = JSON.parse(localStorage.getItem("tasks"))

    tasks = tasks.filter(task => task.id !== Number(id))
    localStorage.setItem("tasks", JSON.stringify(tasks))

    event.target.parentElement.classList.add("task--out")

    setTimeout(renderTasks, 300)
}