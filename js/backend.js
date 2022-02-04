let form = document.getElementById('formulario');
// inputs de dados
let fNome = document.getElementById('fNome').value;
let fEmail = document.getElementById('fEmail').value;
let fTel = document.getElementById('fTelefone').value;
let fIden = document.getElementById('fIdentificador').value;
let fEnd = document.getElementById('fEndereco').value;


form.addEventListener('submit', (e) => {
	
	var cliente = {
			'nome': fNome,
			'email': fEmail,
			'telefone': fTel,
			'Iden': fIden,
			'Endereco': fEnd,
		  }
	console.log(cliente);
	// if( ! fNome ) {
	// 	e.preventDefault();
	// 	return false;

	// } else if( ! fEmail ) {  
	//     e.preventDefault();
	//     return false;

	// } if ( ! fTel) {
	//    	e.preventDefault();
	//    	return false;

	// } else if ( ! fIden ){
	// 	e.preventDefault()
	// 	return false;
	// } if ( ! fEnd ){


	//   	e.preventDefault();
	//   	return false; 
	// }
 	e.preventDefault();

})