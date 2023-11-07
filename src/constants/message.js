export const MESSAGE = Object.freeze({
  inputs: {
    COST: '구입금액을 입력해 주세요.\n',
    WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
    BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  },

  outputs: {
    PURCHASE_AMOUNT: (num) => `${num}개를 구매했습니다.`,

    ISSUE_LOTTERY_TICKET: (numbers) => `[${numbers.join(', ')}]`,

    STATISTICS: '당첨 통계\n---',

    FIFTH_PRIZE: (num) => `3개 일치 (5,000원) - ${num}개`,
    FOURTH_PRIZE: (num) => `4개 일치 (50,000원) - ${num}개`,
    THIRD_PRIZE: (num) => `5개 일치 (1,500,000원) - ${num}개`,
    SECOND_PRIZE: (num) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${num}개`,
    FIRST_PRIZE: (num) => `6개 일치 (2,000,000,000원) - ${num}개`,

    EARNINGS_RATE: (num) => `총 수익률은 ${num}%입니다.`,
  },

  errors: {
    PREFIX: '[ERROR]',
    INVALID_NUMBER: (input) => `숫자만 입력 가능합니다. 입력: ${input}\n`,
    INVALID_COST: (input) =>
      `구매는 1000원 단위로만 가능합니다. 입력: ${input}\n`,

    INVALID_NUMBERS_COUNT: (input) =>
      `로또 번호는 6개여야 합니다. 입력: ${input}\n`,
    INVALID_NUMBERS_RANGE: (input) =>
      `유효하지 않은 범위의 숫자입니다. 입력: ${input}\n`,
    DUPLICATED_NUMBERS: (input) =>
      `중복된 숫자는 입력할 수 없습니다. 입력: ${input}\n`,

    INVALID_RANGE: (input) =>
      `입력 가능한 범위를 초과했습니다. (1~45) 입력: ${input}\n`,
    ALREADY_EXISTS: (input) =>
      `이미 뽑힌 숫자는 입력할 수 없습니다. 입력: ${input}\n`,
  },
});

export default MESSAGE;
