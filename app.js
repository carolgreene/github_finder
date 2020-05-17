//Init Github
const github = new Github

//Init UI
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser')

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
  //get user input
  const userText = e.target.value;

  if(userText !== '') {
    //make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        ui.showAlert('User not found', 'alert alert-danger');

      } else {
        //show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }    
    })    
  } else {
    ui.clearProfile()
  }
})