const myArr = [
    {
        "Programing language" : "javascript",
        "Extention" : "js",
    },
    {
        "Programing language" : "Python",
        "Extention" : "py",
    },
    {
        "Programing language" : "rudy",
        "Extention" : "ry",
    },
    {
        "Programing language" : "java",
        "Extention" : "java",
    },
]

// console.log(myArr);
//retrive the name of extention of each programing language 

myArr.forEach( (item)=>{
    console.log(item["Programing language"]);
} )