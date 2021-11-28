import fetch from "node-fetch";
export class QuizapiWrapper {
    constructor(category) {
        this.apiKey = "EAco9tkerMBqitin1irWhCDipOxYHxJ5A5xe1nqQ"
        this.data;
        this.checkCategory(category) 
        this.url = `https://quizapi.io/api/v1/questions/?apiKey=${this.apiKey}&tags=${this.category}`;
    };

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


}

let quizapiWrapper = new QuizapiWrapper('PHP')
console.log(quizapiWrapper.getData())
