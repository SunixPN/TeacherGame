import { deleteTask } from "./deleteTask"

export const renderTasks = () => {
    const tasksBox = document.querySelector(".tasks__box")
    const tasks = JSON.parse(sessionStorage.getItem("tasks"))

    if (tasks.length === 0) {
        tasksBox.innerHTML = `<p class="task__empty">Здесь пока пусто! Добавьте несколько задач</p>`
    }

    else {
        tasksBox.innerHTML = ""

        tasks.forEach(task => {
            tasksBox.innerHTML += 
            `
            <article class="task">
                <div class="task__title-box">
                    <h3 class="task__title">Задание</h3>
                    <p class="task__value">${task.value}</p>
                </div>
                <span class="hidden">${task.id}</span>
                <button class="task__button">Удалить задачу</button>
            </article>
            `
        });
    }

    const taskButton = document.querySelectorAll(".task__button")

    if (taskButton) {
        taskButton.forEach(elem => {
            elem.addEventListener("click", deleteTask)
        })
    }
}