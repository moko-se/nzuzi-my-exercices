export const my_string_is_number = (str) => {

    if (typeof str == 'string') {
        let reg = /[0-9]/;

        if (str.match(reg)) {
            return true;
        }
    }
    return false;
}

