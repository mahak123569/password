let inputSlider = document.getElementById("inputSlider");
let SliderValue = document.getElementById("SliderValue");
let passbox = document.getElementById("passbox");
let lowercase =  document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let getbtn = document.getElementById("getbtn");
let copyIcon = document.getElementById("copyIcon");

  SiderValue.textContent = inputSlider.Value;
  inputSlider.addEventListener("input",()=> {
    SliderValue.textContent = inputSlider.Value;
  });
  getbtn.addEventListener('click',()=>{
  passbox.value = generatePassword();
  });

  let Lowercase ="abcdefghijklmopqrstuvwxyz";
  let Uppercase = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
  let Numbers = "0123456789";
  let Symbols = "~!@#$%^&*";
   function generatePassword(){
   let generatePassword= "";
    let allchars = "";
     if (lowercase.checked) {
  allchars += Lowercase;
}
if (uppercase.checked) {
  allchars += Uppercase;
}
if (numbers.checked) {
  allchars += Numbers;
}
if (symbols.checked) {
  allchars += Symbols;
}
     if(allchars.length === 0){
      return "";
     }
    //  let i =1;
    //  while(i<= inputSlider.value){
    for(let i=0;i<inputSlider.value;i++){
          genPassword += allchars.charAt(Math.floor
        (Math.random()*allchars.length));
        i++;
     }
     return genPassword;
   }
   copyIcon.addEventListener('click',()=>{
    if(passbox.value.length >0){
      navigator.clipboard.writeText(passbox.value);
      copyIcon.innerText = "Check";
      copyIcon.title = "Password Copied";
      setTimeout(()=>{
        copyIcon.innerHTML = "content_copy";
        copyIcon.title=" ";
      },3000)
    }
   });