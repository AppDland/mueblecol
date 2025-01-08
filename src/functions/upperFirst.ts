//a un string le pone a cada palabra la primer letra en mayuscula
export const upperFirst = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);