export const urlAdress = 'https://rs-lang-english.herokuapp.com';
export const urlAdressWords = `${urlAdress}/words`;
export const urlAdressUser = `${urlAdress}/users`;
export const createUser = (obj: object) => {
    fetch(`${urlAdressUser}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
    });
};
// const user = {
//     name: 'Anatoliy',
//     email: 'Andrean-82@mail.ru',
//     password: '12345678',
// };
//createUser(user);
