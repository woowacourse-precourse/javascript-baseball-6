function getResult(totalCount) {
  const RESULT = [];
  if(totalCount[0]) RESULT.push(`${totalCount[0]}볼`);
  if(totalCount[1]) RESULT.push(`${totalCount[1]}스트라이크`);
  if(totalCount[0] === 0 && totalCount[1] === 0) RESULT.push('낫싱');

  return RESULT.join(' ');
}

export default getResult;
