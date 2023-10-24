const compareInput = (computer, user) => {
  let result = [0, 0];

  for (let i = 0; i < 3; i++) {
    if (computer[i] === user[i]) {
      result[1]++; // 스트라이크
    } else if (user.includes(computer[i])) {
      result[0]++; // 볼
    }
  }

  if (result[0] === 0 && result[1] === 0) {
    return "nothing";
  } else {
    return result;
  }
};

export default compareInput;
