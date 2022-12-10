const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
    const length = input.value.length;
    const quantity = input.getAttribute('data-length');
    if (quantity < length || length === 0) {
        input.classList.add('invalid');
    }
    input.classList.add('valid');
});
