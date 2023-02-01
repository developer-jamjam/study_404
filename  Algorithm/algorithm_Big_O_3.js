/* 
    BigO_chapter_3
    BigO 소개
*/
/*
    n = 값이 입력되는 펑션 이며 출력값이 있다.
    입력과 실행 시간의 관계를 뜻하는 것 

    f(n) could be linear (f(n) = n ) // n의 값이 커질수록 실행 시간도 같이 늘어난다 
    f(n) could be quadratic (f(n)= n²) // n의 값이 커질 수록 n의 제곱만큼 시간이 늘어날 수도 있다.
    f(n) could be constant (f(n)=1) // n이 커져도 시간에는 아무 영향도 받지 않기 때문에 항상 상수 , 이것을 단순하게 1이라고 표현한다.
    f(n) could be something entirely different // 완전히 다를수도 있다. 
*/

function addUpTo2(n) { 
    return n * (n + 1) / 2; 
    /*
        n의 값이 크던 작던 n의 값과는 상관없이 연산이 3번 이루어 진다.
        시간이 상수다 
        BigO = 1 
        O(1)로 표기 
    */
}

function addUpTo1(n) {
    let total = 0; 
    for (let i = 1; i <= n; i++) { 
      total += i; 
      /* 
        모든 연산을 세는 것이 쉽지 않다.
        눈에 보이는 것만 세도 5n + 2  만큼 .. 
        n이 커지는 만큼 연산횟수도 비례젹으로 증가 

        n의 값에 따라 시간이 n * n 이상으로 증가 
        O(n)로 표기 
      */
    }
    return total;
  }

  /* 
    Q . 해당 펑션의 BigO를 찾아보자
  */
function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
        console.log(i); 
    }
    console.log("At the top!\nCoing down...");
    for (let j = n - 1; j >=0; j--) {
        console.log(j); 
    }
    console.log("Back down. Bye!");
  } 

  /*
    for (let i = 0; i < n; i++) {
        console.log(i); 
    } 
    n이 커질수록 loop가 실행하는 횟수가 늘어난다 O(n)

    for (let j = n - 1; j >=0; j--) {
        console.log(j); 
    } 
    동일하게 n이 커질수록 loop가 실행하는 횟수가 늘어난다 O(n)
    똑같은 작업을 거꾸로 하는 것일 뿐 

    BigO가 2n이라고 생각할 수 있겠지만 그렇지 않다. 
    그걸 신경쓰는것이 아닌 큰 그림만을 신경 쓰므로 O(n)으로 표현 
  */
function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i.j);
        }
    }
}
/* 
    중첩 loop 
    5를 입력시 0 부터 5까지 가능한 숫자 짝을 모두 출력 할 것 이다. 
    ( ex) 0.0 , 0.1 , 0.2 ..... 5.5 ) 

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i.j);
        } => O(n)
    } => O(n)


    O(n) 이 아니다 
    O(n) 연산안에 O(n)연산이 있기 때문에 O(n²) 이 된다.

*/

/*
    기본적으로 입력인 n이 커질수록 알고리즘이 얼마나 효율적인지 표현하는 방식 
*/