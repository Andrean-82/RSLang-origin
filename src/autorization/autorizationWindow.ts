import { createElement } from '../components/createElement';
import { registrationLayout } from './autorizationLayout';

const form = document.querySelector('#logged-user-container') as HTMLElement;
const openRegFormBtn = createElement('button', form, ['openBtn']);
openRegFormBtn.innerText = 'SIGN IN';

const overlay = createElement('div', document.body, ['overlay']);
const layout = createElement('div', document.body, ['layout']);
let isOpenForm = false;
let token: string;

// export const openForm = () => {
//     const form = document.querySelector('#logged-user-container') as HTMLElement;
//     const openRegFormBtn = createElement('button', form, ['openBtn']);
//     openRegFormBtn.innerText = 'SIGN IN';

//     openRegFormBtn.addEventListener('click', () => {
//         if (!isOpenForm) {
//             overlay.style.display = 'block';
//             layout.style.display = 'block';

//             overlay.style.position = 'absolute';
//             overlay.style.background = 'rgba(0, 0, 0, 0.8)';
//             overlay.style.left = '0';
//             overlay.style.top = '0';
//             overlay.style.right = '0';
//             overlay.style.bottom = '0';

//             layout.innerHTML = registrationLayout;
//             layout.style.position = 'absolute';
//             layout.style.zIndex = '1';
//             layout.style.top = '5rem';
//             layout.style.right = '0rem';
//             layout.style.left = '0rem';

//             const closeFormBtn = layout.childNodes[1].childNodes[1];
//             const signInBtn = layout.childNodes[1].childNodes[15].childNodes[1];

//             console.log(layout.childNodes[1].childNodes);

//             closeFormBtn.addEventListener('click', () => {
//                 overlay.style.display = 'none';
//                 layout.style.display = 'none';
//                 isOpenForm = false;
//             });

//             signInBtn.addEventListener('click', () => {
//                 layout.innerHTML = loginLayout;
//                 const lol = layout.childNodes[1].childNodes[15].childNodes[1];
//                 lol.addEventListener('click', () => {
//                     layout.innerHTML = registrationLayout;
//                 });
//                 a();
//             });

//             const a = () => {
//                 console.log('yes');
//             };
//         }
//     });
// };

export const openForm = () => {
    const clearBtn = openRegFormBtn.addEventListener('click', () => {
        if (openRegFormBtn.textContent !== 'SIGN IN') {
            openRegFormBtn.textContent = 'SIGN IN';
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
            });

            const signIn = signInBtn.addEventListener('click', () => {
                console.log('signIn');
                checkIn();
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
            console.log('data: ', data);
            //const div = layout.childNodes[1].childNodes[19] as HTMLElement;
            localStorage.setItem(`${data.id}`, `${data.email}`);
            openRegFormBtn.textContent = localStorage.getItem(`${data.id}`);
            //div.textContent = localStorage.getItem(`${data.id}`);

            for (let i = 0; i < localStorage.length; i++) {
                console.log(localStorage.getItem(`${localStorage.key(i)}`));
            }
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
            console.log('token: ', token);
            console.log('local storage: ', localStorage);
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
    //const div = layout.childNodes[1].childNodes[19] as HTMLElement;
    if (email.match(emailPattern) && infoDiv.textContent === '') {
        openRegFormBtn.textContent = email;
    }
    //div.textContent = email;
    token = content.token;
    console.log('token: ', token);
    console.log('content checkIn: ', content);
};

// export const openSignInForm = () => {
//     layout.innerHTML = loginLayout;
//     const closeFormBtn = layout.childNodes[1].childNodes[1];
//     const logInBtn = layout.childNodes[1].childNodes[15].childNodes[1];

//     closeFormBtn.addEventListener('click', () => {
//         overlay.style.display = 'none';
//         layout.style.display = 'none';
//         isOpenForm = false;
//     });

//     logInBtn.addEventListener('click', () => {
//         console.log('lll');
//         layout.innerHTML = registrationLayout;
//     });
// };

// export const createForm = () => {
//     const layout = createElement('div', document.body, ['layout']);

//     layout.style.position = 'absolute';
//     layout.style.zIndex = '1';
//     layout.style.top = '5rem';
//     layout.style.right = '0rem';
//     layout.style.left = '0rem';

//     // const regContainer = document.createElement('div');
//     // regContainer.classList.add('reg_container');
//     // regContainer.id = 'reg_container';
//     // layout.append(regContainer);

//     // const closeBtn = document.createElement('button');
//     // closeBtn.classList.add('close_btn');
//     // closeBtn.id = 'close-modal';
//     // closeBtn.innerText = 'X';
//     // regContainer.append(closeBtn);
//     const closeBtn = createElement('button', layout, ['close_btn'], { ['id']: 'close-modal' });
//     closeBtn.innerText = 'X';
//     const regContainer = createElement('div', layout, ['reg_container'], { ['id']: 'reg_container' });

//     const formName = createElement('div', regContainer, ['name_container']);
//     const h2 = createElement('h2', formName);
//     h2.innerText = 'Registration';
//     const email = createElement('input', regContainer, ['email'], { ['type']: 'email', ['placeholder']: 'Enter your email..' });
//     const password = createElement('input', regContainer, ['password'], {
//         ['type']: 'password',
//         ['placeholder']: 'Enter your password..',
//     });
//     const regBtn = createElement('button', regContainer, ['reg_btn']);
//     regBtn.innerText = 'Log In';
//     const p = createElement('p', regContainer, ['paragraph']);
//     p.innerText = 'Already have an account? ';
//     const signBtn = createElement('button', p, ['sign_btn']);
//     signBtn.innerText = 'Sign In';
//     const infoDiv = createElement('div', regContainer, ['info_div']);
//     const user = createElement('div', regContainer, ['email_in']);
//     user.innerText = 'EMAIL';

//     console.log(regContainer);
// };
