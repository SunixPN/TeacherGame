import { deleteTeams } from "./deleteTeams"

export const renderTeams = () => {
    const teamsBox = document.querySelector(".teams__box")
    const teams = JSON.parse(localStorage.getItem("teams"))

    teamsBox.innerHTML = ""

    if (teams.length === 0) {
        teamsBox.innerHTML = `<p class="teams__box-epmty">Здесь пока пусто! Добавьте пару команд, чтобы начать игру</p>`
    }

    else {
        teams.forEach(team => {
            teamsBox.innerHTML += 
            `
            <article class="kid">
                <p class="kid__name">${team.name}</p>
                <span class="hidden">${team.id}</span>
                <button class="kid__del-button">Удалить</button>
            </article>
            `
        });
    }

    const kidDelButtons = document.querySelectorAll(".kid__del-button")

    if (kidDelButtons) {
        kidDelButtons.forEach(delButton => {
            delButton.addEventListener("click", deleteTeams)
        })
    }
}