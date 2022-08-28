const urlAdress = 'https://rs-lang-english.herokuapp.com';
const urlAdressWords = `${urlAdress}/words`;
const urlAdressUser = `${urlAdress}/users`;
//
export const getWords = async (group: number, page: number) => {
    const data = await fetch(`${urlAdressWords}?group=${group}&page=${page}`);
    const data_1 = await data.json();
    return data_1;
};
//
export const getWord = async (id: string) => {
    const data = await fetch(`${urlAdressWords}/${id}`);
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
