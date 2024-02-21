const text =
  "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";

const findCountry = text.match(/Spain/g);
const indexOfCountry = text.matchAll(/(Spain)/g);
const replaceCountry = text.replace("Spain", "France");
const replaceAllCountry = text.replaceAll(/Spain/gi, "France");
const searchText = text.search(/plain/g);

// console.log(findCountry);
// console.log(...indexOfCountry);
// console.log(replaceCountry);
// console.log(replaceAllCountry);
// console.log(searchText);

// Validation Form

const user1 = {
  name: "",
  age: "23",
  email: "kevin@gmail.com",
  phoneNumber: +351968745632,
  password: "Ali&mov12",
};
const user2 = {
  name: "Nick",
  age: 24,
  email: "nick@gmail.com",
  phoneNumber: +351968145632,
  password: "kkvkr",
};
const user3 = {
  name: "Micheal",
  age: 45,
  email: "",
  phoneNumber: +351968745622,
  password: "Ali&mov12",
};

let { name, age, email, phoneNumber, password } = user1;
let { name2, age2, email2, phoneNumber2, password2 } = user2;
let { name3, age3, email3, phoneNumber3, password3 } = user3;

function validateName(name) {
  return /^[a-zA-Z]+$/.test(name) ? true : "Name zorunlu bir alandır";
}
function validateEmail(email) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email) ? true : "Email zorunlu bir alandır";
}
function validatePassword(password) {
  if (!/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/gm.test(password)) {
    return "Password must contain at least one digit, one special character, one lowercase letter, one uppercase letter, and be at least 8 characters long.";
  }
  return true;
}

console.log(validateName(name));
console.log(validateEmail(email));
console.log(validatePassword(password2));
