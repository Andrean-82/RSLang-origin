export const parseJsonFile = (key: string) => {
    const objString = sessionStorage.getItem(key) as string;
    const obj = JSON.parse(objString);
    return obj;
    // return JSON.parse(`${sessionStorage.getItem(key)}`);
};
