// 기능2. 사용자의 입력값 판단하여 올바르면 값을 저장하고, 올바르지 않으면 throw문을 사용해 예외를 발생시킨후 애플리케이션은 종료
export function input(i){
  if(!Number.isInteger(+i) || i.length>3 || i.trim() === "" || [...new Set(i)].length !== 3){ // 애러일경우
    throw new Error("[ERROR] 올바른 숫자를 입력하세요");
  }else{
    return i;
  }
}