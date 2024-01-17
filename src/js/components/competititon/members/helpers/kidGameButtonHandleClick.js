export const kidGameButtonHandleClick = (tasks) => (event) => {
    const tasksLength = tasks.length

    if (event.target.classList.contains("kid-game__button--active")) {
        event.target.classList.remove("kid-game__button--active")
        event.target.textContent = "Выбрать!"

        let percent = Number(event.target.parentElement.firstElementChild.textContent)
        percent = percent - (100 / tasksLength)

        event.target.parentElement.firstElementChild.textContent = percent
    }

    else {
        event.target.classList.add("kid-game__button--active")
        event.target.textContent = "Выбран"

        let percent = Number(event.target.parentElement.firstElementChild.textContent)
        percent = percent + (100 / tasksLength)
    
        event.target.parentElement.firstElementChild.textContent = percent
    }

   
}