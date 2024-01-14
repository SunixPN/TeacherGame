import { competititonButtonNextHandleClick } from "./competititonButtonNextHandleClick";
import { kidGameButtonHandleClick } from "./kidGameButtonHandleClick";

export const renderCompetition = () => {
    const competitionKids = document.querySelector(".competitions__kids")
    const kids = JSON.parse(sessionStorage.getItem("kids"))

    const competitionValue = document.querySelector(".competitions__value") 
    const tasks = JSON.parse(localStorage.getItem("tasks"))

    competitionValue.textContent = tasks[0].value

    competitionKids.innerHTML = ""

    kids.forEach(kid => {
        competitionKids.innerHTML += 
        `
        <article class="kid-game">
            <span class="hidden">0</span>
            <span class="hidden">${kid.id}</span>
            <p class="kid-game__name">${kid.name}</p>
            <div class="kid-game__line">
                <img class="kid-game__image" src="./images/other/games.png" alt="car">
                <span class="kid-game__bar"></span>
            </div>
            <button class="kid-game__button">Выбрать!</button>
        </article>
        `
    });

    const kidGames = document.querySelectorAll(".kid-game")

    const kidGameButtons = document.querySelectorAll(".kid-game__button")

    kidGameButtons.forEach(kidGameButton => {
        kidGameButton.addEventListener("click", kidGameButtonHandleClick)
    })

    const competititonButtonNext = document.querySelector(".competitions__button-next")

    competititonButtonNext.addEventListener("click", () => competititonButtonNextHandleClick(kidGames, tasks))
    
}