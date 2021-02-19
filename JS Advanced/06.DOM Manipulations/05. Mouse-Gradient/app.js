function attachGradientEvents() {
    let box = document.getElementById('gradient');
    let result = document.getElementById('result');

    box.addEventListener('mousemove', (e) => {
        result.innerHTML = `${Math.trunc((e.offsetX / (e.target.clientWidth - 1)) * 100)}%`;
    })

    box.addEventListener('mouseout', () => {
        result.innerHTML = '';
    })
}