import scissorsImg from './images/scissors.png';
import rockImg from './images/rock.png';
import paperImg from './images/paper.png';

const build = () => {
    const addTitle = () => {
        const container = document.querySelector('#container');
        const h1 = document.createElement("H1");
        const h1Text = document.createTextNode("가위바위보");
        h1.appendChild(h1Text);
        container.appendChild(h1);
    }

    const addButton = () => {
        let scissors = document.createElement("BUTTON");
        scissors.setAttribute("id", "가위");
        scissors.innerHTML = `<img src="${scissorsImg}" />`;
        container.appendChild(scissors);

        let rock = document.createElement("BUTTON");
        rock.setAttribute("id", "바위");
        rock.innerHTML = `<img src="${rockImg}" />`;
        container.appendChild(rock);

        let paper = document.createElement("BUTTON");
        paper.setAttribute("id", "보");
        paper.innerHTML = `<img src="${paperImg}" />`;
        container.appendChild(paper);
    }

    const addResult = (tryNum, result, computerSelection, playerSelection) => {
        const container = document.querySelector('#container');
        const div = document.createElement("div");
        const text = document.createTextNode("라운드" + tryNum + ": " + result + " / " + "컴퓨터의 선택: " + computerSelection + " / " + "사용자의 선택: " + playerSelection + " / ");
        div.appendChild(text);
        container.append(div);
    }

    const addFinalResult = (userWin, comWin, noWin) => {
        let finalResult;
        let allResultInfo = '사용자가 이긴 횟수: ' + userWin + ' / ' + '컴퓨터가 이긴 횟수: ' + comWin + ' / ' + '무승부 횟수: ' + noWin + ' / ';

        if (userWin > comWin)
            finalResult = allResultInfo + "최종 결과: 승리!!!!!";
        else if (userWin === comWin)
            finalResult = allResultInfo + "최종 결과: 무승부!!!!!";
        else
            finalResult = allResultInfo + "최종 결과: 패배!!!!!";
        finalResult = document.createTextNode(finalResult);
        const div = document.createElement("div");
        let br = document.createElement("BR");
        div.appendChild(br);
        div.appendChild(finalResult);
        container.append(div)
    }

    return {
        addTitle,
        addButton,
        addResult,
        addFinalResult
    }
}

const buildPage = build();
export { buildPage }