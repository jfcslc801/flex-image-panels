// function to toggle flex panels
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));