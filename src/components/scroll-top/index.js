function requestAnimation(task) {
    if ('requestAnimationFrame' in window) {
        return window.requestAnimationFrame(task);
    }

    setTimeout(task, 16);
}

export default function (el, settings, callback) {
    if (!el) {
        return;
    }

    if (typeof settings === 'function') {
        callback = settings;
        settings = null;
    }

    if (!settings) {
        settings = {};
    }

    settings.time = isNaN(settings.time) ? 500 : settings.time;

    const from = el.scrollTop;
    const to = settings.to || 0;

    const difference = Math.abs(from - to);
    const step = Math.ceil(difference / settings.time * 50);

    function scroll(start, end, step) {
        if (start === end) {
            callback && callback();
            return;
        }

        let d = (start + step > end) ? end : start + step;
        if (start > end) {
            d = (start - step < end) ? end : start - step;
        }

        el.scrollTop = d;
        requestAnimation(() => scroll(d, end, step));
    }
    scroll(from, to, step);
}