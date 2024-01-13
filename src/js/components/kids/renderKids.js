import { deleteKids } from "./deleteKids"

export const renderKids = () => {
    const kidsBox = document.querySelector(".kids__box")

    const kids = JSON.parse(sessionStorage.getItem("kids"))

    if (kids.length === 0 || !kids) {
        kidsBox.innerHTML = `<p class="task__empty">Здесь пока пусто! Добавьте участников</p>`
    }

    else {
        kidsBox.innerHTML = ""

        kids.forEach(kid => {
            kidsBox.innerHTML += 
            `
            <article class="kid">
                <p class="kid__name">${kid.name}</p>
                <span class="hidden">${kid.id}</span>
                <button class="kid__del-button">Удалить</button>
            </article>
            `
        });
    }

    const kidDelButtons = document.querySelectorAll(".kid__del-button")

    if (kidDelButtons) {
        kidDelButtons.forEach(delButton => {
            delButton.addEventListener("click", deleteKids)
        })
    }
}