import { renderKids } from "./renderKids"

export const kidsButtonHandleClick = (event) => {
    event.preventDefault()

    const input = event.target.previousElementSibling

    const kids = JSON.parse(sessionStorage.getItem("kids"))
    kids.push({
        id: Date.now(),
        name: input.value
    })

    sessionStorage.setItem("kids", JSON.stringify(kids))

    input.value = ""

    renderKids()
}

