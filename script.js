function enviaFormulario(){
    let nome = document.getElementById("nome").value
    console.log(nome)
    let email = document.getElementById("email").value
    console.log(email)
    let CPF = document.getElementById("cpf").value
    console.log(CPF)
    let senha = document.getElementById("senha").value
   console.log(senha)
   let senhaRepetida = document.getElementById("senha-repetida").value
   console.log(senhaRepetida)
   let resposta = document.getElementById("resposta");

   resposta.innerText = " "
   resposta.style.color = "red"
   if(nome === ""){
      resposta.innerText = "Nome não pode estar vazio!"
      return;
   }
   
   if(email.indexOf("@")=== -1 || email.indexOf(".com")=== -1){
     resposta.innerText = "Email incorreto"
     return;
   }
   if(CPF.length !== 11){
     resposta.innerText = "O CPF precisa ter 11 dígitos"
     return;
   }
   let temMaiuscula = false 
   let temMinuscula = false
   let temEspecial = false
   let especiais = "!,@,#,$,%,&,*,?,+"
    for(let i = 0; i < senha.length; i++){
      let letra = senha[i]
      if( letra >= "A" && letra <="Z" ){
         temMaiuscula = true
      }
      else if(letra >= "a" && letra <="z"){
         temMinuscula = true 
      }
      else if(especiais.indexOf(letra) !== -1){
         temEspecial = true
      
      }
   }
       if(!temMaiuscula || !temMinuscula || !temEspecial ){
         resposta.innerText = "Senha fraca demais!" 
         return;
       }
         if(senhaRepetida.indexOf(senha)=== -1){
         resposta.innerText = "As senhas não coincidem! "
         return;
         }else{
         resposta.style.color = "green"
         resposta.innerText = "Formulário enviado com sucesso!"
         }
      }


     
   
