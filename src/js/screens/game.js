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
    const kids = JSON.parse(sessionStorage.getItem("kids"))
    placeButtons()    
    renderCompetition(kids)
})

window.addEventListener("resize", placeButtons)