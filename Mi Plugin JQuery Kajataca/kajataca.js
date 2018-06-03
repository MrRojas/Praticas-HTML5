var numeroAleatorio = function numeroAleatorio2(inferior,superior){ 
   	var numPosibilidades = superior - inferior 
   	var aleat = Math.random() * numPosibilidades 
   	aleat = Math.round(aleat) 
   	return parseInt(inferior) + aleat 
}

String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, "")}

;(function($){

	$.fn.extend({

		/*Manipulacion de elementos Basicos */

		// efecto de sombra 
			sombra : function(color){
				return this.each(function(){

					if(!color) $(this).css("box-shadow",".1em .1em 1em white"); 
					$(this).css("box-shadow",".1em .1em 1em "+color);

				});
			},

		// desabilitar botones 
			disabled : function(valor){

				return this.each(function(){

					$(this).prop('disabled', valor );
				});
			}, 
		// ocultar y mostrar elementos 

			visibilidad : function(val){

				return this.each(function(){
					
					if(val) $(this).css('display', 'block');
					else $(this).css('display', 'none');

				});
			},
		//----------------------------

		/*Animacion simplificada de WoW.js y Animate.css*/

		

		//----------------------------



		/*Validacion de Formularios*/
		
		// no permite copiar y pegar en la caja de texto
		noCopiar: function(){

			return this.each(function(){
				$(this).bind("cut copy paste", function(e){
				e.preventDefault();
				return false;
				});
			});
		},

		// transformar letras a mayuscula 
		mayuscula: function(){

			return this.each(function() {
				$(this).keyup(function(event) {
   					$(this).val($(this).val().toUpperCase());
  				 });
			});
		},

		// validar entrada por teclado
		validCampo: function(b){
			$(this).on(
				{
					keypress:function(a){
					var c=a.which,
					d=a.keyCode,
					e=String.fromCharCode(c).toLowerCase(),
					f=b;
					(-1!=f.indexOf(e)||9==d||37!=c&&37==d||39==d&&39!=c||8==d||46==d&&46!=c)&&161!=c||a.preventDefault();
					
					}
			});
		},

		// validar maximo de cadena 
		
		longitudMax: function(value){

			this.each(function(){
  
				$(this).attr('maxlength', value.toString() );
			});
		},

		// validar campo Vacio
		
		campoVacio: function(id){

			this.each(function(){
  				
  				if($(this).val() == ""  ){
					$(this).sombra("red")
					$(id).html("Campo Vacio")
					localStorage.control =  -1
  				}
  				else{
  					$(this).sombra(false)
  					$(id).html("")
  					

  				}
			});
		},

		// valida longitud del texto
		
		longitud: function(id , cantMax ){

			this.each(function(){
  				

  				if($(this).val().trim().length < cantMax   ){
					$(this).sombra("red")
					$(id).html("Necesita por lo menos "+cantMax+' caracteres')
					localStorage.control =  -1
  				}
  				else{
  					$(this).sombra(false)
  					$(id).html("")
  				
  				}
			});
		},

		comparar: function(objecto , id){

			this.each(function(){
  				
  				if($(this).val() != objecto.val()  ){
					$(this).sombra("red")
					$(id).html('No coinciden con el campo anterior')
					localStorage.control =  -1
  				}
  				else{
  					$(this).sombra(false)
  					$(id).html("")
  				}
			});
		},

		quitarEspacio: function(objecto , id){

			this.each(function(){
  				
  				$(this).val($(this).val().trim())
					
  				
			});
		},

		claveSegura: function(id){

			this.each(function(){
  				
  				let letraM = /[A-Z]+/
  				let letra  = /[a-z]+/
  				let digito = /[0-9]+/
  				let cadena = $(this).val()
  				
  			if( !letraM.test(cadena)  || !digito.test(cadena) || letra.test(cadena) ){
					
					$(this).sombra("red")
					$(id).html('No es una clave segura')
					localStorage.control =  -1
  			}else{
  					$(this).sombra(false)
  					$(id).html("")
  			}
  				
			});
		},

	




		
		//---------------------------------

		

		/* Tooltip con JQuery.flyout.js */

		
	//--------
	//---------------------------------
	
	/* Sistema de Enrutamiento Armando Rojas */
			ruta: function(url){

				return this.each(function(){

					$(this).click( () => window.location.href = url )
				})
			},
		//---------------------------------
		
		/* borrar Area */
			borrar: function(nodo){

				return this.each(function(){

					$(this).click( () => {$(nodo).html("")} );
				});
			},



		//---------------------------------
		//
	

		//---------------------------------
		

		/*Prueba de alerta  */

		//prueba del objecto 

		test: function(){
			alert("Hola Armandito <3");
		}

		//------------------------------------


	});
})(jQuery);