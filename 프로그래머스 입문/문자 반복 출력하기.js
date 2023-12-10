// 문자열 my_string과 정수 n이 매개변수로 주어질 때,
// my_string에 들어있는 각 문자를 n만큼 반복한 문자열 return

function solution(my_string, n) {
  var answer = "";

  for (let i = 0; i < my_string.length; i++) {
    // 배열 안 요소에 접근
    var currentChar = my_string[i];
    // n 번씩 반복된 요소 answer에 바로 넣기
    answer += currentChar.repeat(n);
  }

  return answer;
}
