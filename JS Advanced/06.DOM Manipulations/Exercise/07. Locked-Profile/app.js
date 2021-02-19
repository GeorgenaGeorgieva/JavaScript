function lockedProfile() {
    let buttons = document.getElementsByTagName('button');

    for (const button of buttons) {
        button.addEventListener('click', () => {
            let radio = button.parentElement.querySelectorAll('input');
            let lock = radio[0];
            let unlock = radio[1];
            let info = button.parentElement.getElementsByTagName('div')[0];

            isLocked(lock, button, info);

            button.disabled = false;

            isUnlocked(unlock, button, info);
        })
    }

    function isUnlocked(unlock, button, info) {
        if (unlock.checked === true) {
            if (button.innerHTML === 'Hide it') {
                info.style.display = 'none';
                button.innerHTML = 'Show more';
            } else {
                info.style.display = 'block';
                button.innerHTML = 'Hide it';
            }
        }
    }

    function isLocked(lock, button, info) {
        if (lock.checked === true) {
            if (button.innerHTML === 'Hide it') {
                button.disabled = true;
            } else {
                button.disabled = false;
                info.style.display = 'none';
                button.innerHTML = 'Show more';
            }
        }
    }
}