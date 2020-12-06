import { playRound } from './playRound.js';

const choice = () => {

    const choiceFromCom = () => {
        let choice = new Array('가위', '바위', '보');
        let comSelection = choice[Math.floor(Math.random() * choice.length)];
        return comSelection;
    }

    const waitForUserChoice = () => {
        let btn = document.querySelectorAll('button');
        btn.forEach((button) => {
            button.addEventListener('click', () => {
                playRound.getResult(button.id, choiceFromCom());
            })
        })
    }

    return {
        waitForUserChoice,
        choiceFromCom
    }
}

const choiceRCS = choice();
export { choiceRCS }