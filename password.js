let inputSlider = document.getElementById("inputSlider");
let SliderValue = document.getElementById("SliderValue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let getbtn = document.getElementById("getbtn");
let copyIcon = document.getElementById("copyIcon");
let copyMsg = document.getElementById("copyMsg");
let refreshIcon = document.getElementById('refreshIcon');

// initialize slider label
SliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
  SliderValue.textContent = inputSlider.value;
});

getbtn.addEventListener('click', () => {
  passbox.value = generatePassword();
});

// refresh icon: generate a new password and briefly show a message
if (refreshIcon) {
  refreshIcon.addEventListener('click', () => {
    const newPass = generatePassword();
    passbox.value = newPass;
    // auto-copy new password
    copyText(newPass, 'New password copied');
  });
  // keyboard activation
  refreshIcon.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      refreshIcon.click();
    }
  });
}

const Lowercase = "abcdefghijklmnopqrstuvwxyz";
const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Numbers = "0123456789";
const Symbols = "~!@#$%^&*";

function generatePassword() {
  let password = "";
  let allchars = "";

  if (lowercase.checked) allchars += Lowercase;
  if (uppercase.checked) allchars += Uppercase;
  if (numbers.checked) allchars += Numbers;
  if (symbols.checked) allchars += Symbols;

  if (allchars.length === 0) return "";

  const length = Number(inputSlider.value) || 8;
  for (let i = 0; i < length; i++) {
    password += allchars.charAt(Math.floor(Math.random() * allchars.length));
  }

  return password;
}

copyIcon.addEventListener('click', () => {
  const value = passbox.value || '';
  if (!value) return;
  copyText(value, 'Copied to clipboard');
});

// keyboard activation for copy icon
if (copyIcon) {
  copyIcon.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      copyIcon.click();
    }
  });
}

function copyText(value, successMessage){
  if (!value) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(value).then(() => {
      showCopyFeedback(successMessage);
      // icon swap
      if (copyIcon) {
        copyIcon.innerText = 'check';
        setTimeout(() => (copyIcon.innerText = 'content_copy'), 1500);
      }
    }).catch(() => {
      showCopyFeedback('Could not copy');
    });
  } else {
    passbox.disabled = false; // enable so selection works
    passbox.select();
    try {
      const ok = document.execCommand('copy');
      showCopyFeedback(ok ? successMessage : 'Could not copy');
    } catch (e) {
      showCopyFeedback('Copy not supported');
    }
    passbox.disabled = true;
  }
}

function showCopyFeedback(message){
  if(!copyMsg) return;
  copyMsg.textContent = message;
  copyMsg.hidden = false;
  copyMsg.classList.add('show');
  // remove after short delay
  setTimeout(()=>{
    copyMsg.classList.remove('show');
    copyMsg.hidden = true;
  }, 1600);
}