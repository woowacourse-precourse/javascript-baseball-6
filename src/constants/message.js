export const MESSAGE = Object.freeze({
  inputs: {
    COST: '구입금액을 입력해 주세요.',
    WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
    BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
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
  },
});

export default MESSAGE;
