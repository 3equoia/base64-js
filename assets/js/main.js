let text = null;
let result = null;
const input = document.querySelector("input.text");
const button = document.querySelector("button");
const textarea = document.querySelector("textarea");
const form = document.querySelector("form")

input.addEventListener("change", e => {
    text = e.target.value;
});

form.addEventListener("submit", e => {
    e.preventDefault();
});

isEncoded.addEventListener("change", e => {
    isChecked = isEncoded.checked
})

function converter () {
    console.log(text)
    if (text === null) {
        return
    }

    if (btoa(atob(text)) === text) {
        result = atob(text);
    } else {
        try {
            result = btoa(String(text));
            // result = btoa(unescape(encodeURIComponent(text)));
        } catch {
            alert('')
        }
    }
    textarea.textContent = ''
    input.value = ''
    textarea.textContent = result
    textarea.style.display = "block"
}
