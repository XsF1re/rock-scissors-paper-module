import { buildPage } from './buildPage.js';

const play = () => {
    let comWin = 0;
    let userWin = 0;
    let noWin = 0;
    let result;
    let tryNum = 0;

    const isFinished = () => {
        if(tryNum >= 5)
            return true;
        return false;
    }

    const getResult = (playerSelection, computerSelection) => {
        if(isFinished())
            return;

        tryNum++;

        if (playerSelection === computerSelection) {
            result = "무승부";
            noWin++;
        }
        else if ((playerSelection === "바위" && computerSelection === "가위")
            || (playerSelection === "가위" && computerSelection === "보")
            || (playerSelection === "보" && computerSelection === "바위")) {
            result = "승";
            userWin++;
        }
        else {
            result = "패";
            comWin++;
        }
        buildPage.addResult(tryNum, result, computerSelection, playerSelection);

        if (tryNum == 5) {
            buildPage.addFinalResult(userWin, comWin, noWin);
        }
    }

    return {
        getResult
    }
}

const playRound = play();
export { playRound };