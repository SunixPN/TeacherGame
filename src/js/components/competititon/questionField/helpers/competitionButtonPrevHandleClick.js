export const competititonButtonPrevHandleClick = (currentTask, history, allButton, kidGames, tasks) => {
    if (currentTask.task !== 0) {
        currentTask.task -= 1
        const competitionValue = document.querySelector(".competitions__value")

        allButton.classList.remove("competitions__button-all--active")
        allButton.textContent = "Выбрать всех!"

        competitionValue.classList.add("competitions__value--hidden")
        setTimeout(() => {
            competitionValue.textContent = tasks[currentTask.task].value
            competitionValue.classList.remove("competitions__value--hidden")
        }, 500)

        kidGames.forEach(kidGame => {
            const button = kidGame.lastElementChild

            if (button.classList.contains("kid-game__button--active")) {
                kidGame.firstElementChild.textContent = Number(kidGame.firstElementChild.textContent) - (100 / tasks.length)
                button.classList.remove("kid-game__button--active")
                button.textContent = "Выбрать!"
            }

            if (history[currentTask.task].some(id => id === Number(kidGame.firstElementChild.nextElementSibling.textContent))) {
                kidGame.firstElementChild.textContent = Number(kidGame.firstElementChild.textContent) - (100 / tasks.length)

                const percent = Number(kidGame.firstElementChild.textContent)
                const car = kidGame.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild

                car.style.left = percent + "%"
                kidGame.firstElementChild.textContent = Number(kidGame.firstElementChild.textContent) + (100 / tasks.length)
                button.classList.add("kid-game__button--active")
            }
        });
    }
}
