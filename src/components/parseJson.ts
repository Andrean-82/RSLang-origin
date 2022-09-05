export const parseJsonFile = (key: string) => {
    //const objString = sessionStorage.getItem(key) as string;
    //const objectForJson = JSON.parse(objString);
    //return objectForJson;
    return JSON.parse(`${sessionStorage.getItem(key)}`);
};
