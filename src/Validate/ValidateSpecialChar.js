const ValidateSpecialChar = (userInput) => {
  const CHECK_PATTERN = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|-]/;

  return CHECK_PATTERN.test(userInput.join(''));
};

export default ValidateSpecialChar;
