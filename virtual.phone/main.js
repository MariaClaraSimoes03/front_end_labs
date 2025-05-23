const display =document.querySelector('input[type=tel]');

const teclas=document.querySelectorAll('input[type=button]');

const limpar = document.querySelector('.icon');

limpar.onclick = () => {
  const opcao = confirm( 'Deseja mesmo limpar?');
  if (opcao){
    display.value= "";
}

  }
  
function valorTeclaToDisplay(i){
  display.value += teclas[i].value;
}

for(let i = 0; i < teclas.length; i++){
  console.log(teclas[i].value);

  teclas[i].onclick =() => {
  valorTeclaToDisplay(i);}
}

function valorTeclaToDisplay(i){
  if (display.value.length< 14){
    display.value += teclas[i].value;
  } else {
    alert("Limite de 14 dígitos atingidos");
    
  }
}

