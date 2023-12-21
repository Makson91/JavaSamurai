
const words = [
    {
        original: "Wassup",
        translation: "Здарова"
    },
    {
        original: "Bye",
        translation: "Покеда"
    },
    {
        original: "Programmer",
        translation: "Программист"
    },
    {
        original: "Laptop",
        translation: "Ноутбук"
    },
    {
        original: "Screen",
        translation: "Экран"
    }
]

const notificationMessages = {
    start: {
        hello: "Hello man. You can learn English. Good luck"
    },
    result: {
        finishSuccess: "Молодец. Good Result",
        finishUnSuccess: "Молодец. Но постарайся лучше"
    }
}

const settings = {
    correctAnswersMinPercent: 50
}
const result = {
    correctAnswersCount: 0
}

// ------------

alert(notificationMessages.start.hello)

for (i = 0; i < words.length; i++) {
    let userAnswer = prompt(words[i].original);
    alert(userAnswer === words[i].translation);
    if (userAnswer === words[i].translation) {
        result.correctAnswersCount = result.correctAnswersCount + 1;
    }
}

//---------------------

const userCorrectAnswersPercent = result.correctAnswersCount / words.length * 100;

if (userCorrectAnswersPercent > settings.correctAnswersMinPercent) {
    alert(notificationMessages.result.finishSuccess);
} else {
    alert(notificationMessages.result.finishUnSuccess);
}