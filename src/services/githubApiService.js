
class githubApiService{
    url = 'https://api.github.com/'

    constructor(){

    }
    getPseudo = async (name) =>{
        return fetch(this.url+'users/'+name)
        .then(data => data.json())
        .catch(e => e)
    }
}

export default new githubApiService()