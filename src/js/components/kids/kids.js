import { kidsButtonHandleClick } from "./kidsButtonHandleClick"
import { renderKids } from "./renderKids"

export const kids = () => {
    renderKids()

    const kidsButton = document.querySelector(".kids__button")
    kidsButton.addEventListener("click", kidsButtonHandleClick)
}