export const placeButtons = () => {
    const prevButton = document.querySelector(".button-prev")
    const nextButton = document.querySelector(".competitions__button-next")
    const exampleBox = document.querySelector(".competitions__example-box")

    if (window.innerWidth <= 500) {
        if (!document.querySelector(".competitions__buttons")) {
            const competitionButtons = document.createElement("div")
            competitionButtons.classList.add("competitions__buttons")
    
            exampleBox.appendChild(competitionButtons)
    
            competitionButtons.appendChild(prevButton)
            competitionButtons.appendChild(nextButton)
        }
    }

    else {
        if (exampleBox.lastElementChild.classList.contains("competitions__buttons")) {
            const competitionButtons = exampleBox.lastElementChild

            exampleBox.insertBefore(prevButton, exampleBox.childNodes[0]);
            exampleBox.appendChild(nextButton);
            
            exampleBox.removeChild(competitionButtons)
        }
    }
}