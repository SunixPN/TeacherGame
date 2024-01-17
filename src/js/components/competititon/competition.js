import { membersRender } from "./members/membersRender";
import { questionField } from "./questionField/questionField";

export const renderCompetition = (member) => {
    const competitionKids = document.querySelector(".competitions__kids")
    const allButton = document.querySelector(".competitions__button-all")

    
    const tasks = JSON.parse(localStorage.getItem("tasks"))

    membersRender(member, competitionKids, allButton, tasks)
    questionField(allButton, tasks, member)
}