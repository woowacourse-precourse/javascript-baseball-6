"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _missionUtils = require("@woowacourse/mission-utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: "generateNumber",
    value: function generateNumber() {
      var computer = [];

      while (computer.length < 3) {
        var number = String(_missionUtils.MissionUtils.Random.pickNumberInRange(1, 9));

        if (!computer.includes(number)) {
          computer.push(number);
        }
      }

      return computer;
    }
  }, {
    key: "getNumber",
    value: function getNumber() {
      var number;
      return regeneratorRuntime.async(function getNumber$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_missionUtils.Console.readLineAsync('숫자를 입력해주세요.'));

            case 2:
              number = _context.sent;
              return _context.abrupt("return", number);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "play",
    value: function play() {
      var computer, number, result, restart;
      return regeneratorRuntime.async(function play$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _missionUtils.Console.print('숫자 야구 게임을 시작합니다.');

              computer = this.generateNumber();

            case 2:
              if (!true) {
                _context2.next = 32;
                break;
              }

              _context2.prev = 3;
              _context2.next = 6;
              return regeneratorRuntime.awrap(this.getNumber());

            case 6:
              number = _context2.sent;
              this.isPossible(number);
              result = this.check(computer, number);

              _missionUtils.Console.print(result);

              if (!(result === "3스트라이크")) {
                _context2.next = 25;
                break;
              }

              _missionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

              _context2.next = 14;
              return regeneratorRuntime.awrap(_missionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"));

            case 14:
              restart = _context2.sent;

              if (!(restart === '1')) {
                _context2.next = 20;
                break;
              }

              computer = this.generateNumber();
              return _context2.abrupt("continue", 2);

            case 20:
              if (!(restart === "2")) {
                _context2.next = 24;
                break;
              }

              return _context2.abrupt("break", 32);

            case 24:
              throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');

            case 25:
              _context2.next = 30;
              break;

            case 27:
              _context2.prev = 27;
              _context2.t0 = _context2["catch"](3);
              throw new Error("".concat(_context2.t0.message));

            case 30:
              _context2.next = 2;
              break;

            case 32:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[3, 27]]);
    }
  }, {
    key: "isPossible",
    value: function isPossible(number) {
      if (number.length !== 3 || number[0] === number[1] || number[0] === number[2] || number[1] === number[2]) throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
  }, {
    key: "check",
    value: function check(computer, user) {
      var strike = 0;
      var ball = 0;

      for (var i = 0; i < 3; i++) {
        if (computer[i] === user[i]) strike += 1;else if (computer.includes(user[i])) {
          ball += 1;
        }
      }

      if (strike === 0 && ball === 0) return "낫싱";else if (strike === 3) return "".concat(strike, "\uC2A4\uD2B8\uB77C\uC774\uD06C");else if (ball === 3) return "".concat(ball, "\uBCFC");else return "".concat(ball, "\uBCFC ").concat(strike, "\uC2A4\uD2B8\uB77C\uC774\uD06C");
    }
  }]);

  return App;
}();

var _default = App;
exports["default"] = _default;