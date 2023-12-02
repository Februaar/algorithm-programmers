// 여섯조각으로 피자를 잘라주는 가게
// 피자를 나눠먹을 사람의 수 n이 주어질 때,
// n명이 주문한 피자를 남기지않고 모두 같은 수의 피자 조각을 먹어야한다
// 최소 몇판을 주문해야하는지 return

function solution(n) {
  // 한 판 = 6조각
  let piece = 6;
  
  // 전체 조각수를 사람의 수로 나눴을 때 나머지가 0이 되야한다.
  while (piece % n !== 0) {

    // 아닐 경우엔 6씩 증가하기
      piece += 6;
  }
  
  // 전체 피자 조각수를 6으로 나누면 몇 판인지 알 수 있다.
  return piece / 6;
}