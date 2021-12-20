const cursorOutsideElement = (element, closingElement) => {
    document.addEventListener("mousedown", (e) => {
        if(!element.contains(e.target)){
            closingElement.classList.add("hidden");
        }
    })
}