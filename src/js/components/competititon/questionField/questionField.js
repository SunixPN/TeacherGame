import { competititonButtonNextHandleClick } from "./helpers/competititonButtonNextHandleClick"

export const questionField = (allButton, tasks, members) => {
    const competitionValue = document.querySelector(".competitions__value") 
    const kidGames = document.querySelectorAll(".kid-game")
    const competititonButtonNext = document.querySelector(".competitions__button-next")

    competitionValue.textContent = tasks[0].value

    competititonButtonNext.addEventListener("click", () => competititonButtonNextHandleClick(kidGames, tasks, allButton, members))
}