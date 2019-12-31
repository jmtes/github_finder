class Github {
  constructor () {
    this.clientID = '5d84db4ebe2dc4a22c2f';
    this.clientSecret = '241e5068ab53baca20671bd5f43a4a8bf41de054';
    this.repoCount = 5;
    this.repoSort = 'created: asc';
  }

  async getUser (user) {
    // Fetch user profile
    const profileResponse = await window.fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

    // Fetch user repos
    const repoResponse = await window.fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repoCount}&sort=${this.repoSort}client_id=${this.clientID}&client_secret=${this.clientSecret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile: profile,
      repos: repos
    };
  }
}
