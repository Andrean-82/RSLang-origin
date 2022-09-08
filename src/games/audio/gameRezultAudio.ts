import { createElement } from '../../components/createElement';
import Statistics from '../../pages/stats';
import {
    audioChallenge,
    audioChallengeRezultFalse,
    audioChallengeRezultlearn,
    audioChallengeRezultScore,
    audioChallengeRezultScoreFalse,
    audioChallengeRezultScorePic,
    audioChallengeRezultTrue,
} from '../components-game/constants';
import { menyDiv } from '../components-game/gameMenyDiv';
import { NumberAttempt } from '../components-game/interface';

// макс добавил для статистики
const objectUser = {
    FirstResultfromFG: 0,
    SecondResultfromFG: 0,
    ThirdResultfromFG: 0,
    trueAnswersfromSG: 0,
    falseAnswersfromSG: 0,
    procentResultfromSG: 0,
};

export function gameRezultAudio() {
    console.log('try');
    const app = audioChallenge();
    app.innerHTML = '';
    const wrapperScore = (createElement('div', app, ['wrapper_score']).textContent = `YOURE SCORE: ${NumberAttempt.countAnswerScore}`);
    const wrapperRezult = createElement('div', app, ['wrapper_rezult_audio']);
    const oneBlok = createElement('div', wrapperRezult, ['one_rezult']);
    const twoBlok = createElement('div', wrapperRezult, ['two_rezult']);
    const threeBlok = createElement('div', wrapperRezult, ['three_rezult']);
    const menuBlok = createElement('div', wrapperRezult, ['menu_rezult']);
    menyDiv(2, 'div', oneBlok, ['one_rezult_']);
    menyDiv(2, 'div', twoBlok, ['two_rezult_']);
    menyDiv(2, 'div', threeBlok, ['three_rezult_']);
    menyDiv(2, 'div', menuBlok, ['menu_rezult_']);
    const trueAnswer = audioChallengeRezultTrue();
    const falseAnswer = audioChallengeRezultFalse();
    const learnWords = audioChallengeRezultlearn();
    trueAnswer.innerHTML = 'Correct answers';
    falseAnswer.innerHTML = 'Wrong answers';
    learnWords.innerHTML = 'Learn words today';
    const trueScore = audioChallengeRezultScore();
    trueScore.innerHTML = `${NumberAttempt.countTrueAnswer}`;
    objectUser.trueAnswersfromSG += NumberAttempt.countTrueAnswer; // макс добавил для статистики
    const falseScore = audioChallengeRezultScoreFalse();
    falseScore.innerHTML = `${NumberAttempt.countFalseAnswer}`;
    objectUser.falseAnswersfromSG += 5; // макс добавил для статистики
    console.log(NumberAttempt.countFalseAnswer);
    const pic = audioChallengeRezultScorePic();
    const img = createElement('img', pic, ['img_panda_logo'], {
        ['id']: 'img_panda_logo',
        ['src']: '../assets/png/pngwing.jpg',
        ['alt']: 'Logo',
    });

    // макс добавил для статистики
    // const audioCorrectAnswers = document.getElementById('#audio-challenge-correct-answers') as HTMLElement;
    ////console.log('objectUser: ', objectUser);

    //// for (let i = 0; i < localStorage.length; i++) {
    ////     console.log(localStorage.key(i), localStorage.getItem(`${localStorage.key(i)}`));
    //// }
    NumberAttempt.procentCorrectAnswers = Math.ceil((NumberAttempt.countTrueAnswer * 100) / (NumberAttempt.countTrueAnswer + NumberAttempt.countFalseAnswer));
    objectUser.procentResultfromSG = NumberAttempt.procentCorrectAnswers;
    console.log('NumberAttempt.procentCorrectAnswers ', NumberAttempt.procentCorrectAnswers);
    const personID = takeUserId();
    ////console.log('test ', personID);

    for (let i = 0; i < localStorage.length; i++) {
        //console.log('localStorage.key(i)"s', localStorage.key(i));
        if (personID == localStorage.key(i)) {
            console.log('old');
            const newObject = localStorage.getItem(`${localStorage.key(i)}`) as string;
            //console.log('newObject ', newObject, 'typeof newObject ', typeof newObject);

            // if (newObject !== null) {
            //     const maybe = JSON.parse(newObject);
            // }
            const maybe = JSON.parse(newObject);
            //console.log('maybe ', maybe, 'typeof maybe ', typeof maybe);
            maybe.trueAnswersfromSG += objectUser.trueAnswersfromSG;
            maybe.falseAnswersfromSG += objectUser.falseAnswersfromSG;
            maybe.procentResultfromSG = Math.ceil((maybe.trueAnswersfromSG * 100) / (maybe.trueAnswersfromSG + maybe.falseAnswersfromSG));
            localStorage.setItem(`${personID}`, JSON.stringify(maybe));
            // console.log(audioCorrectAnswers);
            // audioCorrectAnswers.innerText = maybe.trueAnswersfromSG;
        }
        // else if (personID != localStorage.key(i)) {
        //     console.log('new');
        //     //localStorage.setItem(`${personID}`, JSON.stringify(objectUser));
        // }
    }
    let str = '';
    const array = [];
    for (let i = 0; i < localStorage.length; i++) {
        array.push(localStorage.key(i));
        str = array.join('');
    }
    console.log('ARR ', array);
    console.log('STR ', str);

    if (!str.includes(`${personID}`)) {
        console.log('not includes');
        localStorage.setItem(`${personID}`, JSON.stringify(objectUser));
    }

    sessionStorage.clear();
    console.log('///////////////////////////////////////////////////////////');
    for (let i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i), localStorage.getItem(`${localStorage.key(i)}`));
    }
}

// макс добавил для статистики
export const takeUserId = () => {
    const userData = localStorage.getItem('user');
    let result = '';
    if (userData?.includes('"logOut":"false"') && userData?.includes('"email"')) {
        if (userData.length > 299) {
            const newstr = userData.split('');
            const one = newstr.splice(473);
            const two = one.splice(-41);
            result = one.join('');
            // console.log('result ', result);
        } else if (userData.length < 300) {
            const newstr = userData.split('');
            const one = newstr.splice(7);
            const two = one.splice(-41);
            result = one.join('');
            // console.log('result ', result);
        }
        return result;
    }
};
