export default function counteBall({ computer, user }) {
  let ball = 0;
  let strike = 0;

  user.forEach((num, idx) => {
    const exist = computer.indexOf(num);

    if (exist === idx) strike++;
    else if (exist !== idx && exist !== -1) ball++;
  });

  return { ball, strike };
}
