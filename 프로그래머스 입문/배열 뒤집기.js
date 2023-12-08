// 정수가 들어 있는 배열 num_list가 매개변수로 주어질 때,
// num_list의 원소의 순서를 뒤집은 배열을 return

function solution(num_list) {
  return [...num_list].reverse();
  // 전개 연산자를 사용해 배열에서 element를 꺼내 순서를 뒤집어 반환
  // 이 때는 원본 배열을 유지할 수 있음
}

function solution(num_list) {
  var answer = num_list.reverse();
  // 원본 배열의 순서를 뒤집어 반환
  // 이 때는 원본을 수정하는 것
  return answer;
}