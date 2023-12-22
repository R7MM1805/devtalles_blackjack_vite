/**
 * Funcion que retorna la última carta del deck. Además, la elimina del deck.
 * @param {Array<String>} deck 
 * @returns String
 */
export const askCard = (deck) => {
    if (!deck || deck.length === 0) throw 'No hay cartas en el deck';
    return deck.pop();
}