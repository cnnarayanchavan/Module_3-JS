let obj1 = {
  username : "NarayanaChavan",
  id : 11001,
  email : "cnnarayan@google.com",
}

let obj2 = obj1;
obj2.email = "Cnnarayanchavan@gmail.com"
console.log(obj1.email);
console.log(obj2.email);  //so from that we can say that in non primetive data type we have pass by reference in which it will gives the original reference the new value
