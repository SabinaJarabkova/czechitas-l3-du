// tady je místo pro náš program

let output = document.querySelector('.vystup');

let firstName = String(prompt('Your first name is?'));
let lastName = String(prompt('Your last name is?'));
let yearOfBirth = Number(prompt('Your year of birth is?'))

output.innerHTML = firstName + ' ' + lastName + '-' + yearOfBirth;

let favoriteColor = String(prompt('Your favorite color is - please, in english?'));
output.style.color = favoriteColor; 
