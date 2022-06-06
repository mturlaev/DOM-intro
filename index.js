const main = document.getElementById("main");
const lorem = document.createElement('h5');

lorem.textContent =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"


lorem.style.color = 'black';
lorem.style.border = '1px solid red';
lorem.style.borderRadius = '10px';
lorem.style.width = '25%';
lorem.style.display = 'flex';
lorem.style.margin = 'auto';
lorem.style.padding = '1%';

const ul = document.createElement("ul");

const intocode = document.createElement("a");
const google = document.createElement("a");
const instagram = document.createElement("a");

intocode.textContent = "intocode";
intocode.href = 'https://intocode.ru'

google.textContent = "google"
google.href = 'https://www.google.ru'

instagram.textContent = "instagram"
instagram.href = 'https://www.instagram.com/'

ul.append(intocode, google, instagram);
ul.style.margin = "auto";
ul.style.display = 'flex';
ul.style.justifyContent = "space-between";
ul.style.width = "23%"
ul.style.padding = "0"
ul.style.paddingTop = "1%"

main.append(lorem, ul);



