const isValidNumber = (string) => {
  if (!string) throw new Error("[ERROR] 빈값입니다.");
  //3자리를 입력하지 않았을 때
  if (string.length !== 3) throw new Error("[ERROR] 3글자가 아닙니다.");

  //1-9사이의 숫자를 입력하지 않았을 때
  if (!/^[1-9]+$/.test(string)) throw new Error("[ERROR] 1-9가 아닙니다.");

  //겹치는 숫자를 입력했을 때
  if (
    (string[0] == string[1]) |
    (string[1] == string[2]) |
    (string[2] == string[0])
  )
    throw new Error("[ERROR] 겹치는 숫자가 아닙니다.");
};

export default isValidNumber;
