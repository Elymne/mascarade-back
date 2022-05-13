/**
 * @typedef {Object} Candidate
 * @property {uuidv4} id - Generated UUID.
 * @property {string} firstname - Firstname of the candidate.
 * @property {string} surname - Surname of the canddiate.
 */
export const Candidate = Object

/**
 * Parse Candidate object from sql result.
 * @param {uuidv4} queryResult
 * @param {string} queryResult
 * @param {string} queryResult
 * @return {Candidate} Parsed Candidate.
 */
export const factoryCandidate = (id, firstname, surname) => {
    return { id: id, firstname: firstname, surname: surname }
}
