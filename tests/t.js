var correct_answers= {
    answer_a_correct: 'false',
    answer_b_correct: 'true',
    answer_c_correct: 'false',
    answer_d_correct: 'false',
    answer_e_correct: 'false',
    answer_f_correct: 'false'
}


var counter = 0;
for (var key in correct_answers) {
    if (correct_answers[key] == 'true') {
        console.log(key);
        console.log(counter)
    }
    counter++;
}
