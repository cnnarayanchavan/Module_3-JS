let arr = [
    "Narayana",
    "Nitin",
    "Renuka",
    "Pooja",
    "Moni"
]

function printElement(item){
        console.log(item);

}
//printElement(arr)

arr.forEach( (ele)=>{
        console.log(ele)
} )
arr.forEach(printElement)

arr.forEach( (ele,index,array)=>{   //other than value it has also 'index' and whole 'array'
        console.log(ele,index,array)
} )
arr.forEach(printElement)
