export const modalScript = (modal, winners) => {
    modal.classList.remove("modal--hidden")
    document.body.style.overflow = "hidden"

    const kids = JSON.parse(sessionStorage.getItem("kids"))
    const winnersBlock = document.querySelector(".modal__winners")
    const modalButton = document.querySelector(".modal__button")

    winnersBlock.innerHTM = ""

    kids.forEach(kid => {
        if (winners.some(winner => winner.id === kid.id)) {
            winnersBlock.innerHTML += 
            `
            <div class="modal__winner">
                <p class="modal__name">${kid.name}</p>
            </div>
            `
        }
    });

    modalButton.addEventListener("click", () => {
        modal.classList.add("modal--hidden")
        document.body.style.overflow = "vissible"
    })
}