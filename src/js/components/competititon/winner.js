export const winners = (kidGames) => {
    let percents = [] 

    kidGames.forEach(kidGame => {
        percents.push({
            number: Number(kidGame.firstElementChild.textContent),
            id: Number(kidGame.firstElementChild.nextElementSibling.textContent)
        })
    })

    const maxValue = Math.max(...percents.map(percent => percent.number)) 
    percents = percents.filter(percent => percent.number === maxValue)

    return percents
}