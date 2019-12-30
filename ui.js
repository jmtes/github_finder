class UI {
  constructor () {
    this.profile = document.getElementById('profile');
  }

  showProfile (user) {
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
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos">

      </div>
    `;
  }

  clearProfile () {
    this.profile.innerHTML = '';
  }
}
