// 정수 n이 매개변수로 주어질 때,
// n 이하의 홀수가 오름차순으로 담긴 배열을 return
// 제한 1 <= n <= 100

function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) { // if 조건문으로 홀수를 판별
      answer.push(i);
    }
  }

  return answer;
}

// 참고할 코드
function solution(n) {
  var answer = [];
   // 초기값을 1로 설정했기때문에 2씩 증가시켜 순회하면 따로 홀수를 판별할 필요없음
  for (let i = 1; i <= n; i += 2) {
    answer.push(i);
  }

  return answer;
}
