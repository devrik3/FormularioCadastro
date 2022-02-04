$('#cadastroCliente').click(() => {
	$('#areaVerClientes').toggleClass('hideArea');
	$('#areaCadastro').toggleClass('showForm');
})

let buttonPrimeiroEstagio = document.getElementById('proximo-estg1-btn');
let buttonSegundoEstagio = document.getElementById('proximo-estg2-btn');

let primeiraSessao = document.getElementById('primeiroEstagio');
let segundaSessao = document.getElementById('segundoEstagio');
let terceiraSessao = document.getElementById('terceiroEstagio')

let areaCadastro = document.getElementById('areaCadastro');
let areaClientes = document.getElementById('areaVerClientes');
buttonPrimeiroEstagio.addEventListener('click', () => {
	
	primeiraSessao.classList.toggle('hideForm');
	segundaSessao.classList.toggle('viewForm');

})

buttonSegundoEstagio.addEventListener('click', () => {
	
	primeiraSessao.classList.toggle('d-none');
	segundaSessao.classList.toggle('d-none');
	terceiraSessao.classList.toggle('showForm')


	setTimeout(() => {
		areaCadastro.classList.toggle('d-none-tela');
		areaClientes.classList.toggle('d-flex')
	}, 3500)

})