class UI {
  constructor () {
    this.profile = document.getElementById('profile');
  }

  // Display profile in UI
  showProfile (user) {
    let memberSince = new Date(user.created_at);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    memberSince = `${months[memberSince.getUTCMonth()]} ${memberSince.getFullYear()}`;

    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos ? user.public_repos : 0}</span>
            <span class="badge badge-secondary">Public Gists: ${user.gists ? user.gists : 0}</span>
            <span class="badge badge-success">Followers: ${user.followers ? user.followers : 0}</span>
            <span class="badge badge-info">Following: ${user.following ? user.following : 0}</span>
            
            <br><br>

            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company ? user.company : 'N/A'}</li>
              <li class="list-group-item">Website: ${user.blog ? user.blog : 'N/A'}</li>
              <li class="list-group-item">Location: ${user.location ? user.location : 'N/A'}</li>
              <li class="list-group-item">Member Since: ${memberSince}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos">

      </div>
    `;
  }

  // Clear profile from UI
  clearProfile () {
    this.profile.innerHTML = '';
  }

  // Show user repos
  showRepos (repos) {
    let output = '';

    repos.forEach(function (repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count ? repo.stargazers_count : 0}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count ? repo.watchers_count : 0}</span>
              <span class="badge badge-success">Forks: ${repo.forks_count ? repo.forks_count : 0}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Display repos to UI
    document.getElementById('repos').innerHTML = output;
  }

  // Show alert message
  showAlert (message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    // Add message text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div, search);

    // Clear alert after 3 seconds
    setTimeout(this.clearAlert, 3000);
  }

  // Clear alert message
  clearAlert () {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
