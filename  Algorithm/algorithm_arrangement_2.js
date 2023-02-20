/* 
    Arrangement_chapter_2
    배열 성능평가 
*/

/*
    배열에 가장 중요한 점 => 정렬이 되어있다.
    정렬되어 있는 것이 필요하다면 유용하지만, 연산을 하는 시간이 더 걸릴 수 있다. 
    특히 입력과 제거를 할때 그렇다. 

    배열의 끝에 값을 추가 혹은 제거 할때 => O(1) 상수시간
    배열의 앞에 추가 혹은 제거 할때 => O(N) 선형시간 

    비어있는 배열일때를 제외하고 push와 pop하는 작업이 shift와 unshift 작업보다 빠르다. 
*/

/*
    배열 메소드 O(N)
    concat()
    slice()
    splice()
    forEach/map/filter/reduce/etc...

    정렬의 경우 O(N *log N)
*/