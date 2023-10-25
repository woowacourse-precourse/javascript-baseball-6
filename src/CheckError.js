const checkError = async function checkIfUserInputIsValid (userInput) {
   const NUMBER=[];
  if (userInput.length !== 3) {
    return false;
  }

  for (let i = 0; i < 3; i++) {
    const CHAR = userInput.charAt(i);
    if (CHAR < '1' || CHAR > '9') {
      return false;
    }

    if(NUMBER.includes(CHAR)) {
        return false;
    }

    else {
        NUMBER.push(parseInt(CHAR, 10));
    }

  }

  return true;
}

export default checkError;
