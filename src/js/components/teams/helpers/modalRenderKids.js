import { renderTeams } from "./renderTeams"

export const modalRenderKids = (container, modalWindow, counter, teamKids) => {
    const modalButton = document.querySelector(".modal-team__button")
    const modalInput = document.querySelector(".modal__input")
    const kids = JSON.parse(sessionStorage.getItem("kids"))
    const teams = JSON.parse(localStorage.getItem("teams"))

    teamKids.splice(0, teamKids.length)
    container.innerHTML = ""
    counter.count += 1
    const kidsInTeam = []
    

    teams.forEach(team => {
        team.kids.forEach(kid => {
            kidsInTeam.push(kid)
        })
    })

    const freeKids = kids.filter(kid => !(kidsInTeam.some(kidInTeam => kidInTeam.id === kid.id)))

    if (freeKids.length === 0) {
        container.innerHTML +=
        `
            <p class="modal__team-empty">Упс! Здесь пока пусто. Удалите команду либо добавьте ещё детей в свой список!</p>
        `
    }

    freeKids.forEach(freeKid => {
        container.innerHTML +=
        `
        <div class="modal__kid-box">
            <p class="modal__kid-name">${freeKid.name}</p>
            <span class="hidden">${freeKid.id}</span>
            <button class="modal__kid-button">Добавить</button>
        </div>
        `
    })

    const modalKidButtons = document.querySelectorAll(".modal__kid-button")

    modalKidButtons.forEach(modalKidButton => {
        modalKidButton.addEventListener("click", (event) => {
            if (event.target.classList.contains("modal__kid-button--active")) {
                teamKids.mutationFilter(teamKid => teamKid.id !== Number(event.target.previousElementSibling.textContent))
                event.target.textContent = "Добавить"
            }

            else {
                teamKids.push({
                    id: Number(event.target.previousElementSibling.textContent),
                    name: event.target.previousElementSibling.previousElementSibling.textContent
                })
                event.target.textContent = "Добавлен"
            }
            event.target.classList.toggle("modal__kid-button--active")
        })
    })

    const modalButtonHandleClick = () => {
        const updateTeams = JSON.parse(localStorage.getItem("teams"))

        updateTeams.push({
            id: Date.now(),
            name: modalInput.value, 
            kids: teamKids
        })

        localStorage.setItem("teams", JSON.stringify(updateTeams))

        modalWindow.classList.add("modal--hidden")
        modalInput.value = ""

        renderTeams()
    }

    if (counter.count === 1) {        
        modalButton.addEventListener("click", modalButtonHandleClick)
    }
}