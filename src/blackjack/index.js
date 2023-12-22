import _ from 'underscore';
import {createDeck, askCard, valueCard, computerTurn, addCardImage} from './usecases'

/*
C - Clubs
H - Hearts
D - Diamonds
S - Spades
*/
(() =>{
  'use strict';

  let deck = [];
  let playerPoints = [];
  const types = ['C', 'D', 'H', 'S'];
  const specials = ['A', 'J', 'Q', 'K'];
  
  const btnAskCard = document.querySelector('#btnAskCard'),
      btnStopGame = document.querySelector('#btnStopGame'),
      btnNewCard = document.querySelector('#btnNewCard');

  const smalls = document.querySelectorAll('small'),
      playerCards = document.querySelectorAll('.playerCards');

  const initGame = (numberOfPlayers = 1) => {
      configureButtons(false);
      deleteCardsHtml();
      deck = createDeck(types, specials);
      playerPoints = [];
      for(let i = 0; i <= numberOfPlayers; i++){
          playerPoints.push(0);
      }
  }
  const configureButtons = (isDisabled) => {
      btnAskCard.disabled = isDisabled;
      btnStopGame.disabled = isDisabled;
  }
  const deleteCardsHtml = () => {
      playerCards.forEach(x => x.innerHTML = '');
      smalls.forEach(x => x.innerText = '0 points');
  }
  const acumulatePlayerPoints = (card, position) => {
      playerPoints[position] += valueCard(card);
      smalls[position].innerText = `${playerPoints[position]} points`;
      return playerPoints[position];
  }
  const evaluatePlayerPoints = (position) => {
      if(playerPoints[position] > 21 || playerPoints[position] === 21){
        computerTurn(playerPoints[position], playerPoints, playerCards, smalls, deck);
      }
          
  }
  btnNewCard.addEventListener('click', () => {
      initGame();
  });
  btnAskCard.addEventListener('click', () => {
      const newCard = askCard(deck);
      acumulatePlayerPoints(newCard, 0);
      addCardImage(newCard, 0, playerCards);
      evaluatePlayerPoints(0);
  });
  btnStopGame.addEventListener('click', () => {
      computerTurn(playerPoints[0], playerPoints, playerCards, smalls, deck);
  });
})();