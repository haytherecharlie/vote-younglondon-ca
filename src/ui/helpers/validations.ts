import areaCodes from 'config/area-codes.json'

export const vName = n => (/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(n) ? 'valid' : 'invalid')
export const vGender = g => (g.length > 0 ? 'valid' : 'invalid')
export const vAge = a => (parseInt(a) > 10 && parseInt(a) <= 120 ? 'valid' : 'invalid')
export const vEmail = e => (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e) ? 'valid' : 'invalid')
export const vPhone = p => (areaCodes.some(c => c === p) ? 'valid' : 'invalid')
export const vVote = v => (v !== '' ? 'valid' : 'invalid')
export const vReferendum = g => (g.length > 0 ? 'valid' : 'invalid')
