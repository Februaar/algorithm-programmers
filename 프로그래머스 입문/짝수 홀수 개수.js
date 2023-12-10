// 정수가 담긴 리스트 num_list가 주어질 때,
// num_list의 원소 중 짝수와 홀수의 개수를 담은 배열 return

function solution(num_list) {
  var answer = [];
  var evenCount = 0;
  var oddCount = 0;

  for (let i = 0; i < num_list.length; i++) {
    var number = num_list[i];

    // 조건에 부합할 때 마다 횟수 증가
    if (number % 2 !== 0) {
      oddCount++;
    } else {
      evenCount++;
    }
  }

  answer.push(evenCount, oddCount);

  return answer;
}

// 정말루다가 좋은 코드
function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    // 나머지를 배열의 인덱스로 활용해서
    // answer[0]과 answer[1]에 1을 더한다.
    answer[a % 2] += 1;
  }

  return answer;
}
