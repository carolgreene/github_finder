class Github {
  constructor() {
    this.client_id = '2075424ac05287abc1d1';
    this.client_secret = '1ae38fa550bb5571b8ff8ed97ad2cfdcf2e76daa'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile: profile   
    }

    //you can actually just have profile listed once w/o the colon or 2nd profile when they're the same
    //return {
      //profile
    //}
  }

}
