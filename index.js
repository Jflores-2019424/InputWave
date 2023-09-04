function updateText(text){

    let delay = 200;

    let label = document.getElementById("animated")

    label.innerHTML = text.split("").map(letter => {
        console.log(letter);
        return `<span>` + letter + `</span>`;
    }).join("")

    Array.from(label.children).forEach((span, index) =>{
        setTimeout(() => {
            span.classList.add("wavy");
        }, index * 60 + delay)
    });

}