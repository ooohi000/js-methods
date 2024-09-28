import { map } from '../array/map.js';

export const mapExample = () => {
  // 예제 1: 간단한 곱셈 변환
  const array1 = [1, 2, 3, 4];

  function multiplyByTwo(item) {
    return item * 2;
  }

  console.log(map(array1, multiplyByTwo));
  console.log(array1.myMap(multiplyByTwo));
  // Expected output: [2, 4, 6, 8]

  // 예제 2: 문자열 변환
  const array2 = ['apple', 'banana', 'cherry'];

  function toUpperCase(item) {
    return item.toUpperCase();
  }

  console.log(map(array2, toUpperCase));
  console.log(array2.myMap(toUpperCase));
  // Expected output: ['APPLE', 'BANANA', 'CHERRY']

  // 예제 3: 객체 속성 추출
  const array3 = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jim' },
  ];

  function extractName(obj) {
    return obj.name;
  }

  console.log(map(array3, extractName));
  console.log(array3.myMap(extractName));
  // Expected output: ['John', 'Jane', 'Jim']

  // 예제 4: 인덱스를 활용한 배열 생성
  const array4 = [10, 20, 30, 40];

  function addIndex(item, index) {
    return item + index;
  }

  console.log(map(array4, addIndex));
  console.log(array4.myMap(addIndex));
  // Expected output: [10, 21, 32, 43]

  // 예제 5: thisArg를 사용한 컨텍스트 활용
  const array5 = [1, 2, 3];
  const multiplierContext = { multiplier: 5 };

  function multiplyWithContext(item) {
    return item * this.multiplier;
  }

  console.log(map(array5, multiplyWithContext, multiplierContext));
  console.log(array5.myMap(multiplyWithContext, multiplierContext));
  // Expected output: [5, 10, 15]

  // 예제 6: 양수만 두 배로 만드는 예제
  const array6 = [-1, 2, -3, 4, 5];

  function doubleIfPositive(item) {
    // 양수일 때만 두 배로
    if (item > 0) {
      return item * 2;
    }
    return item; // 음수는 그대로 반환
  }

  console.log(map(array6, doubleIfPositive));
  console.log(array6.myMap(doubleIfPositive));
  // Expected output: [-1, 4, -3, 8, 10]

  // 예제 7: 짝수만 true로 바꾸기
  const array7 = [1, 2, 3, 4, 5];

  function isEven(item) {
    // 짝수일 경우 true 반환
    if (item % 2 === 0) {
      return true;
    }
    return false; // 홀수는 false
  }

  console.log(map(array7, isEven));
  console.log(array7.myMap(isEven));
  // Expected output: [false, true, false, true, false]

  // 예제 8: 특정 값만 제곱하기
  const array8 = [1, 3, 6, 7, 8];

  function squareIfGreaterThanFive(item) {
    // 값이 5보다 크면 제곱
    if (item > 5) {
      return item * item;
    }
    return item; // 5 이하의 값은 그대로 반환
  }

  console.log(map(array8, squareIfGreaterThanFive));
  console.log(array8.myMap(squareIfGreaterThanFive));
  // Expected output: [1, 3, 36, 49, 64]
};
