// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (event) => {
  // Get input text
  const userText = event.target.value;

  if (userText) {
    console.log(userText);
  }
});
