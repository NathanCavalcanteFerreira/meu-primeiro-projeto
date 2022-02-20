// selecionando o dino
// selecionado os cactus
const dino = document.querySelector('.dino');
const fundo = document.querySelector('.fundo'); 
let position = 0;
 let estaPulando = false;

// lidando com o keyup
function handdleKeyUp(event) {
    if (event.keyCode === 32);
        if (estaPulando){
            jump();
         }
    jump();
     }

// função pulo
function jump () {
    estaPulando = true;
    
    let upInterval = setInterval(function(){
        if (position >= 170){
            clearInterval(upInterval);
           
            //descendo]
            let downInterval = setInterval(function(){
                if (position <= 0){
                clearInterval(downInterval);
                estaPulando = false;
            }else{
            position -= 15;
            dino.style.bottom = position + 'px';
                }
            }, 20);
        } else{
            //pulando
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomtime = Math.random() * 6500;




    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    fundo.appendChild(cactus);

    let leftInterval = setInterval(function(){
        cactusPosition -= 5;
        cactus.style.left = cactusPosition + 'px';

        if (cactusPosition < -60){
            clearInterval(leftInterval);
            fundo.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            // contato

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over"> fim de jogo </h1>';
        } else {cactusPosition -= 5;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20)
    setTimeout(createCactus, randomtime);
 }
createCactus();
document.addEventListener('keyup', handdleKeyUp);
