const validation = (userInput) => {
  const userArr = userInput.split("").map((e) => +e);
  const userSet = [...new Set(userArr)];
  if (userInput.length > 3) {
    return "[ERROR] 숫자가 잘못된 형식입니다.";
  }
  if (userInput.includes(" ")) {
    return "[ERROR] 숫자가 잘못된 형식입니다.";
  }
  if (Number.isNaN(userInput)) {
    return "[ERROR] 숫자가 잘못된 형식입니다.";
  }
  if (userSet.length !== 3) {
    return "[ERROR] 숫자가 잘못된 형식입니다.";
  }
  return "VALID";
};

export default validation;
