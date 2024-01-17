import { renderTeams } from "./renderTeams"

export const deleteTeams = (event) => {
    const id = event.target.previousElementSibling.textContent
    let teams = JSON.parse(localStorage.getItem("teams"))

    teams = teams.filter(team => team.id !== Number(id))
    localStorage.setItem("teams", JSON.stringify(teams))

    event.target.parentElement.classList.add("task--out")

    setTimeout(renderTeams, 300)
}