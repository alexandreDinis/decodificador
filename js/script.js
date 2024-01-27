function validarEntrada(texto) {
  const regex = /^[a-z ]+$/; 
  return regex.test(texto);
}

function criptografar() {
  const texto = document.querySelector(".main__input-right").value.trim();

  if (!validarEntrada(texto)) {
      alert("Por favor, insira apenas letras minúsculas e espaços.");
      return;
  }

  const textoCriptografado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

  document.querySelector("#textarea").value = textoCriptografado;
  document.querySelector(".main__input-right").value = "";

  toggleCopiarButton();
}

function descriptografar() {
  const texto = document.querySelector(".main__input-right").value.trim();

  if (!validarEntrada(texto)) {
      alert("Por favor, insira apenas letras minúsculas e espaços.");
      return;
  }

  const textoDescriptografado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

  document.querySelector("#textarea").value = textoDescriptografado;
  document.querySelector(".main__input-right").value = "";
  
  toggleCopiarButton();
}

  function copiar() {

    const texto = document.querySelector("#textarea").value;

    navigator.clipboard.writeText(texto)
      
  }

  function toggleCopiarButton() {

    const textarea = document.querySelector("#textarea");

    const copiarButton = document.querySelector(".main__button-copiar");
    
    if (textarea.value.trim() !== "") {
        copiarButton.style.display = "inline-block";
    } else {
        copiarButton.style.display = "none";
    }
}

toggleCopiarButton();

 