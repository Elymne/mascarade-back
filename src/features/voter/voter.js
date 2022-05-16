/**
 * @typedef {Object} Voter
 * @property {uuidv4} id - Generated UUID.
 * @property {string} idFrc - franceconnect ID
 */
export const Voter = Object

/**
 * Parse Voter object from sql result.
 * @param {uuidv4} id
 * @param {string} idFrc
 * @returns
 */
export const factoryVoter = (id, idFrc) => {
    return {
        id: id,
        idFrc: idFrc,
    }
}
