// 정수 배열 numbers가 매개변수
// numbers의 원소의 평균값을 return

function solution(numbers) {
  const sum = numbers.reduce((a, b) => {
      // 콜백함수로 현재의 누적값 'a'와 각 요소 'b'를 받아서 더한 값을 반환
      return a + b;
     // 'reduce' 함수의 두 번째 매개변수로 초기 누적값을 나타냄
     // 여기서는 합계를 계산하므로 0으로 초기화
  }, 0);
  
  const length = numbers.length; // 배열 길이를 구함
  const average = sum / length; // sum 변수에 담긴 모든 숫자의 합을 배열 길이로 나눔
  
  return average;
}

// 코드 간결하게 수정
function solution(numbers) {
  const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  return average;
}
