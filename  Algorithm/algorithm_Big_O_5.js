/* 
    BigO_chapter_5
    공간 복잡도 
*/

/*
    이전까지의 내용은 시간과 관련되어 알고리즘들이 얼마나 빠르게 실행하는지에
    대한 시간 복잡도 를 학습 입력이 커질수록 알고리즘의 실행속도가 어떻게 바뀌는지를 분석했다.
    이제는 입력이 커질수록 알고리즘이 얼마나 많은 공간을 차지하는지에 대해서 알아갈 차례 

    입력되는 것을 제외하고 알고리즘 자체가 필요로 하는 공간을 의미 한다.
    n이 커질수록 입력이 커진다는 것을 가정 
    공간 복잡도 = 보조 공간 복잡도 (특별한 경우 제외) 

    1. booleans , numbers, null , undefined => javaScript에서 불변공간
        => 입력의 크기와는 상관없이 숫자가 1이든 1000000이든 모두 불변공간 이라고 여긴다.
        => booleans가 거짓이든 사실이든 똑같은 공간을 차지
    2. 문자열의 경우 O(n) 공간이 필요
        => if 문자열이 50자라면 1글자인 문자열보다 50배 더 많은 공간을 차지하게 될 것.
    3. reference types 배열과 객체도 같다. 대부분 O(n)이라고 생각
        => n은 배열의 길이이거나 객체의 키 갯수일 수 있다.
        => if 배열의 길이가 4이고 또 하나 배열의 길이가 2라면 긴 배열이 짧은 배열보다 2배 더 많은 공간을 차지
*/

function sum(arr) {
    let total = 0; // one number
    for (let i = 0; i < arr.length; i++) { // let i = 0 another number
        total += arr[i];
    }
    return total;
}

/*
    해당 펑션의 경우 배열을 받아 그 배열안에 있는 모든 아이템을 합할 것이다.
    total = 0 , one number 
    let i = 0 , another number
    차지하는 공간은 끝 for loop 안에서 다시 total로 돌아오지만 이미 공간을 할당되어 있다.
    그러므로 배열의 크기와는 상관없이 n이커진다 해도 1000 이던 1000000이던 ..
    입력의 크기가 차지하는 공간과는 아무 상관없다 두 변수 밖에 없기 때문에 
    두 변수는 어떤 상황에도 존재하며 total 변수에 더하는 것 뿐 새로운 변수를 만들지는 않는다.
    결국 상수 공간이 있다는 것 O(1) 입력의 크기와는 상관없이 항상 같다.
*/

function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

/*
    해당 펑션은 배열을 입력받아 newArr이라는 새로운 배열을 만들고 그 다음 받아온 배열 값들을 for loop로 접근 하여
    곱한 후 newArr에 push , for loop 끝나면 newArr return
    입력된 배열의 길이가 10이면, newArr에 저장되는 item이 10개가 되어 return
    입력된 배열의 길이가 50이면, 새로운 배열에 저장되는 item이 50개가 되어 return
    차지하는 공간은 입력 된 배열의 크기오 ㅏ비례해서 커지게 된다.
    그러므로 O(n)
*/
