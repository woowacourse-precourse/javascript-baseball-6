export const MESSAGE = Object.freeze({
  inputs: {
    COST: '구입금액을 입력해 주세요.\n',
    WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
    BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  },

  outputs: {
    PURCHASE_AMOUNT: (num) => `${num}개를 구매했습니다.`,

    ISSUE_LOTTERY_TICKET: (numbers) => `[${numbers.join(', ')}]`,

    STATIC: '당첨 통계',

    FIRST_PLACE: (num) => `3개 일치 (5,000원) - ${num}개`,
    SECOND_PLACE: (num) => `4개 일치 (50,000원) - ${num}개`,
    THIRD_PLACE: (num) => `5개 일치 (1,500,000원) - ${num}개`,
    FOURTH_PLACE: (num) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${num}개`,
    FIFTH_PLACE: (num) => `6개 일치 (2,000,000,000원) - ${num}개`,

    EARNINGS_RATE: (num) => `총 수익률은 ${num}%입니다.`,
  },

  errors: {
    PREFIX: '[ERROR]',
    INVALID_NUMBER: '숫자만 입력 가능합니다.',
    INVALID_COST: '구매는 1000원 단위로만 가능합니다.',
    INVALID_LOTTO_NUMBERS_COUNT: '로또 번호는 6개여야 합니다.',
    DUPLICATED_NUMBERS: '중복된 숫자는 입력할 수 없습니다.',
  },
});

export default MESSAGE;
