// Instantiate Github object
const github = new Github();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (event) => {
  // Get input text
  const userText = event.target.value;

  if (userText) {
    // Make HTTP request
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert

        } else {
          // Show profile

        }
      });
  } else {
    // Clear profile
    
  }
});
