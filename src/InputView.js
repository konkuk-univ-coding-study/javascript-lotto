const MissionUtils = require('@woowacourse/mission-utils');
const { INPUT_MSG } = require('./Constant');

const InputView = {
  readInputMoney(callback) {
    MissionUtils.Console.readLine(INPUT_MSG.INPUT_MONEY, input => {
      try {
        callback(input);
      } catch (e) {
        MissionUtils.Console.print(e.message);
        this.readInputMoney(callback);
      }
    });
  },
};

module.exports = InputView;
