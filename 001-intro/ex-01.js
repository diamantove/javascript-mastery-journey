class Question {
    #text;
    #answer;
    #variants;

    constructor(text, answer, variants) {
        this.#text = text;
        this.#answer = answer.toLowerCase();
        this.#variants = variants;
    }

    checkAnswer(answer) {
        return answer.toLowerCase() === this.#answer;
    }

    getVariantsString() {
        return this.#variants.join(", ");
    }

    toString() {
        return this.#text;
    }
}

const questions = [
    new Question("Сколько на Земле континентов?", "6", ["5", "6", "7"]),
    new Question("Сколько планет в Солнечной системе?", "8", ["7", "8", "11"]),
    new Question("Правда ли, что слоны узнают себя в зеркале?", "да", ["да", "нет"]),
    new Question("Сколько будет 2+2*2?", "6", ["6", "4", "8"])
];
let sum = 0;

let prmpt = prompt("Вас приветствует самая сложная в мире викторина. Согласны? (да, нет)");
if (prmpt && prmpt.toLowerCase() === "да") {
    for (const [index, q] of questions.entries()) {
        prmpt = prompt(`Вопрос №${index + 1}. ${q}\nВарианты ответа: ${q.getVariantsString()}`);

        if (!prmpt) {
            alert("Пахнет слабостью.");
            break;
        }

        if (q.checkAnswer(prmpt))
            sum += 1;

    }

    alert(`Вы набрали ${sum} баллов. Поздравляем?`)
}
else
    alert("Ну и пожалуйста.");

