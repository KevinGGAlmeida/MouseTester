let button = document.querySelector('#Click');
var count = 0
BtnEsquerdo = document.getElementById("Esquerdo")
BtnMeio = document.getElementById("Meio")
BtnDireito = document.getElementById("Direito")

function ResetClicks(){
    BtnEsquerdo.innerText = 0
    BtnMeio.innerText = 0
    BtnDireito.innerText = 0
}

button.addEventListener('mouseup', (e) => {
  let log = document.querySelector('#teste');
  console.log(log)
  switch (e.button) {
    case 0:
      BtnEsquerdo.innerText = parseInt(BtnEsquerdo.innerText) + 1;
      break;
    case 1:
        BtnMeio.innerText = parseInt(BtnMeio.innerText) + 1;
        break;
    case 2:
        BtnDireito.innerText = parseInt(BtnDireito.innerText) + 1;
        break;
  }

  count++
  Botao = e.button
});

document.addEventListener('contextmenu', event => event.preventDefault());
document.body.onmousedown = function(e) { if (e.button === 1) return false; }
