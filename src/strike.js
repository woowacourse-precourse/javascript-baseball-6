export default function strike(input, computer, ending_word = "") {
  const input_array = input.split("");
  let strike_count = 0;
  computer.forEach((computer_item, i) => {
    if (computer_item == input_array[i]) {
      strike_count++;
    }
  });
  return strike_count == 0 ? "" : `${strike_count}${ending_word}`;
}
