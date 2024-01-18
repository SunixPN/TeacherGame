import { historyCreate } from "./helpers/historyCreate";
import { membersRender } from "./members/membersRender";
import { questionField } from "./questionField/questionField";

export const renderCompetition = (member) => {
    const competitionKids = document.querySelector(".competitions__kids")
    const allButton = document.querySelector(".competitions__button-all")

    const tasks = JSON.parse(localStorage.getItem("tasks"))
    const history = historyCreate(tasks)
    const currentTask = {
        task: 0
    }

    console.log(history)

    membersRender(member, competitionKids, allButton, tasks, history, currentTask)
    questionField(allButton, tasks, member, history, currentTask)
}