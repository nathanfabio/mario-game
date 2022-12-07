
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.game-over');
const gameStart = document.querySelector('.game-start');

do {
   pipe.style.animation = 'none';
   mario.style.animation = 'none';
   clouds.style.animation = 'none';
   gameStart.classList.add('game-start-on')
} while (document.addEventListener('keypress', (event) => {
   if (event.which == 13) {
      gameStart.classList.remove('game-start-on')
      pipe.style.animation = '';
      mario.style.animation = '';
      clouds.style.animation = '';
   }  
}))


document.addEventListener('keypress', function(e){
    if(e.which == 32){
     mario.classList.add('jump');
     setTimeout(() => {
        mario.classList.remove('jump');
     }, 500);
    }
 });

 const loop = setInterval(() => {  

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;

    

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '47px'

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        gameOver.classList.add('game-over-on');

        clearInterval(loop);

    }

 }, 10);