// 아이스 아메리카노 한 잔에 5,500원
// 가지고 있는 돈 money가 매개변수로 주어질 때,
// 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈
// 배열에 순서대로 담아서 return

function solution(money) {
  var answer = new Array(0, 0);

  // 살 수 있는 아메리카노 잔 수
  answer[0] = Math.floor(money / 5500);
  // 남는 돈
  answer[1] = money - (5500 * answer[0]);

  return answer;
}

// 참고할 코드
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}