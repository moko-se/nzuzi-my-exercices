export const my_display_comb2v2 = () => {

    let tab = [];
    let n = 0;

    for (let i=0; i<=9; i++) {
        for (let j=1; j<=9; j++) {
            for (let a=3; a<=9; a++) {
                if (i!=j && j!=a && i!=a) {
                    tab[n] = [i]+' '+[j]+' '+[a];
                    n++
                }

                if (i==7 && j==8 && a==9){
                    return tab;
                }
            }
        }
        
    }
}

