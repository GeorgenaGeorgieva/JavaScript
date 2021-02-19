function notify(message) {
    let notification = document.getElementById('notification');
    notification.innerHTML = message;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}