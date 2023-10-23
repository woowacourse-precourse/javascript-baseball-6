export default function ball(input, computer, ending_word = "") {
  const input_array = input.split("");
  let ball_count = 0;
  computer.forEach((computer_item, i) => {
    input_array.forEach((input_item, j) => {
      if (i != j && input_item == computer_item) {
        ball_count++;
      }
    });
  });
  return ball_count == 0 ? "" : `${ball_count}${ending_word} `;
}
