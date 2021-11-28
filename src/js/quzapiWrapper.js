import fetch from "node-fetch";
import config from "config"
import XMLHttpRequest from "xhr2";
class QuizapiWrapper {
    constructor(category, difficulty) {
        this.apiKey = config.get('apiKey')
        this.data;
        this.checkCategory(category) 
        this.determineDifficulty(difficulty)
        //this.data = this.getData();
    };

    determineDifficulty(difficulty) {
        this.checkDifficulty(difficulty)
        if (this.difficulty != null) {
            this.url = `https://quizapi.io/api/v1/questions/?apiKey=${this.apiKey}&tags=${this.category}&difficulty=${this.difficulty}`;
        } else {
            this.url = `https://quizapi.io/api/v1/questions/?apiKey=${this.apiKey}&tags=${this.category}`;
        }
    }

    async getData() {
        
        const callApi = (url) => {
            const data = fetch(url)
            .then(res => res.json())
            .then(json => json)
            .catch(err => console.error('Error:', err));
            return data;
        }
        this.data = await callApi(this.url);
        var allQuestions = [];
        for (let i = 0; i < this.data.length; i++) {
            var question = this.data[i]['question']
            var answers = this.data[i]['answers']
            var parsedAnswers = []

            for (var key in answers) {
                if(answers[key] != null) {
                    parsedAnswers.push(answers[key])
                }
            }

            var correct_answers = this.data[i]['correct_answers']
            for (var key in correct_answers) {
                if (correct_answers[key] == 'true') {
                    let answer_key = key.substring(0, key.search("_correct"))
                    var correct_answer = answers[answer_key]
                }
            }
            allQuestions.push({
                question: question,
                answers: parsedAnswers.shuffle(),
                correct_answer: correct_answer
            });
        }
        console.log(allQuestions)
        return allQuestions;
    }


    checkCategory(category) {
        if (category == undefined) {
            console.log('category is undefined')
            return false;
        }
        category = category.toLowerCase()
        const categories = ['linux', 'devops', 'networking', 'php', 'javascript', 'cloud', 'docker', 'kubernetes', 'python']
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

}

let quizapiWrapper = new QuizapiWrapper('PHP')
console.log(quizapiWrapper.getData())
