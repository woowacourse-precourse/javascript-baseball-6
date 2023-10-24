const Check = {
  // 스트라이크와 볼의 개수를 세는 메소드
  async checkCount(user, computer) {
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < 3; i++) {
      // 같은 위치, 같은 값인 경우 strike 증가
      // 다른 위치, 같은 값인 경우 ball 증가
      if (user[i] === computer[i]) {
        strike += 1;
      } else if (computer.includes(user[i])) {
        ball += 1;
      }
    }
    // 객체로 반환
    // []로 감싸면 배열로 반환 가능
    return { ball, strike };
  },
}

export { Check }