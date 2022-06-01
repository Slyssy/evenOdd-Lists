let usersWord = '';
let oddList = document.querySelector('#odd');
let evenList = document.querySelector('#even');

//? create a function that will update this variable when the user types in.
function updateWord(element) {
  usersWord = element.value;

  console.log(usersWord);
}

//? function that will create a new element (<li>), put the input as its
//?innerText and append it to the Odd List:
function handleSubmit() {
  let newListItem = document.createElement('LI');
  newListItem.innerText = usersWord;

  if (usersWord.length % 2 === 0) {
    evenList.appendChild(newListItem);
  } else {
    oddList.appendChild(newListItem);
  }

  usersWord = '';
  document.getElementById('even-odd-form').reset();
}
