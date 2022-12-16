const InputView = require('./Inputview');
const { validateInputMoney } = require('./Validate');

class App {
  #LottoGame;

  play() {
    InputView.readInputMoney(this.onReadInputMoney.bind(this));
  }
  onReadInputMoney(money) {
    validateInputMoney(money);
  }
}
const app = new App();
app.play();
module.exports = App;
