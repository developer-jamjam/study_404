/* 
    Big0_chapter_2
    연산 갯수 세기
*/


function addUpTo2(n) { 
    return n * (n + 1) / 2; 
    /*
        n * (n + 1) / 2 
        n * => 1 multiplication
        (n + 1) => 1 addition
        / 2 => 1 division

        n의 값이 크던 작던 n의 값과는 상관없이 연산이 3번 이루어 진다.
    */
}

function addUpTo1(n) {
    let total = 0; 
    for (let i = 1; i <= n; i++) { 
      total += i; 
      /* 
        if n = 5 , 5번 연산 * 2 
        if n = 20 , 20번 연산  * 2 
        = 도 연산이다.
        n additions 
        n assignments 
        
        But 
        i++ 도 연산 += 1 과 같다.
        <= 비교 하는 것도 연산 
        모든 연산을 세는 것이 쉽지 않다.
        눈에 보이는 것만 세도 5n + 2  만큼 .. 
        n이 커지는 만큼 연산횟수도 비례젹으로 증가 
      */
    }
    return total;
  }

  /* 
    정리 : 연산의 갯수가 5n + 2 이던 3n 이던 50n이던 상관 없다. 
    중요한 것은 전체적인 추세를 보는 것 ..! 
    BigO를 볼 때 이런 것에 집중 할 것. 
    가장 중요한 것은 큰 그림 ! 
  */

    /*
        시간 복잡도 시각화 => https://rithmschool.github.io/function-timer-demo/
  /*
    시간 복잡도 시각화 => https://rithmschool.github.io/function-timer-demo/ 
   */