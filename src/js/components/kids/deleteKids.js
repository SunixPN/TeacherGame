import { renderKids } from "./renderKids"

export const deleteKids = (event) => {
    const id = event.target.previousElementSibling.textContent
    console.log(id)
    let kids = JSON.parse(sessionStorage.getItem("kids"))

    kids = kids.filter(kid => kid.id !== Number(id))
    sessionStorage.setItem("kids", JSON.stringify(kids))

    event.target.parentElement.classList.add("task--out")

    setTimeout(renderKids, 300)
}