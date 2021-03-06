class Github {
  constructor() {
    this.client_id = '2075424ac05287abc1d1';
    this.client_secret = '1ae38fa550bb5571b8ff8ed97ad2cfdcf2e76daa'
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?
    client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile: profile,  
      repos: repos 
    }

    //you can actually just have profile listed once w/o the colon or 2nd profile when they're the same
    //return {
      //profile,
      //repos
    //}
  }

}
