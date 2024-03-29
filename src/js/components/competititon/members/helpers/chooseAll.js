export const chooseAllHandleClick = (buttons, tasks, history, currentTask) => (event) => {
    const tasksLength = tasks.length
    history[currentTask.task].splice(0, history[currentTask.task].length)

    if (event.target.classList.contains("competitions__button-all--active")) {
        buttons.forEach(button => {
            if (button.classList.contains("kid-game__button--active")) {
                let percent = Number(button.parentElement.firstElementChild.textContent)
                percent = percent - (100 / tasksLength)
            
                button.parentElement.firstElementChild.textContent = percent
            }

            button.classList.remove("kid-game__button--active")
            button.textContent = "Выбрать!"
    
            event.target.classList.remove("competitions__button-all--active")
            event.target.textContent = "Выбрать всех!"
        });


    }

    else {
        buttons.forEach(button => {
            if (!button.classList.contains("kid-game__button--active")) {
                let percent = Number(button.parentElement.firstElementChild.textContent)
                percent = percent + (100 / tasksLength)
                
                button.parentElement.firstElementChild.textContent = percent
            }
            history[currentTask.task].push(Number(button.parentElement.firstElementChild.nextElementSibling.textContent))
            button.classList.add("kid-game__button--active")
            button.textContent = "Выбран"

            event.target.classList.add("competitions__button-all--active")
            event.target.textContent = "Все выбраны!"
        });
    }

    console.log(history)

}