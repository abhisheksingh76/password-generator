let inputSlider=document.querySelector("#inputSlider");
let sliderValue=document.querySelector("#sliderValue");

let passBox=document.querySelector("#passBox");
let lowercase=document.querySelector("#lowercase");
let uppercase=document.querySelector("#uppercase");
let numbers=document.querySelector("#numbers");
let symbols=document.querySelector("#symbols");
let generateButton=document.querySelector("#generateButton");
let copyButton=document.querySelector(".copyButton")


//slider value code
sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener("input",()=>{
  sliderValue.textContent=inputSlider.value;
});

//generate button code
generateButton.addEventListener("click",()=>{
  passBox.value=generatePassword();
});

//possible outcomes range
let allLowerCase="abcdefghijklmnopqrstuvwxyz";
let allUpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers="1234567890";
let allSymbols="~!@#$%^&*()_+?|/<>";

//function that generates the password
function generatePassword(){
  let passwordGenerated="";
  let allChars="";
  allChars+=lowercase.checked ? allLowerCase:"";
  allChars+=uppercase.checked ? allUpperCase:"";
  allChars+=numbers.checked ? allNumbers:"";
  allChars+=symbols.checked ? allSymbols:"";

  if (allChars==""||allChars.length==0){
    passwordGenerated="No Label Selected";
    return passwordGenerated;
  }

 let i=1;
while(i<=inputSlider.value){
  passwordGenerated +=allChars.charAt(Math.floor(Math.random()*allChars.length));
  i++;
}
  return passwordGenerated;
  
}
//copy button code
copyButton.addEventListener("click",()=>{
  if(passBox.value !=""|| passBox.value>lenth>=1){navigator.clipboard.writeText(passBox.value);
   copyButton.textContent="copied";
  generateButton.addEventListener("click",()=>{
    if(copyButton.textContent=="copied"){
      copyButton.textContent="copy";
    }
  })
  
}
  
});

