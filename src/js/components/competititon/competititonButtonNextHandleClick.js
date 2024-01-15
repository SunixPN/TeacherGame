import { modalScript } from "./modal"
import { winners } from "./winner"

let currentTask = 0

export const competititonButtonNextHandleClick = (kidGames, tasks, allButton) => {
    currentTask += 1
    const competitionValue = document.querySelector(".competitions__value")

    allButton.classList.remove("competitions__button-all--active")
    allButton.textContent = "Выбрать всех!"

    if (currentTask === tasks.length) {
        competitionValue.classList.add("competitions__value--hidden")
        setTimeout(() => {
            competitionValue.textContent = "Просчёт победителей ..."
            competitionValue.classList.remove("competitions__value--hidden")
        }, 500)

        const winnerKids = winners(kidGames)
        const modal = document.querySelector(".modal")
        
        modalScript(modal, winnerKids)
    }

    else {
        competitionValue.classList.add("competitions__value--hidden")
        setTimeout(() => {
            competitionValue.textContent = tasks[currentTask].value
            competitionValue.classList.remove("competitions__value--hidden")
        }, 500)
    }


    kidGames.forEach(kidGame => {
        const percent = Number(kidGame.firstElementChild.textContent)
        const car = kidGame.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild
        const button = kidGame.lastElementChild

        car.style.left = percent + "%"

        if (window.innerWidth < 1031 && Math.round(percent) === 100) {
            car.style.transform = "translateX(-50px) translateY(-50%)"
        }

        button.classList.remove("kid-game__button--active")
        button.textContent = "Выбрать!"
    });
}