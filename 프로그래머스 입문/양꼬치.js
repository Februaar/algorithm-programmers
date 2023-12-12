// 양꼬치 10인분을 먹으면 음료 하나 서비스
// 양꼬치 1인분에 12,000원 음료수는 2,000원
// 정수 n과 k가 매개변수로 주어질 때,
// 양꼬치 n인분과 음료수 k개를 먹었다면 얼마 지불해야하는지 return

function solution(n, k) {
  const lambPrice = 12000;
  const drinkPrice = 2000;
  const freeDrinks = Math.floor(n / 10); // 무료로 제공하는 음료수 갯수만 담아준다.

  const totalCost = lambPrice * n + (k - freeDrinks) * drinkPrice;

  return totalCost;
}
