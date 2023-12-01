// 7조각으로 피자를 잘라주는 가게
// 피자를 나눠먹을 사람의 수 n이 주어질 때,
// 모든 사람이 한 조각 이상 먹기 위해서 필요한 피자의 수 return
// 입출력 설명: 1명이 있어도 1판이 필요하고, 7명이 있어도 1판이 필요함

function solution(n) {
  // 7의 배수인지 확인하고 n을 7로 나눈 몫을 반환하거나 n을 7로 나눈 몫에 1을 더해서 반환
  return n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
}

// 참고할 코드
function solution(n) {
  return Math.ceil(n / 7); // 7로 나눈 결과에서 소숫점이하를 정수로 올림
}