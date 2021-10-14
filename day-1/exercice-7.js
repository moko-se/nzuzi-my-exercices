
export const my_is_posi_neg = (nbr) => {

    if (nbr < 0) {
        return 'NEGATIF';
    } else if (nbr == 0 ) {
        return 'NEUTRAL';
    } else if (nbr > 0 || nbr === undefined || nbr === null) {
        return 'POSITIF';
    }
}
