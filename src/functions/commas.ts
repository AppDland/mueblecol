//una funcion simple que toma un numero y lo convierte en un string con comas
export const commas = (num: number): string => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");