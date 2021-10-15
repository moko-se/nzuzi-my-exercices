export const my_display_multi_42 = (multi, int) => {

    if (typeof multi == 'number' || typeof int == 'number') {

        let sum = int*multi;

        if (sum == 42){
            return true
        }
    }

    return false;
}


