$(document).on('click','.botao',function(){
	var nome = $('.nome').val()
	var email = $('.email').val()
	if(nome == ""){
		$('.nome').addClass('erro') 
		return
	} else if($('.nome').hasClass('erro')){
		$('.nome').removeClass('erro')
	}

	if(email == ""){
		$('.email').addClass('erro')
		return
	} else if($('.email').hasClass('erro')){
		$('.email').removeClass('erro')
	}
	window.location = "https://www.uol.com.br/";
});
