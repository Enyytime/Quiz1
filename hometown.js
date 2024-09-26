let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0; // Start with the first slide (0 index)

function loadShow() {
    let start = 0;
    
    items[active].style.transform = 'translateX(-50%)'; // Center the active slide
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Handle next slides (right side)
    for (let i = active + 1; i < items.length; i++) {
        start++;
        items[i].style.transform = `translateX(${150 * start}px) scale(${1 - 0.2 * start}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -start;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = start > 2 ? 0 : 0.6;
    }

    // Reset for previous slides (left side)
    start = 0;
    for (let i = active - 1; i >= 0; i--) {
        start++;
        items[i].style.transform = `translateX(${-150 * start}px) scale(${1 - 0.2 * start}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -start;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = start > 2 ? 0 : 0.6;
    }
}

loadShow();

// Event handler for next button
next.onclick = function () {
    active = (active + 1) % items.length; // Loop back to first slide after last one
    loadShow();
};

// Event handler for prev button
prev.onclick = function () {
    active = (active - 1 + items.length) % items.length; // Loop back to last slide after first one
    loadShow();
};
