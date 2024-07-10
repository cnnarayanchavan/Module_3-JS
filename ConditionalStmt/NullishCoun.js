// Stntax = '??'

let value1 ;
value1 = 100;
value1 = null ?? 20;  // 20
value1 = undefined ?? 20;  // 20
value1 = undefined ?? null;   // this will return 'null'

console.log(value1);