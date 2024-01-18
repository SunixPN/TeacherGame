import { kidGameButtonHandleClick } from "./helpers/kidGameButtonHandleClick";
import { chooseAllHandleClick } from "./helpers/chooseAll"; 

export const membersRender = (members, container, allButton, tasks, history, currentTask) => {
    container.innerHTML = ""

    members.forEach(member => {
        container.innerHTML += 
        `
        <article class="kid-game">
            <span class="hidden">0</span>
            <span class="hidden">${member.id}</span>
            <p class="kid-game__name">${member.name}</p>
            <div class="kid-game__line">
                <img class="kid-game__image" src="./images/other/games.png" alt="car">
                <span class="kid-game__bar"></span>
            </div>
            <button class="kid-game__button">Выбрать!</button>
        </article>
        `
    });

    const memberGameButtons = document.querySelectorAll(".kid-game__button")

    memberGameButtons.forEach(memberGameButton => {
        memberGameButton.addEventListener("click", kidGameButtonHandleClick(tasks, history, currentTask))
    })

    allButton.addEventListener("click", chooseAllHandleClick(memberGameButtons, tasks, history, currentTask))
}