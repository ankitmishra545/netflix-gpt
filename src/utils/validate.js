import lang from "./lunguageConstants";

const validateFormInput = (email, password, lanKey) => {
  if (!email || !password) return lang[lanKey].pleaseFillAllDetails;

  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  if (!isValidEmail) return lang[lanKey].emailIsNotValid;

  const isValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  if (!isValidPassword) return lang[lanKey].passwordIsNotValid;

  return null;
};

export default validateFormInput;
