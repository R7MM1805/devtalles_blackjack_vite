import { askCard, valueCard, addCardImage } from './index';

/**
 * 
 * @param {Number} minPoints 
 * @param {Array<Number>} playerPoints 
 * @param {Array<HTMLElement>} smalls 
 * @param {Array<String>} deck 
 */
export const computerTurn = (minPoints, playerPoints, playerCards, smalls, deck) => {
    configureButtons(true);
    let newCard;
    let computerPosition = playerPoints.length - 1;
    let computerPoints = 0;
    do{
        newCard = askCard(deck);
        computerPoints = acumulatePlayerPoints(newCard, playerPoints, smalls, computerPosition);
        addCardImage(newCard, computerPosition, playerCards);
        if(minPoints > 21) break;
    }while(computerPoints <= 21 && computerPoints < minPoints);
    setMessages(computerPoints, minPoints);
}
const configureButtons = (isDisabled) => {
    const btnAskCard = document.querySelector('#btnAskCard'),
    btnStopGame = document.querySelector('#btnStopGame');
    btnAskCard.disabled = isDisabled;
    btnStopGame.disabled = isDisabled;
}
const acumulatePlayerPoints = (card, playerPoints, smalls, position) => {
    playerPoints[position] += valueCard(card);
    smalls[position].innerText = `${playerPoints[position]} points`;
    return playerPoints[position];
}
const setMessages = (computerPoints, currentPlayerPoints) => {
    let message = '';
    if (currentPlayerPoints === computerPoints) message = 'Empataron. Nadie ganó'
    else if(currentPlayerPoints > 21) message = 'Lo sentimos. Te excediste. Ganó la computadora'
    else if (currentPlayerPoints < 21 && computerPoints > 21) message = 'Felicidades!!! Ganaste'
    else if (currentPlayerPoints === 21 && computerPoints > currentPlayerPoints) message = 'Felicidades. Ganaste 21 puntos'
    else message = 'Lo sentimos. Ganó la computadora'
    setTimeout(() => {
        alert(message);
    }, 100);
}