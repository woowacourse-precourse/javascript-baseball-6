const isValidInput = (inputNumber) => {
    let digits = inputNumber.toString().split('');

    //1. null일경우
    if (inputNumber === null){
        return false;
    }

    //2. 숫자가 아닌경우
    if( isNaN(inputNumber) ) {
        return false;
    }

    //글자가 아닌 경우
    if( inputNumber.toString().length !== 3 ) {
        return false;
    }

    //중복숫자 입력됐을 경우
    if(new Set(digits).size !== 3) {
        return false;
    }

    //0이 포함된 경우
    if( digits.includes('0') ) {
        return false;
    }

    //유효한 입력일 경우
    return true;
}

export default isValidInput;