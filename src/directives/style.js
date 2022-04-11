function unit(value) {
    return String(value).endsWith('%') ? '' : 'px';
}

export default {
    display: {
        mounted (el, binding) {
            if (binding.value) {
                el.style.display = binding.value;
            }
        },
        updated (el, binding) {
            if (binding.value) {
                el.style.display = binding.value;
            }
        },
        unmounted (el) {
            el.style.display = null;
        }
    },
    width: {
        mounted (el, binding) {
            if (binding.value) {
                el.style.width = binding.value + unit(binding.value);
            }
        },
        updated (el, binding) {
            if (binding.value) {
                el.style.width = binding.value + unit(binding.value);
            }
        },
        unmounted (el) {
            el.style.width = null;
        }
    },
    height: {
        mounted (el, binding) {
            if (binding.value) {
                el.style.height = binding.value + unit(binding.value);
            }
        },
        updated (el, binding) {
            if (binding.value) {
                el.style.height = binding.value + unit(binding.value);
            }
        },
        unmounted (el) {
            el.style.height = null;
        }
    },
    margin: {
        mounted (el, binding) {
            if (binding.value) {
                el.style.margin = binding.value + unit(binding.value);
            }
        },
        updated (el, binding) {
            if (binding.value) {
                el.style.margin = binding.value + unit(binding.value);
            }
        },
        unmounted (el) {
            el.style.margin = null;
        }
    },
    padding: {
        mounted (el, binding) {
            if (binding.value) {
                el.style.padding = binding.value + unit(binding.value);
            }
        },
        updated (el, binding) {
            if (binding.value) {
                el.style.padding = binding.value + unit(binding.value);
            }
        },
        unmounted (el) {
            el.style.padding = null;
        }
    },
    font: {
        mounted (el, binding) {
            if (binding && binding.value) {
                el.style.fontSize = `${binding.value}px`;
            }
        },
        updated (el, binding) {
            if (binding && binding.value) {
                el.style.fontSize = `${binding.value}px`;
            }
        },
        unmounted (el) {
            el.style.fontSize = null;
        }
    },
    color: {
        mounted (el, binding) {
            if (binding.value) {
                el.style.color = binding.value;
            }
        },
        updated (el, binding) {
            if (binding.value) {
                el.style.color = binding.value;
            }
        },
        unmounted (el) {
            el.style.color = null;
        }
    },
    bgColor: {
        mounted (el, binding) {
            if (binding.value) {
                el.style.backgroundColor = binding.value;
            }
        },
        updated (el, binding) {
            if (binding.value) {
                el.style.backgroundColor = binding.value;
            }
        },
        unmounted (el) {
            el.style.backgroundColor = null;
        }
    },
}
