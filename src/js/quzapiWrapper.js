import fetch from "node-fetch";
import config from "config"
import XMLHttpRequest from "xhr2";
class QuizapiWrapper {
    constructor(category, difficulty) {
        this.apiKey = config.get('apiKey')
        this.data="";
        this.checkCategory(category) 
        this.checkDifficulty(difficulty)

        if (this.difficulty != null) {
            this.url = `https://quizapi.io/api/v1/questions/?apiKey=${this.apiKey}&tags=${this.category}&difficulty=${this.difficulty}`;
        } else {
            this.url = `https://quizapi.io/api/v1/questions/?apiKey=${this.apiKey}&tags=${this.category}&limit=1`;
        }

        

        this.data = this.fetchApi();
        //this.data = this.getData();
    };

    checkCategory(category) {
        if (category == undefined) {
            console.log('category is undefined')
            return false;
        }
        category = category.toLowerCase()
        const categories = ['linux', 'devops', 'networking', 'php', 'js', 'cloud', 'docker', 'kubernetes', 'python', 'c', 'java']
        if ( !categories.includes(category) ) {
            throw new Error('Category out of range')
        } else {
            this.category = category;
        }
    }

    checkDifficulty(difficulty) {
        if (difficulty != undefined) {
            const difficulties = ['easy', 'medium', 'hard']
            if( !difficulties.includes(difficulty) ) {
                throw new Error('Category out of range. If you do not want to use difficulty setting do not pass it to argument')
            } else {
                this.difficulty = difficulty;
            }
        } else {
            this.difficulty = null;
        }
    }

    async fetchApi() {
        const data = await fetch(this.url)
        .then(res => res.json())
        .then(json => json)
        .catch(err => console.error('Error:', err));
        return await data;
    }

}

let quizapiWrapper = new QuizapiWrapper('PHP')
console.log(quizapiWrapper.data)