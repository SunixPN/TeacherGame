import { modalScript } from "./modal"
import { winners } from "./winner"

let currentTask = 0

export const competititonButtonNextHandleClick = (kidGames, tasks) => {
    currentTask += 1
    const competitionValue = document.querySelector(".competitions__value")

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

        button.classList.remove("kid-game__button--active")
        button.textContent = "Выбрать!"
    });
}