import { frontendTags, backendTags, apiKey } from "../config.js";

export class QuizapiWrapper {
  constructor(tags) {
    this.url = `https://quizapi.io/api/v1/questions/?apiKey=${apiKey}&tags=`;

    this.data = null;
    this.frontendTags = frontendTags;
    this.backendTags = backendTags;

    this.tags = this.chooseTags(tags);
  }

  async getData() {
    const callApi = (url) =>
      fetch(url)
        .then((res) => res.json())
        .catch((err) => console.error("Error:", err));

    let tagsLength = await (await this.tags).length;
    var allQuestions = [];

    for (let i = 0; i < tagsLength; i++) {
      let _parsed_url = this.url + (await (await this.tags)[i]);
      this.data = await callApi(_parsed_url);

      for (let i = 0; i < this.data.length; i++) {
        var question = this.data[i]["question"];
        var answers = this.data[i]["answers"];
        var parsedAnswers = [];

        for (var key in answers) {
          if (answers[key] != null) {
            parsedAnswers.push(answers[key]);
          }
        }

        var correct_answers = this.data[i]["correct_answers"];
        for (var key in correct_answers) {
          if (correct_answers[key] == "true") {
            let answer_key = key.substring(0, key.search("_correct"));
            var correct_answer = answers[answer_key];
          }
        }
        allQuestions.push({
          question: question,
          answers: parsedAnswers,
          correct_answer: correct_answer,
        });
      }
    }
    return allQuestions;
  }

  chooseTags(tags) {
    if (tags === "frontend") {
      return this.frontendTags;
    } else if (tags === "backend") {
      return this.backendTags;
    } else {
      console.error("Check if tags are correct");
    }
  }
}
