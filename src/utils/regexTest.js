export const validPostalCodeRegex = /^[0-9]{6,6}$/;

export const isvalidPostalCode = (postal) => validPostalCodeRegex.test(postal);