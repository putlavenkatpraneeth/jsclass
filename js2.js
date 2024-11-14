// let num=12356798;
// ev=0;
// od=0;
// while(num>0){
//     let digit=num%10
//     if(digit%2==0){
//         ev=ev*10+digit
//     }
//     else{
//         od=od*10+digit
//     }
//     num=Math.floor(num/10)

// }
// console.log(ev,od);

let num = 12457678;
even = 0;
odd = 0;
while (num > 0) {
  digit = num % 10;
  if (digit % 2 == 0) {
    even++;
  } else {
    odd++;
  }
  num = Math.floor(num / 10);
}
console.log(even, odd);
