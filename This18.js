// here we are calling methods properites using this keyword instead of using method name

let Student = {
  Class:'10th',
  Division:'B',
  Subject:'Advance_SQL',
  PRNumber:'72158292D',
  Name: {
    ID:0011,
    name:'Narayan Chavan',
    Add:'Gavane Chwok Parbhani',
    Gender:'Male',
  }
  Qualification: function(){
  console.log('Distinction from Bal Vidhya Mandir');
}
}
Qualification();
