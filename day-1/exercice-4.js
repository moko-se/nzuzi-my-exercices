export const my_size_alpha = (str) => {
    let n = 0;

    if (typeof str == 'string') {
        while (!!str[n]) {
            n++
        }
    }
    return n;
}
