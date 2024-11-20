// let arr1 = ["rin", "pin", "tin"];
// let x1 = arr1.forEach((a) => {
//   return a.slice(0, -1) + a.at(-1).toUpperCase();
// });
// console.log(x1);

// let arr=[1,2,3,4,,5,6];
// let x2=arr.filter((a)=>{
//     return a%2==0
// })
// console.log(x2);
const users = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25, isActive: true },
  { id: 2, name: "Bob", email: "bob@example.com", age: 30, isActive: false },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    age: 28,
    isActive: true,
  },
];

let opp=users.filter((a)=>{return a.isActive})

let fin=opp.map((x)=>{x.name})

console.log(fin);


// const products = [
//   { id: 101, name: "Smartphone", price: 699.99, category: "Electronics", inStock: true, ratings: 4.5 },
//   { id: 102, name: "Laptop", price: 1199.99, category: "Computers", inStock: false, ratings: 4.7 },
//   { id: 103, name: "Wireless Headphones", price: 199.99, category: "Accessories", inStock: true, ratings: 4.3 },
//   { id: 104, name: "Smartwatch", price: 149.99, category: "Wearables", inStock: true, ratings: 4.2 },
//   { id: 105, name: "Gaming Console", price: 499.99, category: "Gaming", inStock: true, ratings: 4.8 }
// ];
// let x2=products.map((a)=>{
//     if(a.ratings>=4.5){return a.name}
// })
// console.log(x2);
