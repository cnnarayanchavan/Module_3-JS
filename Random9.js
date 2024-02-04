let Arr = [{Firstname:'Narayan',Lastname:'Chavan',Age:21,Gender:'Male'},
          {Firstname:'Nitin',Lastname:'Chavan',Age:30,Gender:'Male'},
          {Firstname:'Sanjay',Lastname:'Chavan',Age:50,Gender:'Male'},
          {Firstname:'Renuka',Lastname:'Dalwe',Age:27,Gender:'female'},
          {Firstname:'Bharati',Lastname:'Chavan',Age:48,Gender:'femal'}]

          // op = Arr.map(x => {
          //   if (x.Age<30) {
          //   console.log(x.Firstname)
          // }}
          // )
        function firstName(Arr){
                  if(Arr.Age<30){
                    console.log(Arr.Firstname)
                  }
        }

          let Output = Arr.map(firstName(Arr))
console.log(Output)
