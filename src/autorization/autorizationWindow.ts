import { createElement } from '../components/createElement';
import { hideStatNav, isUserLoggedIn, showStatNav } from '../components/loginUtils';
import Dictionary from '../pages/dictionary';
import { registrationLayout } from './autorizationLayout';

const form = document.querySelector('#logged-user-container') as HTMLElement;
const openRegFormBtn = createElement('button', form, ['openBtn']);
openRegFormBtn.innerText = 'SIGN IN';

const overlay = createElement('div', document.body, ['overlay']);
const layout = createElement('div', document.body, ['layout']);

const divForEmail = document.createElement('div');
divForEmail.className = 'email-div';

let isOpenForm = false;
export let token: string;
export let personID: string;


export const openForm = () => {
    console.log('1: logOut ', localStorage.getItem('user'));
    const a = localStorage.getItem('user');
    if( a?.includes('"logOut":"false"') && a?.includes('"email"')) {
        openRegFormBtn.classList.add('test');
        openRegFormBtn.textContent = 'LOG OUT';

        const newstr = a.split('');
        const one = newstr.splice(508);
        const two = one.splice(-19);
        const result = one.join('');
        divForEmail.textContent = result;
        form.before(divForEmail);
    }
    // localStorage.clear();
    const clearBtn = openRegFormBtn.addEventListener('click', () => {
        for(let i = 0; i < localStorage.length; i++) {
            console.log('//////////////////////////////////////////////');
            console.log('localStorage.key ', localStorage.key(i), 'localStorage.value ', localStorage.getItem(`${localStorage.key(i)}`));
            console.log('//////////////////////////////////////////////');
        }
        if (isUserLoggedIn()){
            hideStatNav(); //убираю статистику иконку
            localStorage.removeItem('user');//очищает локал сторидж
            new Dictionary().openPage();//автоматически перерисовывает и скрывает кнопку сложных слов
        }
        if (openRegFormBtn.textContent !== 'SIGN IN') {
            openRegFormBtn.textContent = 'SIGN IN';
            openRegFormBtn.classList.remove('test');
            if( a?.includes('"logOut":"false"')) {
                const newstr = a.replace(/false/i, 'true');
                divForEmail.textContent = '';
                localStorage.setItem('user', newstr);
            }
            console.log('2: logOut ', localStorage);
        } else if (!isOpenForm) {
            overlay.style.display = 'block';
            layout.style.display = 'block';

            overlay.style.position = 'absolute';
            overlay.style.background = 'rgba(0, 0, 0, 0.8)';
            overlay.style.left = '0';
            overlay.style.top = '0';
            overlay.style.right = '0';
            overlay.style.bottom = '0';

            layout.innerHTML = registrationLayout;
            layout.style.position = 'absolute';
            layout.style.zIndex = '1';
            layout.style.top = '5rem';
            layout.style.right = '0rem';
            layout.style.left = '0rem';

            const closeFormBtn = layout.childNodes[1].childNodes[1];
            const logInBtn = layout.childNodes[1].childNodes[9];
            const signInBtn = layout.childNodes[1].childNodes[11].childNodes[1];
            const infoDiv = layout.childNodes[1].childNodes[13] as HTMLElement;

            const logIn = logInBtn.addEventListener('click', () => {
                console.log('logIn');
                sendData();
                setTimeout(() => {
                    if (infoDiv.textContent === '' || infoDiv.textContent === `Welcome ${layout.childNodes[1].childNodes[5].childNodes[1].textContent}!`) {
                        openRegFormBtn.classList.add('test');
                    }
                }, 300);
            });

            const signIn = signInBtn.addEventListener('click', async () => { //чекин - асинхр функция добавили асинк чтобы работал checkIn()
                console.log('signIn');
                await checkIn(); // добавила проверку
                showStatNav();//показывает стату
                new Dictionary().openPage();//перерендер
                setTimeout(() => {
                    if (infoDiv.textContent === '' || infoDiv.textContent === `Welcome ${layout.childNodes[1].childNodes[5].childNodes[1].textContent}!`) {
                        openRegFormBtn.classList.add('test');
                    }
                }, 300);
            });

            const closeForm = closeFormBtn.addEventListener('click', () => {
                overlay.style.display = 'none';
                layout.style.display = 'none';
                isOpenForm = false;
            });
        }
    });
};

