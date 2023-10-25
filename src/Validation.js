const Validation = {
    checkInRange(value) {
      if (isNaN(value) || value.includes(0) || value.includes(".")) {
        throw new Error("[ERROR] 1부터 9사이의 숫자를 입력해주세요.");
      }
    },
  
    checkLength(value) {
      if (value.length !== 3) {
        throw new Error("[ERROR] 숫자는 최대 3개까지 입력 가능합니다.");
      }
    },
  
    checkNoDuplicates(value) {
      if (new Set(value).size !== 3) {
        throw new Error("[ERROR] 같은 수는 한번만 쓸 수 있습니다.");
      }
    },
  
    checkCommandValue(value) {
      if (isNaN(value) || (value !== "1" && value !== "2")) {
        throw new Error("[ERROR] 1 또는 2를 입력해 주세요.");
      }
    },
  };
  
  export default Validation;