// 일반적인 값들 상수화
const MONEY_RANGE = Object.freeze({
  MIN: 1000,
});

const LOTTO_RANGE = Object.freeze({
  MIN: 1,
  MAX: 45,
});

// 입력 메세지 상수화 => InputView.js에서 사용
const INPUT_MSG = Object.freeze({
  INPUT_MONEY: '구입금액을 입력해 주세요.\n',
  INPUT_ANSWER: `당첨 번호를 입력해 주세요.\n`,
  INPUT_BONUS: `보너스 번호를 입력해 주세요.\n`,
});

// 출력 메세지 상수화 => OutputView.js에서 사용
const OUTPUT_MSG = Object.freeze({
  TOTAL_NUM(cnt) {
    return `${cnt}개를 구매하였습니다\n`;
  },
});

// 에러 메시지 상수화 => Validate.js에서 사용
const ERROR = '[ERROR]';
const ERROR_MSG = Object.freeze({
  MONEY_TYPE: `${ERROR} 금액은 숫자만 입력 가능합니다`,
  MONEY_RANGE: `${ERROR} 금액은 1000원 이상이어야 합니다`,
  MONEY_UNIT: `${ERROR} 금액은 1000원 단위로 입력해주세요`,
  LOTTO_RANGE: `${ERROR} 로또 번호는 ${LOTTO_RANGE.MIN}부터 ${LOTTO_RANGE.MAX}입니다₩`,
});

module.exports = { MONEY_RANGE, OUTPUT_MSG, ERROR_MSG, INPUT_MSG, LOTTO_RANGE };
