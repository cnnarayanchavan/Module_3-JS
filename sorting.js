// sorting in js

let arr = [4,5,3,7,9,8];
for(i=0; i<arr.length; i++){
  for(j=0; i<arr.length-1-i; j++){
    if(arr[j+1]<arr[j]){
      temp = arr[j];
      arr[j] = arr[j+1] 
      arr[j+1] = temp
      }
    }
  for(i=0; i<arr.length; i++){
    console.log(arr[i] + " ");
}

  }
