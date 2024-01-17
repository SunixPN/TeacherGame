export const modalScript = (modal, winners, members) => {
    modal.classList.remove("modal--hidden")
    document.body.style.overflow = "hidden"

    const winnersBlock = document.querySelector(".modal__winners")
    const modalButton = document.querySelector(".modal__button")

    winnersBlock.innerHTM = ""

    members.forEach(member => {
        if (winners.some(winner => winner.id === member.id)) {
            winnersBlock.innerHTML += 
            `
            <div class="modal__winner">
                <p class="modal__name">${member.name}</p>
            </div>
            `
        }
    });

    modalButton.addEventListener("click", () => {
        modal.classList.add("modal--hidden")
        document.body.style.overflow = "vissible"
    })
}