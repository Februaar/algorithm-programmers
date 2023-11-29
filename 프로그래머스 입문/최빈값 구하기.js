// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 함수 완성해보기
// 최빈값이 여러개일 경우 -1을 return

function solution(array) {
  const frequency = {};

  for (const num of array) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  // 최빈값
  let modes = {};
  // 최대 빈도수
  let maxFrequency = 0;

  for (const num in frequency) {
    if (frequency[num] > maxFrequency) { // 각 숫자의 빈도수와 최대 빈도수 비교
      maxFrequency = frequency[num]; // 해당 숫자의 빈도수로 업데이트
      modes = [num]; // 해당 숫자는 최빈값에 저장
    } else if (frequency[num] === maxFrequency) { // 빈도수와 최대 빈도수가 같을 때
      modes.push(num); // 해당 숫자를 최빈값에 push
    }
  }

  // 최빈값이 1개 이상일 때 -1, 아닐 때 해당 숫자를 반환
  return modes.length > 1 ? -1 : parseInt(modes[0]);
}

