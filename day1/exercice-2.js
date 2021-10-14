import { my_display_alpha } from './exercice-1.js';
import { my_size_alpha } from './exercice-4.js';

const my_display_alpha_reverse = () => {

    let str_r = '';

    for (let i = my_size_alpha(my_display_alpha())-1; i != -1; i--){
        str_r += my_display_alpha()[i];
    }
    return str_r;
};
