
export const addCardImage = (card, position, playerCards) => {
    const newCardImage = document.createElement('img');
    newCardImage.classList.add('card');
    newCardImage.src = `assets/images/${card}.png`;
    playerCards[position].append(newCardImage);
}