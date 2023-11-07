// [ ] Controller로부터 당첨 번호 + 보너스 입력을 전달 받아 초기화
class LottoResult {
  constructor() {
    this.#prize = 0;
    this.#rank = 0;
  }

  getResult({ lotto, winningLotto }) {}

  // 상금 계산
  #getPrize() {}

  // 순위 계산
  #getRank() {}
}

export default LottoResult;
