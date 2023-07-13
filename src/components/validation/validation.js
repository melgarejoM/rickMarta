const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const regexNum = /\d/;

const validation = (userData) => {
  const errors = {};

  if (!userData.email) {
    errors.email = "El email es requerido";
  } else if (!regexEmail.test(userData.email)) {
    errors.email = "El email es inválido";
  } else if (userData.email.length > 35) {
    errors.email = "El email no puede tener más de 35 caracteres";
  }

  if (!userData.password) {
    errors.password = "La contraseña es requerida";
  } else if (!regexNum.test(userData.password)) {
    errors.password = "La contraseña debe tener al menos 1 número";
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  }

  return errors;
};

export default validation;
