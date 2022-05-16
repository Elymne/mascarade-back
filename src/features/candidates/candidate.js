/**
 * @typedef {Object} Candidate
 * @property {uuidv4} id - Generated UUID.
 * @property {string} firstname - Firstname of the candidate.
 * @property {string} surname - Surname of the canddiate.
 */
export const Candidate = Object

/**
 * Parse Candidate object from sql result.
 * @param {JSON} queryResult
 * @return {Candidate} Parsed Candidate.
 */
export const factoryCandidate = (queryResult) => {
    return { id: queryResult.id, firstname: queryResult.firstname, surname: queryResult.surname }
}