export const authenticator = async (email: string, password: string) => {
    const infoDiv = layout.childNodes[1].childNodes[13] as HTMLElement;
    return await fetch('https://rs-lang-english.herokuapp.com/users', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            infoDiv.innerText = '';
            // console.log('data: ', data);
            data.logOut = 'false';
            // localStorage.setItem(`${data.id}`, `${data.email}`);
            localStorage.setItem('user', JSON.stringify(data));//сохранение всех данных юзера в локал сторидж
            openRegFormBtn.textContent = localStorage.getItem(`${data.id}`);

            // const divForEmail = document.createElement('div');
            // divForEmail.className = 'email-div';
            divForEmail.textContent = localStorage.getItem(`${data.id}`);
            form.before(divForEmail);
            openRegFormBtn.textContent = 'LOG OUT';

            personID = data.id;
            // console.log('data.id', personID, data.id);

            // for (let i = 0; i < localStorage.length; i++) {
            //     console.log(localStorage.getItem(`${localStorage.key(i)}`));
            // }
        })
        .catch((e) => (infoDiv.innerText = `This email address: '${email}' is already being used!\n\nTry again, but click on "SIGN IN" button.`))
        .finally(async () => {
            const rawResponse = await fetch('https://rs-lang-english.herokuapp.com/signin', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const content = await rawResponse.json();
            token = content.token;
            //////////////////////////////// В случае успешной регистрации - выводит сообщение и через секунду окно закрывается.
            setTimeout(() => {
                if (infoDiv.textContent === '') {
                    infoDiv.textContent = `Welcome ${email}!`;
                }
            }, 1000);

            setTimeout(() => {
                if(infoDiv.textContent === '' || infoDiv.textContent === `Welcome ${email}!`) {
                    overlay.style.display = 'none';
                    layout.style.display = 'none';
                    isOpenForm = false;
                }
            }, 2000);
            ///////////////////////////////
            // console.log('token: ', token);
            // console.log('local storage: ', localStorage);
        });
};

export const sendData = () => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    const emailPattern = /^[\w\d%$:.-]+@\w+\.\w{2,5}$/;
    const infoDiv = layout.childNodes[1].childNodes[13] as HTMLElement;

    const email = (layout.childNodes[1].childNodes[5].childNodes[1] as HTMLInputElement).value.toLowerCase();
    const password = (layout.childNodes[1].childNodes[7].childNodes[1] as HTMLInputElement).value;

    if (password.match(passwordPattern) && email.match(emailPattern)) {
        authenticator(email, password);
    } else {
        infoDiv.innerText = 'Incorrect login or password..';
        ////////////////////////////////
        // overlay.style.display = 'block';
        // layout.style.display = 'block';
        // isOpenForm = true;
        ///////////////////////////////
    }
};

export const checkIn = async () => {
    const emailPattern = /^[\w\d%$:.-]+@\w+\.\w{2,5}$/;
    const email = (layout.childNodes[1].childNodes[5].childNodes[1] as HTMLInputElement).value.toLowerCase();
    const password = (layout.childNodes[1].childNodes[7].childNodes[1] as HTMLInputElement).value;
    const infoDiv = layout.childNodes[1].childNodes[13] as HTMLElement;
    infoDiv.innerText = '';

    const rawResponse = await fetch('https://rs-lang-english.herokuapp.com/signin', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    const content = await rawResponse.json().catch((e) => {
        const err = `${e}`;
        console.log(err);
        if (err.includes("Unexpected token 'F'")) {
            infoDiv.innerText = `Incorrect password: '${email}'`;
        }
        if (err.includes("Unexpected token 'C'")) {
            infoDiv.innerText = `The user does not exists: '${email}'`;
        }
    });
    if (email.match(emailPattern) && infoDiv.textContent === '') {
        // const divForEmail = document.createElement('div');
        // divForEmail.className = 'email-div';
        divForEmail.textContent = email;
        form.before(divForEmail);
        openRegFormBtn.textContent = 'LOG OUT';
    }
    token = content.token;
    personID = content.userId;
    //////////////////////////////// В случае успешной регистрации - выводит сообщение и через секунду окно закрывается.
    setTimeout(() => {
        if (infoDiv.textContent === '') {
            infoDiv.textContent = `Welcome ${email}!`;
        }
    }, 1000);

    setTimeout(() => {
        if(infoDiv.textContent === '' || infoDiv.textContent === `Welcome ${email}!`) {
            overlay.style.display = 'none';
            layout.style.display = 'none';
            isOpenForm = false;
        }
    }, 2000);
    ///////////////////////////////
    // console.log('token: ', token);
    content.email = email;
    content.logOut = 'false';
    console.log('content checkIn: ', content);
    console.log('3: logOut ', localStorage);
    // console.log('content.userId: ', content.userId, personID);
    localStorage.setItem('user', JSON.stringify(content));//сохранение всех данных юзера в локал сторидж
};
