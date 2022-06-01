let usersWord = '';
const oddList = document.querySelector('#odd');
const evenList = document.querySelector('#even');
const submit = document.querySelector('#submit');
const input = document.querySelector('#word');

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

word.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    submit.click();
  }
});
