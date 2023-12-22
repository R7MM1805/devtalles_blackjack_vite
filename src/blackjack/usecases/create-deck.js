import _ from 'underscore';

/**
 * Función que retorna un nuevo deck de cartas
 * @param {Array<String>} types 
 * @param {Array<String>} specials 
 * @returns {Array<String>}
 */
export const createDeck = (types, specials) => {
    const validation = validateCreateDeck(types, specials);
    return validation === '' ? generateDeck(types, specials) : setResponseDeck(validation);
}

/**
 * Función que valida datos para la creación del deck
 * @param {Array<String>} types 
 * @param {Array<String>} specials 
 * @returns String
 */
const validateCreateDeck = (types, specials) => {
    let response = (types != null && types.length > 0) ? '' : 'Se requieren la lista de tipos para la creación de las cartas';
    return response === '' ? (specials != null && specials.length > 0) ? '' : 'Se requieren la lista de los especiales para la creación de las cartas' : response;
}

/**
 * Función que genera el deck de cartas
 * @param {Array<String>} types 
 * @param {Array<String>} specials 
 * @returns {Array<String>}
 */
const generateDeck = (types, specials) => {
    let deck = [];
    for(let i = 2; i <= 10; i++){
        for(let type of types){
            deck.push(`${i}${type}`);
        }
    }
    for(let special of specials){
        for (let type of types){
            deck.push(`${special}${type}`);
        }
    }
    return _.shuffle(deck);
}

/**
 * Función que retorna el error de la creación del deck
 * @param {String} validation 
 */
const setResponseDeck = (validation) => {
    throw `Error - ${validation}`;
}