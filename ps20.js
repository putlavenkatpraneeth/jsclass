// function ip(a,b,opr){
// if(a==b)
// }
// function add(a,b){

// }
// function sub(a,b){

// }
// ip(2,3,"+")

// let name="rinku"
// count=0
// for(i=0;i<name[i]==!undefined;i++)
//     count++;
// console.log(count);

// let str="pinku";
// count=0
// for(i=0;i<str.length;i++){
//     if(str[i]=="a"||str[i]=="e",str[i]=="i",str[i]=="o",str[i]=="u"){
//         count++;
//     }
// }
// console.log(count);

// let str="pinku";
// count=0
// for(i=0;i<str.length;i++){
//     if(str[i]!="a"&&str[i]!="e"&&str[i]!="i"&&str[i]!="o"&&str[i]!="u"){
//         count++;
//     console.log(str[i]);
//     }

// }
// console.log(count);

let str = "JavaScript@123";
count = 0;
for (i = 0; i < str.length; i++) {
  code = str.charCodeAt(i);
  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
    console.log(str[i]);
    count++;
    }
  }
}
console.log(count);

let str1 = "JavaScript@123";
let vowels="aeiouAEIOU"


