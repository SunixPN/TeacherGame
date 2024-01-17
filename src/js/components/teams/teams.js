import { modalRenderKids } from "./helpers/modalRenderKids"
import { renderTeams } from "./helpers/renderTeams"

export const teams = () => {
    const teamButton = document.querySelector(".team__button")
    const modalWindow = document.querySelector(".modal")
    const modalKids = document.querySelector(".modal-team__winners")
    const modalExit = document.querySelector(".modal__exit")

    let counter = {
        count: 0
    }
    
    let teamKids = []

    renderTeams()

    teamButton.addEventListener("click", () => {
        modalWindow.classList.remove("modal--hidden")
        modalRenderKids(modalKids, modalWindow, counter, teamKids)
    })

    modalExit.addEventListener("click", () => {
        modalWindow.classList.add("modal--hidden")
    })


}