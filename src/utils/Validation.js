export default class Validation {
  constructor() {
    this.NUMBER_RANGE = /^[1-9]+$/;
    this.PLAYER_INPUT_VALIDATON = true;
  }

  /**
   * player가 입력한 input의 유효성을 검증합니다.
   * @param {string[]} playerInput [player가 제시한 수]
   */
  async validatePlayerInput(playerInput) {
    const playerInputToSet = new Set(playerInput);

    if(!this.NUMBER_RANGE.test(+playerInput.join('')) ||
      playerInput.length !== 3 ||
      playerInputToSet.size !== 3
    ) {
      this.PLAYER_INPUT_VALIDATON = false;
    }
  }
}