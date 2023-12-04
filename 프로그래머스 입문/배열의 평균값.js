// 정수 배열 numbers가 매개변수
// numbers의 원소의 평균값을 return

function solution(numbers) {
  const sum = numbers.reduce((a, b) => {
    return a + b;
  }, 0);

  const length = numbers.length;

  const average = sum / length;

  return average;
}

// 코드 간결하게 수정
function solution(numbers) {
  const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  return average;
}
