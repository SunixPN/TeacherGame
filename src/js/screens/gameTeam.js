import { renderCompetition } from "../components/competititon/competition"

document.addEventListener("DOMContentLoaded", () => {
    const teams = JSON.parse(localStorage.getItem("teams"))

    renderCompetition(teams)
})