import {API_KEY} from './constants.js'


class API {
    constructor(API_KEY) {
        this.API_KEY = API_KEY
    }
    baseApi = 'http://api.themoviedb.org/3/'
    get discoverMovie() {
        return `${this.baseApi}discover/movie?api_key=${this.API_KEY}`
    }
   async moviePage(page) {
       
        const response = await fetch(`${this.discoverMovie}&page=${page}`)
        const data = await response.json() 
        return data
        }

}

export default new API(API_KEY)