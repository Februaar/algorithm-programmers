// 문자열 my_string이 매개변수로 주어질 때,
// my_string을 거꾸로 뒤집은 문자열을 return

function solution(my_string) {
  return my_string.split("").reverse().join("");
  // 문자열을 배열로 반환 후 배열의 원소들을 뒤집어 다시 문자열로 반환
}
