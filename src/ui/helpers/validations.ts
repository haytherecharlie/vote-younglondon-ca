import areaCodes from 'config/area-codes.json'
import postalCodes from 'config/postal-codes.json'

export const vName = n => (/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(n) ? 'valid' : 'invalid')
export const vGender = g => (g.length > 0 ? 'valid' : 'invalid')
export const vAge = a => (parseInt(a) > 10 && parseInt(a) <= 120 ? 'valid' : 'invalid')
export const vEmail = e => (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e) ? 'valid' : 'invalid')
export const vPostal = p => postalCodes.some(c => c === p.substr(0,3)) && /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(p) ? 'valid' : 'invalid'
export const vPhone = p => (areaCodes.some(c => c === p) ? 'valid' : 'invalid')
export const vVote = v => (v !== '' ? 'valid' : 'invalid')
export const vReferendum = g => (g.length > 0 ? 'valid' : 'invalid')
