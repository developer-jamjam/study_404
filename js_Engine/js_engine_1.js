const add = (a, b) => a + b ; // 함수 선언 
//add = (a,b) => {a + b }  * 이렇게 할 시 함수의 body로 인식한다.
//const add = (a, b) => ({a+b}); 객체를 리턴할 때는 감싸줘야한다. 

function calculator(func, a, b) {
    return func(a, b);
} // 함수 선언 

add(3, 5); // 8 
calculator(add, 3, 5); // 8 
/* 
    functions calculator(add, 3, 5) {
        add(3, 5);
    } 
*/

/*
    함수 호츨을 보면 머릿속으로 리턴값으로 대체한다.
    document.querySelector('#header').addEventListener('click', add());
    => document.querySelector('#header').addEventListener('click', a+b );
    올바른 코드 
    document.querySelector('#header').addEventListener('click', add); 
    //함수 호출X 
*/

/* 함수를 호출 하는 경우의 코드 */
const onClick = () => () => {
    console.log('hello');
}
document.querySelector('#header').addEventListener('click', onClick());
// return 값으로 대체 시 
document.querySelector('#header').addEventListener('click', () => {
    console.log('hello');
}); // 올바른 코드 
