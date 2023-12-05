// 10만원 이상 사면 5%, 30만원 이상 사면 10%, 50만원 이상 사면 20% 할인해주는 가게
// 구매한 옷의 가격 price가 주어질 때,
// 지불해야할 금액 return

function solution(price) {
  let discount = 0;

  if (price >= 500000) {
    discount = 0.2;
  } else if (price >= 300000) {
    discount = 0.1;
  } else if (price >= 100000) {
    discount = 0.05;
  }

  // 할인이 적용된 가격을 계산
  const discountedPrice = price * (1 - discount);
  // 소수점 이하를 버리고 정수로 변환
  const totalPrice = Math.floor(discountedPrice);

  return totalPrice;
}
