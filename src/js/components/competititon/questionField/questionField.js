import { competititonButtonPrevHandleClick } from "./helpers/competitionButtonPrevHandleClick"
import { competititonButtonNextHandleClick } from "./helpers/competititonButtonNextHandleClick"

export const questionField = (allButton, tasks, members, history, currentTask) => {
    const competitionValue = document.querySelector(".competitions__value") 
    const kidGames = document.querySelectorAll(".kid-game")
    const competititonButtonNext = document.querySelector(".competitions__button-next")
    const competititonButtonPrev = document.querySelector(".button-prev")


    competitionValue.textContent = tasks[0].value

    competititonButtonNext.addEventListener("click", () => competititonButtonNextHandleClick(kidGames, tasks, allButton, members, currentTask, history))
    competititonButtonPrev.addEventListener("click", () => competititonButtonPrevHandleClick(currentTask, history, allButton, kidGames, tasks))
}