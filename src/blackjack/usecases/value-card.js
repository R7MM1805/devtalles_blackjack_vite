/**
 * Función que retorna el valor númerico de una carta
 * @param {String} card 
 * @returns Number
 */
export const valueCard = (card) => {
    const value = card.substring(0, card.length - 1);
    return isNaN(value) ? evaluateSpecial(value) : value * 1;
}

/**
 * Función que retorna el valor de las cartas especiales (que no son números)
 * @param {String} valueCard 
 * @returns Number
 */
const evaluateSpecial = (valueCard) => valueCard === 'A' ? 11 : 10;