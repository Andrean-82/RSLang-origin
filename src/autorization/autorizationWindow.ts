import { createElement } from '../components/createElement';
import { loginLayout, registrationLayout } from './autorizationLayout';

const overlay = createElement('div', document.body, ['overlay']);
const layout = createElement('div', document.body, ['layout']);

export const openForm = () => {
    let openForm = false;
    const form = document.querySelector('#logged-user-container') as HTMLElement;
    const openRegFormBtn = createElement('button', form, ['openBtn']);
    openRegFormBtn.innerText = 'SIGN IN';

    openRegFormBtn.addEventListener('click', () => {
        if (!openForm) {
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
            const signInBtn = layout.childNodes[1].childNodes[11].childNodes[1];

            console.log(layout.childNodes[1].childNodes[1]);

            closeFormBtn.addEventListener('click', () => {
                overlay.style.display = 'none';
                layout.style.display = 'none';
                openForm = false;
            });

            signInBtn.addEventListener('click', () => {
                cr();
            });
        }
    });
};

export const cr = () => {
    console.log('lololo');
};

export const createForm = () => {
    const layout = createElement('div', document.body, ['layout']);

    layout.style.position = 'absolute';
    layout.style.zIndex = '1';
    layout.style.top = '5rem';
    layout.style.right = '0rem';
    layout.style.left = '0rem';

    // const regContainer = document.createElement('div');
    // regContainer.classList.add('reg_container');
    // regContainer.id = 'reg_container';
    // layout.append(regContainer);

    // const closeBtn = document.createElement('button');
    // closeBtn.classList.add('close_btn');
    // closeBtn.id = 'close-modal';
    // closeBtn.innerText = 'X';
    // regContainer.append(closeBtn);
    const closeBtn = createElement('button', layout, ['close_btn'], { ['id']: 'close-modal' });
    closeBtn.innerText = 'X';
    const regContainer = createElement('div', layout, ['reg_container'], { ['id']: 'reg_container' });

    const formName = createElement('div', regContainer, ['name_container']);
    const h2 = createElement('h2', formName);
    h2.innerText = 'Registration';
    const email = createElement('input', regContainer, ['email'], { ['type']: 'email', ['placeholder']: 'Enter your email..' });
    const password = createElement('input', regContainer, ['password'], {
        ['type']: 'password',
        ['placeholder']: 'Enter your password..',
    });
    const regBtn = createElement('button', regContainer, ['reg_btn']);
    regBtn.innerText = 'Log In';
    const p = createElement('p', regContainer, ['paragraph']);
    p.innerText = 'Already have an account? ';
    const signBtn = createElement('button', p, ['sign_btn']);
    signBtn.innerText = 'Sign In';
    const infoDiv = createElement('div', regContainer, ['info_div']);
    const user = createElement('div', regContainer, ['email_in']);
    user.innerText = 'EMAIL';

    console.log(regContainer);
};
