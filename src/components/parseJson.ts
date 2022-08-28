export const parseJsonFile = (key: string) => {
    return JSON.parse(`${sessionStorage.getItem(key)}`);
};
