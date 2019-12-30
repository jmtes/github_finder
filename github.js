class Github {
  constructor () {
    this.clientID = '5d84db4ebe2dc4a22c2f';
    this.clientSecret = '241e5068ab53baca20671bd5f43a4a8bf41de054';
  }

  async getUser (user) {
    const profileResponse = await window.fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

    const profile = await profileResponse.json();

    return {
      profile: profile
    };
  }
}
