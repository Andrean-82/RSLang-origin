import { createElement } from '../components/createElement';
import { hideStatNav, isUserLoggedIn, showStatNav } from '../components/loginUtils';
import Dictionary from '../pages/dictionary';
import Main from '../pages/main';
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
    //localStorage.clear();
    const userData = localStorage.getItem('user');
    if (userData?.includes('"logOut":"false"') && userData?.includes('"email"')) {
        if (userData.length > 299) {
            openRegFormBtn.classList.add('test');
            openRegFormBtn.textContent = 'LOG OUT';
            const newstr = userData.split('');
            const one = newstr.splice(508);
            const two = one.splice(-19);
            const result = one.join('');
            divForEmail.textContent = result;
            form.before(divForEmail);
        } else if (userData.length < 300) {
            openRegFormBtn.classList.add('test');
            openRegFormBtn.textContent = 'LOG OUT';
            const newstr = userData.split('');
            const one = newstr.splice(42);
            const two = one.splice(-19);
            const result = one.join('');
            divForEmail.textContent = result;
            form.before(divForEmail);
        }
    }
    if (userData?.includes('"logOut":"true"')) {
        hideStatNav();
        localStorage.removeItem('user');
        new Dictionary().openPage();
    }
    const clearBtn = openRegFormBtn.addEventListener('click', () => {
        if (isUserLoggedIn()) {
            hideStatNav(); //убираю статистику иконку
            localStorage.removeItem('user'); //очищает локал сторидж
            new Dictionary().openPage();
        }
        if (openRegFormBtn.textContent !== 'SIGN IN') {
            openRegFormBtn.textContent = 'SIGN IN';
            hideStatNav();
            divForEmail.textContent = '';
            openRegFormBtn.classList.remove('test');
            localStorage.removeItem('user');
            if (userData?.includes('"logOut":"false"')) {
                const newstr = userData.replace(/false/i, 'true');
                divForEmail.textContent = '';
                localStorage.setItem('user', newstr);
            }
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
                sendData();
                showStatNav();
                new Main().openPage();
                setTimeout(() => {
                    if (infoDiv.textContent === '' || infoDiv.textContent === `Welcome ${layout.childNodes[1].childNodes[5].childNodes[1].textContent}!`) {
                        openRegFormBtn.classList.add('test');
                    }
                }, 300);
            });
            const signIn = signInBtn.addEventListener('click', async () => {
                await checkIn();
                showStatNav();
                new Main().openPage();
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
            data.logOut = 'false';
            localStorage.setItem('user', JSON.stringify(data));
            divForEmail.textContent = `${data.email}`;
            form.before(divForEmail);
            openRegFormBtn.textContent = 'LOG OUT';
            personID = data.id;
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
            setTimeout(() => {
                if (infoDiv.textContent === '') {
                    infoDiv.textContent = `Welcome ${email}!`;
                }
            }, 1000);
            setTimeout(() => {
                if (infoDiv.textContent === '' || infoDiv.textContent === `Welcome ${email}!`) {
                    overlay.style.display = 'none';
                    layout.style.display = 'none';
                    isOpenForm = false;
                }
            }, 2000);
            localStorage.setItem('user', JSON.stringify(content));
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
        divForEmail.textContent = email;
        form.before(divForEmail);
        openRegFormBtn.textContent = 'LOG OUT';
    }
    token = content.token;
    personID = content.userId;
    setTimeout(() => {
        if (infoDiv.textContent === '') {
            infoDiv.textContent = `Welcome ${email}!`;
        }
    }, 1000);
    setTimeout(() => {
        if (infoDiv.textContent === '' || infoDiv.textContent === `Welcome ${email}!`) {
            overlay.style.display = 'none';
            layout.style.display = 'none';
            isOpenForm = false;
        }
    }, 2000);
    content.email = email;
    content.logOut = 'false';
    localStorage.setItem('user', JSON.stringify(content));
};
