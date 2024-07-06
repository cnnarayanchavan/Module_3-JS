// //suppose you have an userData coming from tcs application form
// const userData = {
//     fullName : {
//         firstname : "Narayan",
//         middlename : "Sanjayrao",
//         lastName : "Chavan"
//     },
//     applicationStatus : "Loged in",
//     dtID : "D2024556677",
//     declarationStatus : true,
//     isSubmitted : function() {
//         if (!this.isSubmitted) {
//             console.log(false);
//         }else {
//             console.log(true);
//         }
//     }

// }

// //retrive application status with easy access

// //Destrecturing of object 

// const{isSubmitted:sTT} = userData;
// console.log(sTT());


//functions 

function addNums(num1,num2){
    return num1 + num2;
}

addNums(10,10) //here you have just called a function but did not print 
//console.log( addNums(10,10)); //here you print the function //as function is returning in his body


function greetUser(username){
    return `hello ${username} welcome to e-cart`
}
let result = (greetUser("Narayana"));
//console.log(result);

function sayHello(){
let result = console.log("Hey there!!");  //here it will aslo give the undefine as well
}

//console.log(sayHello());


//greet usern

function greetNarayan(user){  //here if username not provided whtn by default it will print "sam"
    if (!user) {
        return "Please enter username";
    }
    return `Hello ${user} how are you!!`
}
console.log(greetNarayan("Narayan"));

                            