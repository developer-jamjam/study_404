/*
    Scope Chain
*/

/*
    함수에서 어떤 값에 접근이 가능한가 어떤 값에 접근이 불가능한가 
    JS => 2015년 (ES2015) 기준으로 대규모 변경 함수기준에서 block 기준으로 변경 

    
    function () {}; block
    if () {}; block 
    for () {}; block
    while() {}; block
    switch() {}; block
    const conan = () => {}; block
*/

{} // 이것도 block이다 객체 X , 객체로 만들려면 ({})

const vermouth = () => {}; // block , 객체리턴으로 하려면 ({})

const x = 'x1';

function c() {
    const y = 'y';
    console.log('c');
}

function a() {
    const x = 'x2';
    console.log('a');
    function b() {
        const z = 'z';
        console.log('b');
        c();
    }
    b();
}

/*
    function c() {..} => anonymous
    function a() {..} => anonymous
    
    function b() => function c() => anonymous
    fucntion b()의 부모는 function c()

    scopeChain 분석 방법 
    한번 코딩 해놓으면 scope 는 변하지 않는다. 
    함수의 선언들만 보고 부모함수 확인 해서 anonymous까지 가보면 된다.
*/

/*
    선언지도
    anonymous => x , c, a
    c => y 
    a => x,b
    b => z
*/

/*
    function a () {
        console.log('x');
    } 
    할 때 console에 찍히는 x 의 값은?
    x2 Why?? 선언지도에서 먼저 a를 바라보고 그 a에 해당값이 있으면 
    거기서 목적 달성 한 것 이므로 끝 그러므로 x의 출력값은 x1 
*/