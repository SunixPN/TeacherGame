import { renderCompetition } from "../components/competititon/competition"

document.addEventListener("DOMContentLoaded", () => {
    const kids = JSON.parse(sessionStorage.getItem("kids"))
    
    renderCompetition(kids)
})