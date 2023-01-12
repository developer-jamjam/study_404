const x = 'x';

function c() {
    const y = 'y';
    console.log('c');
}

function a() {
    const x = 'x';
    console.log('a');
    function b() {
        const z = 'z';
        console.log('b');
        c();
    }
    b()
}

a(); // console 에 찍히는 순서 a , b , c
c(); // c

/*
    javaScript 코드 위에서 아래로 왼쪽에서 오른쪽으로 (일반적)
    연산자 우선순위에 따라 오른쪽에서 왼쪽인 경우도 있긴 하다.
*/

/* 
    Stack => 밑에서 부터 하나씩 쌓이고 빠져나갈때는 위에서 부터 빠져나가는 구조 (LIFO , FILO )
        Last In First Out
        First In Last Out
    Queue => 먼저 들어온 것이 먼저 나가는 구조 (FIFO)   
        First In First Out 
*/