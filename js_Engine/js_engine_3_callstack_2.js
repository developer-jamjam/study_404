const x = 'x'; // 선언 

function c() {
    const y = 'y';
    console.log('c');
} // 선언 

function a() {
    const x = 'x';
    console.log('a');
    function b() {
        const z = 'z';
        console.log('b');
        c(); // function c 호출
    } // function b  선언 
    b() //function b 호출 
} // function a 선언 

a(); //function a 호출
c(); //function c 호출

/*
    Scope chain ? 특정함수에서 어떤 값에 접근할 수 있는지 알려준다.
*/

/* 
    Code callstack 
    anonymous (파일을 실행한다는 자체를 또하나의 함수라고 보고 그 함수가 anonymous라고 생각하면 된다.)
    function a 호출  => const x = 'x' 선언 , console.log('a') => fucntion b 선언 
    => function b 호출 => const z = 'z' 선언 => console.log('b') 
    => function c 호출 => const y = 'y' 선언 => console.log('c') 
    => function c End
    => function b End 
    => function a End 

    function c 호출 => const y = 'y' 선언 , console.log('c') => function c End
    => function c End 
    => anonymous End 
*/