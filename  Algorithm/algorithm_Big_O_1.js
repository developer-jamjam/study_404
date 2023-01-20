/* 
    Big0_chapter_1 
    숫자를 입력받아 1~ 입력받은 숫자만큼 더한 값을 구하는 코드를 작성 하시오 
*/

function addUpTo1(n) {
    let total = 0; // total이라는 변수를 선언 
    for (let i = 1; i <= n; i++) { // for문을 사용하여 var i = 1 , i 가 입력받은 숫자 n보다 작거나 같을때까지 돌고 i는 1씩 증가 
      total += i; // for문을 도는 동안 total에 i값을 더한다 
    }
    return total; //for문이 끝나고 구해진 total값을 return 
  }
  
  var t1 = performance.now(); 
  /*
    performance.now() ? 
        window의 performance객체를 활용하는 방법
        performance.now()메서드는 밀리초 단위로 측정된 DOMHighResTimeStamp (en-US) 를 반환
        DOMHighResTimeStamp라는건 시스템 clock과 상관없이 메인 컨텍스트를 기준으로 측정된다. 그래서 브라우저마다 다른 값이 나온다.
  */
  addUpTo1(1000000000);
  var t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)


  function addUpTo2(n) { //입력받은 숫자값 = n
    return n * (n + 1) / 2; // 입력받은 숫자값에 +1을 더한 값과 입력받은 숫자값을 곱하고 2로 나눈 값을 return 
    // addUpTo1 과 결과 값은 동일하다. 
  }
  
  var time1 = performance.now();
  addUpTo2(1000000000);
  var time2 = performance.now();
  console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

  /*
    동일한 결과값을 출력하는 코드지만, addUpTo1 보다 addUpTo2가 더 빠르다. 
    시간적인 부분으로 계속해서 체크하는 것이 나쁘다곤 할 수 없지만 만약 그 코드가 작동하는데 걸리는 시간이 길다면 ...?
    그걸 계속해서 시간을 체크하며 구분하기엔 ... 조금.. 
    시간을 측정하지 않아도 코드를 비교 할 수 있는 특정한 값 => 이럴때 필요한게 바로 BigO표기법 !!!!!! 
  */