let textarea = document.querySelector('.container__box');
let text_title = document.querySelector('.container__message--title');
let text_subtitle = document.querySelector('.container__message--subtitle');
let copiead_text = "";
const image_serach = document.querySelector('.image__search');
const image__copy = document.querySelector('.image__copy');

const button_copy = document.querySelector('.button__copy');
const button_encoder = document.getElementById("encoder");
const button_decoder = document.getElementById("decoder");

document.addEventListener("DOMContentLoaded", () => {
    textarea.innerHTML = ""
    textarea.focus();
    textarea.setSelectionRange(0, 0);
});

function especialCharacters(textarea) {
    const regex = /[^\w\s]|[^a-z\s]/;
    return regex.test(textarea);
}

function encoder(text_encoder) {
    text_encoder = text_encoder.replace(/e/g, "enter");
    text_encoder = text_encoder.replace(/i/g, "imes");
    text_encoder = text_encoder.replace(/a/g, "ai");
    text_encoder = text_encoder.replace(/o/g, "ober");
    text_encoder = text_encoder.replace(/u/g, "ufat");
    return text_encoder;
}

function decoder(text_decoder) {
    text_decoder = text_decoder.replace(/enter/g, "e");
    text_decoder = text_decoder.replace(/imes/g, "i");
    text_decoder = text_decoder.replace(/ai/g, "a");
    text_decoder = text_decoder.replace(/ober/g, "o");
    text_decoder = text_decoder.replace(/ufat/g, "u");
    return text_decoder;
}

button_encoder.addEventListener("click", () => {

    if (especialCharacters(textarea.value)) {
        alert("Não são permitidos caracteres especiais, acentos ou letras maiúsculas!");
        return;
    }

    let text_encoder = encoder(textarea.value);

    if (!text_encoder) {

        image_serach.classList.contains("hidden")
            && image_serach.classList.remove("hidden")

        text_title.innerHTML = "Nenhuma mensagem encontrada";
        text_subtitle.innerHTML = "Digite um texto que você deseja criptografar ou descriptografar."
    } else {
        text_title.innerHTML = "";
        !image_serach.classList.contains("hidden")
            && image_serach.classList.add("hidden");

        text_title.innerHTML = text_encoder;
        text_subtitle.innerHTML = "";
        image__copy.classList.add("hidden");
    }
});

button_decoder.addEventListener("click", () => {

    if (especialCharacters(textarea.value)) {
        alert("Não são permitidos caracteres especiais, acentos ou letras maiúsculas!");
        return;
    }

    let text_decoder = decoder(textarea.value);

    if (!text_decoder) {

        image_serach.classList.contains("hidden")
            && image_serach.classList.remove("hidden")

        text_title.innerHTML = "Nenhuma mensagem encontrada";
        text_subtitle.innerHTML = "Digite um texto que você deseja criptografar ou descriptografar."
    } else {
        text_title.innerHTML = "";
        !image_serach.classList.contains("hidden")
            && image_serach.classList.add("hidden");

        text_title.innerHTML = text_decoder;
        text_subtitle.innerHTML = "";
        image__copy.classList.add("hidden");
    }
});

button_copy.addEventListener("click", () => {
    
    navigator.clipboard.writeText(text_title.innerHTML)
    .then(() => {
        image__copy.classList.remove("hidden");
    })
    .catch(err => {
      console.error('Erro ao copiar texto para o clipboard: ', err);
    });

});