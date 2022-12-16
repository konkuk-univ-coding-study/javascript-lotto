const { ERROR_MESSAGE, LOTTO_RANGE, ERROR_MSG, MONEY_RANGE } = require('./Constant');

const isNum = input => {
  const pattern = /[^0-9]/;
  if (!pattern.test(input)) return true;
  return false;
};

const isDividedByThousand = input => {
  if (input % 1000 === 0) return true;
  return false;
};

const isInRange = size => {
  if (size >= MONEY_RANGE.MIN) return true;
  return false;
};

const Validate = {
  // app class에서 InputView.readBridgeSize()의 인자로 사용하는 함수 내부 포함
  validateInputMoney(input) {
    if (!isNum(input)) throw new Error(ERROR_MSG.MONEY_TYPE);
    if (!isInRange(input)) throw new Error(ERROR_MSG.MONEY_RANGE);
    if (!isDividedByThousand(input)) throw new Error(ERROR_MSG.MONEY_UNIT);
  },
};

module.exports = Validate;
