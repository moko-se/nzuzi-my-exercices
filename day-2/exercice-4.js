export const my_display_comb = () => {

    let tab = [];
    let n = 0;

    for (let i=0; i<3; i++) {
        for (let j=1; j<100; j++) {
            tab[n] = [i]+' '+[j];
            n++
        }
        
    }
    return tab;
}
