import { renderCompetition } from "../components/competititon/competition"
import { placeButtons } from "../components/placeButtons"

Array.prototype.mutationFilter = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            this.splice(i, 1)
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const teams = JSON.parse(localStorage.getItem("teams"))
    placeButtons()
    renderCompetition(teams)
})

window.addEventListener("resize", placeButtons)