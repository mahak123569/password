let inputSlider = document.getElementById("inputSlider");
let SliderValue = document.getElementById("SliderValue");
let passbox = document.getElementById("passbox");
let lowercase =  document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let getbtn = document.getElementById("getbtn");
let copyIcon = document.getElementById("copyIcon");
  SliderValue .textContent = inputSlider.ariaValueMax;
  inputSlider.addEventListener('input',()=> {
    SliderValue.textContent = inputSlider.Value;
  });
  getbtn.addEventListener('Click',()=>{
    passbox.Value = generatePassword();
  })


  let Lowercase ="abcdefghijklmopqrstuvwxyz";
  let Uppercase = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
  let Numbers = "0123456789";
  let Symbols = "~!@#$%^&*";
   function generatePassword(){
    let generatePassword= " ";
  

   }