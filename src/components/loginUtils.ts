/* eslint-disable import/no-cycle */
import { ILoggedUser, IUser } from '../api/interfaces';
import { urlAdress } from '../api/fetchquery';


export function hideStatNav(): void {
  const el1 = document.querySelector('div[data-page="statistics"]') as HTMLElement;
  const el2 = document.querySelector('button[data-page="statistics"]') as HTMLElement;
  el1.classList.add('inactive');
  el2.classList.add('inactive');
}
export function showStatNav(): void {
  const el1 = document.querySelector('div[data-page="statistics"]') as HTMLElement;
  const el2 = document.querySelector('button[data-page="statistics"]') as HTMLElement;
  el1.classList.remove('inactive');
  el2.classList.remove('inactive');
}

export function authorizationShowHide(el:HTMLElement): void {
  el.classList.toggle('authorization-hide');
  el.classList.toggle('authorization-show');
}
export function getCurrentUser(): ILoggedUser {
  return JSON.parse(localStorage.getItem('user') || '');
}

export function isUserLoggedIn(): boolean {
  return (!!localStorage.getItem('user'));
}

export async function createUser(body: IUser): Promise<void> {
  const user = await fetch(`${urlAdress}/users`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  await user.json();
}

export function loadUser(): void {
  const isLog = isUserLoggedIn();
  if (isLog) {
    showStatNav();
  } else {
    hideStatNav();
  }
}





