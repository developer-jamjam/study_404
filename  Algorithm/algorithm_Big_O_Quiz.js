/* 
    BigO_chapter_Quiz
    BigO Quiz
*/


/*
    다음 빅오 표현식을 간단하게 표현하면 ?
        Q1.  O(n+10)
        Q2.  O(100*n) 
        Q3.  O(25)
        Q4.  O(n^2 + n^3)
        Q5.  O(n + n + n + n)
*/

/*
    답 
    Q1.  O(n)
    Q2.  O(n)
    Q3.  O(1)
    Q4.  O(n^3)
    Q5.  O(n)
*/

/*
    아래의 함수에 대한 시간 복잡도를 구하세요
*/

function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
// for loop n의 값에 따라 돈다  O(n)

function logAtMost10(n) {
    for (var i =1; i <= Math.min(n,10); i++) {
        console.log(i);
    }
}
// for loop 이긴 하지만 , n의 값의 크기가 얼마이던 10보다 작으면 작은 만큼 10보다 크면 그 값이 1000이던 
// 1000000이던 관계없이 10번만 출력 된다 그러므로 O(1)

function logAtLeast10(n) {
    for (var i =1; i <= Math.max(n,10); i++) {
        console.log(i);
    }
}
// for loop , n의값이 10보다 작으면 10번 출력 , 10보다 크면 그 큰수 만큼 출력 된다
// n의 값이  100000이면 100000만큼 출력 된다 그러므로 O(n)

function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
// array의 값 연산 후 for loop 돌고 newArray return 
// n 의 값이 커질수록 연산횟수도 늘어난다  O(n)
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

// array값을 받아 subtotalArray 값 셋팅 
// for loop 안에 for loop  2중 for loop 
// subtotalArray값 리턴 
// O(n²)