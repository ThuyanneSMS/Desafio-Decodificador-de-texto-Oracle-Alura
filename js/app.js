
//s "chaves" de criptografia que utilizaremos são:
// A letra "a" é convertida para "auau"
// A letra "e" é convertida para "gerr"
// A letra "i" é convertida para "him"
// A letra "o" é convertida para "woof"
// A letra "u" é convertida para "huwl"

const decaodificar = document.getElementById("botao_decaodificar");
const descaodificar = document.getElementById("botao_descaodificar");
const copia = document.getElementById("botao__copiar");
const textoInicial = document.getElementById("textoInput");
const textFinal = document.getElementById("textoFinal");
const doguinho = document.getElementById("doguinho");
const textInfo = document.getElementById("textoInfo");
const lado = document.getElementById("lado")
	
const remplace = (newvalue) => {
	textFinal.innerHTML = newvalue;
	textFinal.classList.add("ajustar");
	lado.classList.add("ajuste")
	textoInicial.value = "";
	textoInicial.style.height = "auto"
	textoInicial.placeholder = "Escreva seu texto aqui";
	doguinho.classList.add("ocultar");
	textInfo.classList.add("ocultar");
	copia.classList.remove("bn_ocultar");
}

const reset = () => {
	textoInicial.value = "";
    textoInicial.style.height = "auto";
	textFinal.innerHTML = "";
	lado.classList.remove("ajuste")
	textFinal.classList.remove("ajustar");
	doguinho.classList.remove("ocultar");
	textFinal.placeholder = "Nenhuma mensagem foi encontrada";
	textInfo.classList.remove("ocultar")
	copia.classList.add("bn_ocultar");
	textoInicial.focus();
};

let substituir = [
	["a", "haw"],
	["e", "gerr"],
	["i", "him"],
	["o", "woof"],
	["u", "huwl"]
];

decaodificar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function encript(newtext) {
			for (let i = 0; i < substituir.length; i++) {
				if (newtext.includes(substituir[i][0])) {
					newtext = newtext.replaceAll(substituir[i][0], substituir[i][1]);
				};
			};
			return newtext;
		};
		remplace(encript(texto));
	} else {
		reset();
	};
});

descaodificar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function desencript(newtext) {
			for (let i = 0; i < substituir.length; i++) {
				if (newtext.includes(substituir[i][1])) {
					newtext = newtext.replaceAll(substituir[i][1], substituir[i][0]);
				};
			};
			return newtext;
		};
		remplace(desencript(texto));
	} else {
		reset();
	};
});

copia.addEventListener("click", () => {
	let texto = textFinal;
	texto.select();
	document.execCommand('copia');
	
	alert("Texto Copiado");
	reset();
});

textoInicial.addEventListener("change", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});
textoInicial.addEventListener("keyup", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});