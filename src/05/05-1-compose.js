//2. 전개 연산자로 쉽게 만들기
function compose(...funcArr) {
  console.log(...funcArr);

  //funcArr은 [func , func , func]
  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function (...args) {
        return nextFunc(prevFunc(...args));
      };
    },

    //reduce 초기값
    function (k) {
      return k;
    },
  );
}

export default compose;
