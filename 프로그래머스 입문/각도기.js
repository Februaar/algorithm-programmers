// 각에서 0도 초과 90도 미만은 예각, 90도는 직각
// 90도 초과 180도 미만은 둔각, 180도는 평각으로 분류
// 각 angle이 매개변수로 주어질 때,
// 예각은 1, 직각은 2, 둔각은 3, 평각은 4로 return

function solution(angle) {
  var answer = 0;

  if (angle > 0 && angle < 90) {
    answer = 1;
  } else if (angle === 90) {
    answer = 2;
  } else if (angle > 90 && angle < 180) {
    answer = 3;
  } else if (angle === 180) {
    answer = 4;
  }

  return answer;
}

function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}
