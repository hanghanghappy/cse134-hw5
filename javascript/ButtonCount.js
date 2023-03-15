class ButtonCount extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: "open"});

        let counter = 0;
        let button = document.createElement("button");
        
        button.addEventListener("click", () => {
            counter++;
            button.textContent = `Times Clicked: ${counter}`;
        })
        button.textContent = `Times Clicked: ${counter}`;
        shadow.append(button);
    }
}
customElements.define("button-count", ButtonCount)