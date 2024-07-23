const validateFormInput = (email, password) => {
  if (!email || !password) return "Please fill all details!";

  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  if (!isValidEmail) return "Email is not valid";

  const isValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  if (!isValidPassword) return "Password is not valid";

  return null;
};

export default validateFormInput;
