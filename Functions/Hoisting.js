


//inner function accessing the values or properties from outer function it is kind a clouser 

//for that 
//Lets understand the nested scopes

function one(){
    let name = "Narayana";
    const price = 100;

    function tow(){
        let user2 = "Nitin";
        return `name is ${name} and price is ${price}`  //here we access the outer function properties "name" & "price"
                                                        //means that the child function can access the properties of parent function 
    }

   // console.log(tow());  
    //console.log(user2);  //here it will give the reference error as user2 is not define in the outer function

}

one();


//====================Interesting====================================//

//first we need to understand that JS Variables can hold anything *to powerful you know..*


console.log(addOne(10)); //this will return 11

function addOne(num){
    return num + 1;
}

//addOne(5); //it will not returning anything as we are just calling the function


myFun(10);  // this will give an error of execution context that " Cannot access 'myFun' before initialization"  //try yourself

const myFun = function(number){  //here the my fun is the  ' FUNCTION EXPRESSION' 
    return Number + 100;
}

//myFun(5);

//Hoisting : Execution context like we can not access the property or some.. before initialisition 

//so in above function functions what  we will do we call the function addOne before declaration 
//check line number 38 then - > 32

//now we are going to do the same for the Expression means for "myFun" variable which holdes the function 
//check line 45 then - > 40 