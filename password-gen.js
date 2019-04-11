const MIN_UPPER = 65;
const MAX_UPPER = 90;
const MIN_SPECIAL_1 = 33;
const MAX_SPECIAL_1 = 47;
const MIN_SPECIAL_2 = 58;
const MAX_SPECIAL_2 = 64;
const MIN_SPECIAL_3 = 123;
const MAX_SPECIAL_3 = 126;
const MAX_NUM = 9;

const ASCII_MIN = 33
const ASCII_MAX = 126

function generatePassword(n=15) {
  if (n < 10 || n > 25) {
    n = 15;
  }

  let password = [];

  // Generate random upper case character
  const upper_case = String.fromCharCode(Math.floor(Math.random()*(MAX_UPPER + 1 - MIN_UPPER)+MIN_UPPER));

  // Generate random special character
  let special_char;
  
  switch(Math.floor(Math.random() * (3))) {
    case 0:
      special_char = String.fromCharCode(Math.floor(Math.random()*(MAX_SPECIAL_1 + 1 - MIN_SPECIAL_1)+MIN_SPECIAL_1));
      break;
    case 1:
      special_char = String.fromCharCode(Math.floor(Math.random()*(MAX_SPECIAL_2 + 1 - MIN_SPECIAL_2)+MIN_SPECIAL_2));
      break;
    case 2:
      special_char = String.fromCharCode(Math.floor(Math.random()*(MAX_SPECIAL_3 + 1 - MIN_SPECIAL_3)+MIN_SPECIAL_3));
      break;
  }

  // Generate random number
  const number = Math.floor(Math.random()*(MAX_NUM + 1 - 0)+0);

  for(let i=0;i<n;i++) {
    password.push(String.fromCharCode(Math.floor(Math.random()*(ASCII_MAX + 1 - ASCII_MIN) + ASCII_MIN)));
  }

  const half_index = Math.floor(n/2);
  password[0] = special_char;
  password[half_index] = upper_case;
  password[n-1] = number;

  let tmp;
  let random_index = Math.floor(Math.random()*n);
  tmp = password[random_index];
  password[random_index] = password[0];
  password[0] = tmp

  random_index = Math.floor(Math.random()*n);
  tmp = password[random_index];
  password[random_index] = password[half_index];
  password[half_index] = tmp

  random_index = Math.floor(Math.random()*n);
  tmp = password[random_index];
  password[random_index] = password[n-1];
  password[n-1] = tmp

  password = password.join('');
  console.log(password);
  return password;
}

function getGeneratedPassword() {
  // const length = document.getElementById("size").value;
  const password = generatePassword(15);
  document.getElementById("password").innerHTML = password;
  document.getElementById("password").value = password;
  const copyPassword = document.getElementById("password");
  copyPassword.select();
  document.execCommand('copy');
}

function copyText() {
  const copyPassword = document.getElementById("password");
  copyPassword.select();
  document.execCommand('copy');
}
