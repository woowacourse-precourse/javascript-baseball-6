const QUERY = {
  guess: "숫자를 입력해주세요 : ",
  restart: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
};

const REGEX = {
  guess: /^[1-9]{3}$/,
  restart: /^[1-2]{1}$/
};

export { QUERY, REGEX };
