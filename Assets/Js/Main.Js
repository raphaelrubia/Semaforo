function pare () {
   document.querySelector('#vermelho').classList.remove('opacidade');
   document.querySelector('#amarelo').classList.add('opacidade');
   document.querySelector('#verde').classList.add('opacidade');
}

function atencao () {
   document.querySelector('#vermelho').classList.add('opacidade');
   document.querySelector('#amarelo').classList.remove('opacidade');
   document.querySelector('#verde').classList.add('opacidade');
}

function siga () {
   document.querySelector('#vermelho').classList.add('opacidade');
   document.querySelector('#amarelo').classList.add('opacidade');
   document.querySelector('#verde').classList.remove('opacidade');
}


function automatico () {
const Cores = ['vermelho', 'amarelo', 'verde'];
let CorIndex = 0;
 setInterval(() => {
   CorIndex = CorIndex % Cores.length;
   console.log(CorIndex);
   document.querySelector('.opacidade').classList.remove('opacidade');
   CorIndex++;
   
 }, 1000); 
}



      
      