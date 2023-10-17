function createFallingElement() {
    const element = document.createElement("img");
    element.src = "hojas.png";
    element.className = "falling-element";
    element.style.left = `${Math.random() * (window.innerWidth - 50)}px`; // Random horizontal position
    document.getElementById("container").appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 4000);
}

setInterval(createFallingElement, 1500);