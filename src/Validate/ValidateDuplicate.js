const ValidateDuplicate = (userInput) => {
  const UNIQUE_ARRAY = new Set(userInput);

  if (userInput.length !== UNIQUE_ARRAY.size) return true;

  return false;
};
export default ValidateDuplicate;
