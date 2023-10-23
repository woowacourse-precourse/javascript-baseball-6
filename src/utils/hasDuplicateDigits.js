export default function hasDuplicateDigits(number) {
  const digits = number.toString().split("");
  return new Set(digits).size !== digits.length;
}
