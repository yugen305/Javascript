var user = {
    name: '',
    responses: [],
    rightAnswers : 0,
    wrongAnswers : 0,
    firstQuestion: function() {
        var answer = prompt('What is your name?');
        this.name = answer;
    },

    secondQuestion: function() {
        var answer = prompt('Does null === 0 ? (Yes / No)');

        if (answer.toLowerCase() === 'yes') {
            answer = true;
        } else if (answer.toLowerCase() === 'no') {
            answer = false;
        } else {
            alert('Please answer either Yes or No');
            this.secondQuestion();
        }

        this.responses.push(answer);
    },

    thirdQuestion: function() {
        var answer = prompt('the external javascript file must contain the <script> tag (Yes or No)');

        if (answer.toLowerCase() === 'yes') {
            answer = false;
        } else if (answer.toLowerCase() === 'no') {
            answer = true;
        } else {
            alert('Please answer either Yes or No');
            this.thirdQuestion();
        }

        this.responses.push(answer);

    },

    fourthQuestion: function() {
        var answer = prompt('What is the symbol(s) to comment out one line in JavaScript?');

        switch (answer.toLowerCase()) {
            case '//':
                answer = true;
                break;
            case '**':
                answer = false;
                break;
            case '%%':
                answer = false;
                break;
            case '&&':
                answer = false;
                break;
            default:
                alert('Answer with one of the following (//, **, %%, &&)');
                this.fourthQuestion();
        }

        this.responses.push(answer);
    },

    fifthQuestion: function() {
        var answer = prompt('How do you create a variable x that is equal to the string "Hello" 1: string x = "Hello"; 2: var x = "Hello"; 3: text x = "Hello"; 4: strings x = "hello"; ');

        switch (answer.toLowerCase()) {
            case '1':
                answer = false;
                break;
            case '2':
                answer = true;
                break;
            case '3':
                answer = false;
                break;
            case '4':
                answer = false;
                break;
            default:
                alert('Answer with 1, 2, 3, or 4');
                this.fifthQuestion();
        }

        this.responses.push(answer);
    },
    
}

function evaluateResponses(responses) {

    for (var i = 0; i < responses.length; i++) {
        if (responses[i] === true) {
            user.rightAnswers++;
        } else {
            user.wrongAnswers++;
        }
    }

    showResults();
}

function showResults() {
    alert('You answered ' + (user.rightAnswers + user.wrongAnswers) + ' questions.');
    alert('Right answers: ' + user.rightAnswers);
    alert('Wrong answers: ' + user.wrongAnswers);
}


user.firstQuestion();
console.log(user.name);
user.secondQuestion();
console.log(user.responses[0]);
user.thirdQuestion();
console.log(user.responses[1]);
user.fourthQuestion();
console.log(user.responses[2]);
user.fifthQuestion();
console.log(user.responses[3]);

evaluateResponses(user.responses);
