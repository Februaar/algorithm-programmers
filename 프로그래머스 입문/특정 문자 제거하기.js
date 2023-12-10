// 문자열 my_string과 문자 letter 매개변수가 주어질 때,
// my_string에서 letter를 제거한 문자열 return

function solution(my_string, letter) {
  var answer = my_string
    .split("")
    .filter((a) => a !== letter)
    .join("");
  // 문자열을 각 문자로 분해해서 배열로 만들고
  // 주어진 letter를 제외한 배열을 만든다.
  // 그리고 배열을 다시 문자열로 결합

  return answer;
}

// 좀 더 간결하게!
function solution(my_string, letter) {
  const answer = my_string.split(letter).join("");

  return answer;
}
