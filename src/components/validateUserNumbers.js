
export function validateUserNumbers() {
    const userInput = document.querySelector('#user-input');
    const userNumbers = userInput.value;
    const numberedUserNumbers = +userNumbers;
  
    if (
      userNumbers.length > 3 ||
      userNumbers.length < 3 ||
      userNumbers.includes(0) ||
      userNumbers.includes(' ') ||
      userNumbers === '' ||
      isNaN(numberedUserNumbers) === true
    ) {
      alert('숫자를 조건에 맞게 다시 입력해주세요!');
      return;
    }
  
    const userNumberMap = {};
    for (let number of userNumbers)
      userNumberMap[number] = userNumberMap[number] + 1 || 1;
  
    for (let count in userNumberMap) {
      if (userNumberMap[count] > 1) {
        alert('숫자를 조건에 맞게 다시 입력해주세요!');
        return;
      }
    }
    const splitedUserNumbers = userNumbers.split('');
    return splitedUserNumbers;
  }