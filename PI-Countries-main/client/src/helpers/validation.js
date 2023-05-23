let numRegExp = /\d/g,
charRegExp = /[°!"#$%&/()=?¡¿'|¬´+}{_[*^¨~`:;]/g;

/*
passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
-at least 8 characters
- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
- Can contain special characters
 */

export default function validation (obj) {
  let errors = {};
  if(!obj.name){
    errors.name = 'Se requiere un nombre';
  }
  if(obj.name && numRegExp.test(obj.name)) {
    errors.name = 'El nombre no puede tener nros';
  }
  if(obj.name && charRegExp.test(obj.name)) {
    errors.name = 'El nombre no puede contener símbolos';
  }
  if(obj.name.length > 12) {
    errors.name = 'Mas de 36 characters'
  }
  if(obj.difficulty === null) {
    errors.difficulty = 'Se requiere una dificultad'
  }
  if(obj.length === null) {
    errors.length = 'Se requiere una duration'
  }
  if(obj.season === "") {
    errors.season = 'Se requiere una season'
  }




/*   if(obj.password.length < 6 || obj.password.length > 10) {
    errors.password = 'La longitud debe ser entre 6 y 10 caracteres'
  } else if (!passwordRegExp.test(obj.password)){
    errors.password = 'La contraseña debe tener un nro'
  } else {
  } */
  
  return errors;
};