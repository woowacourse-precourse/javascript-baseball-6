function validationNumbers(inputNumbers) {
  const inputNumbersSet = new Set(inputNumbers);

  return (
    // 문자열의 길이 확인
    inputNumbers.length === 3
    // 숫자인지 확인
    && inputNumbers.every((inputNumber) =>
      Number.isInteger(parseInt(inputNumber, 10)) 
    )
    // 중복값 확인
    && inputNumbers.length === inputNumbersSet.size
  )
}

exports.validationNumbers = validationNumbers;