export default function validateNumber(input) {
  let is_error = false;
  const VALIDATION_NUMBER_ARRAY = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const input_array = input.split("");

  if (input_array.length !== 3) {
    return false;
  }

  if (
    input_array[0] === input_array[1] ||
    input_array[1] === input_array[2] ||
    input_array[2] === input_array[0]
  ) {
    return false;
  }

  input_array.forEach((input_array_item) => {
    if (!VALIDATION_NUMBER_ARRAY.includes(input_array_item)) {
      is_error = true;
    }
  });

  return is_error ? false : true;
}
