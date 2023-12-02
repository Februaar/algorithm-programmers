// 두 조각에서 열 조각까지 원하는 조각 수로 잘라주는 가게
// 피자 조각 수 slice와 피자 먹는 사람의 수 n이 매개변수로 주어질 떄,
// n명의 사람이 최소 한 조각 이상 피자를 먹으려면
// 최소 몇 판의 피자를 시켜야하는지 return

function solution(slice, n){
  if (n % slice !== 0) {

    // 한 조각이라도 못 먹는 사람이 생길 경우 한판 더 시켜버리지 뭐
    return Math.ceil(n / slice); 
  } else {

    // 최소 한 조각이라도 먹었으면 그만 먹어
    return n / slice;
  }
}

// 참고할 코드
function solution(slice, n) {
  return Math.ceil(n / slice);
}