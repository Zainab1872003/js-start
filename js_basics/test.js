console.log("zainab")
// "use strict" only se new version of js 
// alert("hello") will not work in node , not for browser
// we will not use var 
// var - redeclare , update , global scope
// let - update , block scope , cant redeclare
// const , none , block scope 
// dynamic language 
//  by  defualt undefined 
// const must have initializer
//code readibililty should be high
//console.table([name,roll,account])
//number => 2^53
//bigint 
//string => prefer ""
//boolean 
//null stand alone value ---empty 
//undefined --- pta ni kya h (abi valuse assign ni hui)
//symbol uniqueness k liye 
//above =>premitive 
//type of null is object
//type of undefined is undefined 
let score = 33
let valueInNumber = Number(score)
// if scor e= 33abc 
// so it will convert to NaN 
// if score = null then return 0;
// undefined,string , numstring => NaN
let islogin = -1; //number 
let booleamislogin = Boolean(islogin);
console.log(booleamislogin)
// return true(specifically converted) otherwise generally for ture terminal show 1 or for false 0 
// for any number other than 0 true and for anystring other than empty return true
// "1"+2 => 12   1+"2"=>12  "1"+2+2 =>122 1+2+"2"=>32
//+true =>1 true+ error
//+"" => zero
// "2">1 =>true automatically convcert 
// null>0 false 
// null ==0 false 
// null >= true 
//comaparison covert null into 0 
// strict check also check datatype ===
// primitive(value) non premitive classify on the basis how they stored in memory and how they access , call by reference , call by value
//non premitive , reference 
//objects and web events master
const id = Symbol('123')