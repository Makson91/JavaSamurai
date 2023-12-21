//------ Functions, Подпрограммы
function showHelloMessage(_notificationMessages) {
    alert(_notificationMessages.start.hello);
}
function startTraining(_words, _result) {
    for (i = 0; i < _words.length; i++) {
        let userAnswer = prompt(_words[i].original);
        alert(userAnswer === _words[i].translation);
        if (userAnswer === _words[i].translation) {
            _result.correctAnswersCount = _result.correctAnswersCount + 1;
        }
    }
}
function getPercentage(_result, _words) {
    return _result.correctAnswersCount / _words.length * 100;
}
function showResult(_result, _words, _settings, _notificationMessages) {
    const userCorrectAnswersPercent = getPercentage(result, words);
    if (userCorrectAnswersPercent > settings.correctAnswersMinPercent) {
        alert(notificationMessages.result.finishSuccess);
    } else {
        alert(notificationMessages.result.finishUnSuccess);
    }
}
//----------- data Данные
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
// ------------ main Запуск
showHelloMessage(notificationMessages);
startTraining(words, result);
showResult(result, words, settings, notificationMessages);