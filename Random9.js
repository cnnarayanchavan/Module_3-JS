let Arr = [{Firstname:'Narayan',Lastname:'Chavan',Age:21,Gender:'Male'},
          {Firstname:'Nitin',Lastname:'Chavan',Age:30,Gender:'Male'},
          {Firstname:'Sanjay',Lastname:'Chavan',Age:50,Gender:'Male'},
          {Firstname:'Renuka',Lastname:'Dalwe',Age:27,Gender:'female'},
          {Firstname:'Bharati',Lastname:'Chavan',Age:48,Gender:'femal'}]
var op = Arr.filter(x => x.Age<30)
//console.log(op)          
//now apply map to fetch only first name of user whose age is less than 30
.map(x => x.Firstname)
console.log(op)         
