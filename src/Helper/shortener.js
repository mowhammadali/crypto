export const shortener = text => {
    const splited = text.split(" ");
    const result = [splited[0] , splited[1]].join(' ');
    return result;
}