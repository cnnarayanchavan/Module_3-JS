let num = 1;
function show(){
  console.log("HI" + num)
  num++;
  show();
}
show();
