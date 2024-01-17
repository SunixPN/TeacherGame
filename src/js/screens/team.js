import { task } from "../components/task/task"
import { dataSet } from "../components/dataSet"
import { teams } from "../components/teams/teams"

Array.prototype.mutationFilter = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            this.splice(i, 1)
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    dataSet()
    task()
    teams()
})