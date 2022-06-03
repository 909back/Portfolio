export default class RegexHelper {
    
    value(selector, msg){
        const field = document.getElementById(selector);
        const value = field.value.trim();

        if(!value){
            alert(msg);
            field.focus();
            return false;
        }

        return true;
    }

    max_length(selector, len, msg){
        const field = document.getElementById(selector);
        const value = field.value.trim();

        if (content.length > len) {
            alert(msg);
            field.focus();
            return false;
        }

        return true;
    }

    min_length(selector, len, msg) {
        const field = document.getElementById(selector);
        const content = field.value.trim();

        if (content.length < len) {
            alert(msg);
            field.focus();
            return false;
        }

        return true;
    }

    regex_expr(selector, msg, regex_expr) {
        const field = document.getElementById(selector);
        let src = field.value.trim();

        if (!src || !regex_expr.test(src)) {
            alert(msg);
            field.focus();
            return false;
        }

        return true;
    }

    email(selector, msg) {
        return this.regex_expr(selector, msg, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
    }
}


