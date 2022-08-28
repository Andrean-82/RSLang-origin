const urlAdress = 'https://rs-lang-english.herokuapp.com';
const urlAdressWords = `${urlAdress}/words`;
const urlAdressUser = `${urlAdress}/users`;
//
export const getWords = async () => {
    const data = await fetch(`${urlAdressWords}?group=${0}&page=${3}`);
    const data_1 = await data.json();
    console.log(data_1);
    return data_1;
};
//
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
