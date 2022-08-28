export const generateArray = (lengthArray = 20) => {
    const arrayForGetWord: number[] = [];
    for (let i = 0; i < lengthArray; i++) {
        arrayForGetWord.push(i);
    }
    return arrayForGetWord;
};
