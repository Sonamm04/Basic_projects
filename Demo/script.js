// //reference data type =>{},[],()

// // var arr = [1,2,3,4,5,6];
// // var  b=arr;
// // b.pop();
// // console.log(arr);
// // console.log(b); 
// // address of arr is being paased  in b , so changes  is only in arr, as  b is  only have arr address


//   // primitive data type
//   var a=12;
//  b=a+2;
//  console.log(a);
//  console.log(b);
// //b is copy of the a but any changes made in b does not reflected in a . value of a  is 12 and value of b is 14 as 2 is being aded .copy of a is being passed  and 2 was added in the 2
// //this keyword


// //global- window
// console.log(this);

// //function- window
// function abcd(){
//     console.log(this);
// }
// abcd();

// //method-object[ object k andar  function to method bn gya]
// var obj = {
//     name:function(){
//         console.log(this.email);
//     },
//     age:25,
//     email:"sonammourya7683@gmail.com"
// }
// obj.name();// access the data

// //fn inside  method(es5)- window
// var obj2 = {
//    sayname: function(){
//         function childfnc(){
//             console.log(this)
//         }
//     }
// }
// obj2.sayname();
// //fn inside method(es6)-wndow
// var obj3={
//     sayName:function(){
//         const child =()=>{
//             console.log(this);
//         }
//         child();
//     }
// }

// obj3.sayName()
// //constructor fnc mai this is value - new blank object

// function add(){
//     console.log(this)
// }
//   const ans=new add();

//   //event listener men thiski value - that element jis par lis. laga ho
//   document.querySelector("button")
//   .addEventListener("click",function(){
//     console.log(this)
//   })
//accessing the element
var abcd=document.querySelector("#btn");
abcd.textContent ="staring in 2s";
var az = document.querySelector("h1");
az.textContent= "my self sonam"
//Modifying the text

var hello = document.querySelector("h2");
hello.textContent += " world";
// innerHTML
  var h3 = document.querySelector("h3");
  h3.innerHTML =  '<i>hello</i>';