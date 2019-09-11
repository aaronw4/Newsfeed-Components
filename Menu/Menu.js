/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component 
  as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, 
  iterate over the array creating a list item <li> element 
  for each item in the array. Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button 
  (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. 
  When clicked it should toggle the class 'menu--open' on the menu 
  (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function menuComp(items) {
  let menu = document.createElement('div');
  let ul = document.createElement('ul');
  let students = document.createElement('li');
  let faculty = document.createElement('li');
  let whatsNew = document.createElement('li');
  let tech = document.createElement('li');
  let music = document.createElement('li');
  let logOut = document.createElement('li');

  menu.appendChild(ul);
  ul.appendChild(students);
  ul.appendChild(faculty);
  ul.appendChild(whatsNew);
  ul.appendChild(tech);
  ul.appendChild(music);
  ul.appendChild(logOut);

  students.textContent = menuItems[0];
  faculty.textContent = menuItems[1];
  whatsNew.textContent = menuItems[2];
  tech.textContent = menuItems[3];
  music.textContent = menuItems[4];
  logOut.textContent = menuItems[5];

  menu.classList.add('menu');

  let menuButton = document.querySelector('.menu-button');

  menuButton.addEventListener('click', (e) => {
    menu.classList.toggle('menu--open');
  })

  return menu;
}

let header = document.querySelector('.header');
menuItems.forEach(items => {
  header.appendChild(menuComp(items));
})