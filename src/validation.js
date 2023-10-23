function exceptionUserNum(str) {
  if (str.length != 3) {
    throw Error("[ERROR]");
  }
  if (isNaN(str)) {
    throw Error("[ERROR]");
  }
  if (Number(str[0]) == 0 || Number(str[1]) == 0 || Number(str[2]) == 0) {
    throw Error("[ERROR]");
  }
  if (
    Number(str[0]) == Number(str[1]) ||
    Number(str[0]) == Number(str[2]) ||
    Number(str[1]) == Number(str[2])
  ) {
    throw Error("[ERROR]");
  }
}

function exceptionReplayAnswer(str) {
  if (str != "1" && str != "2") {
    throw Error("[ERROR]");
  }
}

export { exceptionUserNum, exceptionReplayAnswer };
