//! ARRAY METHODS

//* 1.length : lenght is the variable to calculate length of the Array

//* 2.indexOf() :  it is used to find index of element present(determine the location) inside the Array

//* 3.reverse() : it is used to Reverse the Array Elements.

//* 4.push() : it is used to push(Add) Multiple Elements in the Array
//! push() method is adds the elements from the Last Index
//? You can add multiple elements 

//* 5.pop() : it is used to remove the Array Elements from the Array
//! pop() method removes elements from the Last Index
//? It will remove only one element at a time 

//* 6.shift() : is used to the remove the elements from the array
//! shift() method is remove the element from the Starting (First) Index
//? It will remove only one element at a time.It is a Non-Parametrized Method  

//* 7.unShift() : unShift() method is adds the element from the Starting (First) Index
//! It is exact opposite of push() method
//? It will adds multiple elements

//* 8.sort() : the sort() method is used to sort the elements
//! But it will not sort the elements in Ascending or Dscending order 
//? It will sort based on the numbers(0-9)
//? It will compare each elements with each index
//todo let arr=[1,0,11,100,0,111] 
//!                 Elements                  [0]                     [1]             Compare                 Result
//todo       arr=[1,0,11,100,0,111]            0                       1               0 > 1                     0
//*       It checks if there is with 0[zero](available) 
//?          [1,11,100,0,111]   =====> Yes    arr[1,11,100,==>0,111]
//todo       arr=[1,0,11,100,0,11             0                       1               0 > 1                     0
//*     It checks if there is 0 is comparable(available)
//?          [1,11,100,111]   =====> No    arr[1,11,100,111]
//*       It checks if there is with 1[one](available) 
//?          [1,11,100,111]   =====> Yes    arr[==>1,==>11,==>100,==>11]
//!     All the element are target beacuse the value is one
//todo      arr=[1,,11,100,111]            Not Present            1,11,100,11     1>11 1>100 1>111             1
//*       It checks if there is with 1[one](available) 
//?          [11,100,111]   =====> Yes    arr[==>11,==>100,==>11]
//!     All the element are target beacuse the value is one 
//todo      arr=[1,,11,100,111]            Not Present            11,100,111      11>100>111                   11
//*       It checks if there is with 1[one](available)
//?          [100,111]   =====> Yes    arr[]==>100,==>111]
//!     All the element are target beacuse the value is one
//todo    arr=[100,111]                  Not Present              100,111          100>111                    100
//*       It checks if there is with 1[one](available)
//?          [100,111]   =====> Yes    ar[==>111]
//todo      arr=[111]                   Not Present                111              111                       111 




