/* 
    Arrangement_chapter_1
    배열과 오브젝트의 성능평가 
*/


let instructor = {
    firstName : "Doil",
    isInstructor: true,
    favoriteNumbers: [1,0,2,5]
}
// instructor라는 변수에 key value 3개를 저장하고 있다. 
/*
    객체는 정렬되어 있을 필요가 없을때 잘 작동한다.
    그리고 빠른 접근, 입력과 제거를 원할때 좋다.
    정렬되어 있지는 않지만 다른 것들은 매우 빠르다 

    빠르다고 했을때 입력,제거, 접근하는 시간이 상수시간이다. 
*/

/*
    자바스크립트가 어떤 정보를 객체안에 상수시간안에 저장할 수 있다. 
    원하는 내용을 상수시간안에 불러올 수도 있다.
*/

/*
    객체는 어떤 상황에도 작동 할 것이며, key value가 모두있고 
    모든 연산 (입력,접근,업데이트,제거)이 상수시간이다.
    탐색의 경우 O(N)은 N에 따라서 자라므로 선형시간 이다. 
*/

Object.keys - O(N)
Object.value - O(N)
Object.entries - O(N)
Object.hasOwnProperty - O(1)