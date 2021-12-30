import { availableTags, apiKey } from '../config.js';

export class QuizapiWrapper {
  constructor(tags) {
    this.url = `https://quizapi.io/api/v1/questions/?apiKey=${apiKey}&tags=`;
    this.data = null;
    this.tags = availableTags[tags];
  }

  async getData() {
    const allQuestions = [];

    for (let i = 0; i < this.tags.length; i++) {
      const _parsed_url = this.url + (await (await this.tags)[i]);
      this.data = await fetch(_parsed_url)
        .then((res) => res.json())
        .catch((err) => console.error('Error:', err));

      for (let i = 0; i < this.data.length; i++) {
        const question = this.data[i]['question'];
        const answers = this.data[i]['answers'];
        const parsedAnswers = [];

        for (let key in answers) {
          if (answers[key] != null) {
            parsedAnswers.push(answers[key]);
          }
        }

        const correct_answers = this.data[i]['correct_answers'];
        let correct_answer = null;

        for (let key in correct_answers) {
          if (correct_answers[key] == 'true') {
            const answer_key = key.substring(0, key.search('_correct'));
            correct_answer = answers[answer_key];
          }
        }

        allQuestions.push({
          question: question,
          answers: parsedAnswers,
          correct_answer: correct_answer
        });
      }
    }
    return allQuestions;
  }
}
