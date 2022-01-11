/* declaracion de variables */

let numRegEx = /\d/;
let emailRegEx = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
let passRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

/* funciones */

export const validateNameOrLast = (nombre) => (nombre.length < 2 || numRegEx.test(nombre));

export const validateEmail = (email) => !emailRegEx.exec(email);

export const validatePassword = (password) => (password.length < 6 || !passRegEx.exec(password));

export const validateAddress = (address) => (address.length < 6);

export const validateTelephone = (number) => (number.length < 8);



