import { nextTick } from 'vue';

export function debounce(fn) {
    let waiting;
    return function() {
        if (waiting) return;
        waiting = true;
        const context = this,
            args = arguments;
        const later = function() {
            waiting = false;
            fn.apply(context, args);
        };
        nextTick(later);
    };
}
