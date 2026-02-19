let inputSlider = document.getElementById("inputSlider");
let SliderValue = document.getElementById("SliderValue");
let passbox = document.getElementById("passbox");
let lowercase =  document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let getbtn = document.getElementById("getbtn");
let copyIcon = document.getElementById("copyIcon");

  sliderValue.textContent = inputSlider.Value;
  inputSlider.addEventListener('input',()=> {
    sliderValue.textContent = inputSlider.Value;
  });
  getbtn.addEventListener('click',()=>{
    passbox.Value = generatePassword();
  })


  let Lowercase ="abcdefghijklmopqrstuvwxyz";
  let Uppercase = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
  let Numbers = "0123456789";
  let Symbols = "~!@#$%^&*";
   function generatePassword(){
    let generatePassword= " ";
    let allchars = " ";
     allchars += lowercase,checked?lowercase:" ";
     allchars += uppercase,checked?uppercase:" ";
     allchars += Numbers,checked?allNubers:" ";
     allchars += Symbols,checked?allchars:" ";
     if(allchars == " "|| allchars.length == 0){
      return generatePassword;
     }
     let i =1;
     while(i<= inputSlider.value){
      genPassword += allchars.charAt(Math.floor
        (Math.random()*allchars.length));
        i++;
     }
     return genPassword;
   }
   copyIcon.addEventListener('click',()=>{
    if(passbox.Value !=" "|| passbox.value.length >=1){
      navigator.clipboard.writeText(passbox.value);
      copyIcon.innerText = "Check";
      copyIcon.title = "Password Copied";
      setTimeout(()=>{
        copyIcon.innerHTML = "content_copy";
        copyIcon.title=" ";
      },3000)
    }
   });