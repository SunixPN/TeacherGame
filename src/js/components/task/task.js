import { renderTasks } from "./renderTasks"
import { taskButtonHandleClick } from "./taskButtonHandleClick"

export const task = () => {
    renderTasks()

    const tasksButton = document.querySelector(".tasks__button")
    tasksButton.addEventListener("click", taskButtonHandleClick)

}

