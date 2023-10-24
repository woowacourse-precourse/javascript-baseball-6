const Validation = {
  userNum: function (str) {
    if (str.length !== 3) {
      throw Error('[ERROR] 1~9의 숫자 중 서로 다른 숫자 3자리를 입력해주세요.');
    }
    if (isNaN(str)) {
      throw Error('[ERROR] 1~9의 숫자 중 서로 다른 숫자 3자리를 입력해주세요.');
    }
    if (
      Number(str[0]) === 0 
      || Number(str[1]) === 0 
      || Number(str[2]) === 0
    ) {
      throw Error('[ERROR] 1~9의 숫자 중 서로 다른 숫자 3자리를 입력해주세요.');
    }
    if (
      Number(str[0]) === Number(str[1]) 
      || Number(str[0]) === Number(str[2]) 
      || Number(str[1]) === Number(str[2])
    ) {
      throw Error('[ERROR] 1~9의 숫자 중 서로 다른 숫자 3자리를 입력해주세요.');
    }
  }, 
  replayAnswer: function (str) {
    if (str !== '1' && str !== '2') {
      throw Error('[ERROR] 1과 2 중에서 입력해주세요.');
    }
  }
};

export default Validation;