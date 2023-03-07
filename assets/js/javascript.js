const usrEscolhe = document.querySelector('.box-escolha');
const compEscolhe = document.querySelector('.computador-escolhe');
const jogo = document.querySelectorAll(".box");
const usrFrase = document.querySelector(".usr");
const cmpFrase = document.querySelector(".comp");
let human = 0;

function compChoice(value){
    if(value == 0){
        const img = document.createElement('img');
        img.src = '../assets/img/paper-red.png';
        img.id = 'usrImg'
        compEscolhe.appendChild(img);
        console.log(img);
    }
    else if(value == 1){
        const img = document.createElement('img');
        img.src = '../assets/img/rock-red.png';
        compEscolhe.appendChild(img);
        console.log(img);
    }
    else if(value == 2){
        const img = document.createElement('img');
        img.src = '../assets/img/scisor-red.png';
        compEscolhe.appendChild(img);
        console.log(img);
    }
    else console.log(value);
}
const comp = Math.floor(Math.random() * 2);

function choice(value){
    
    if(value == "paper"){
        const img = document.createElement('img');
        img.src = '../assets/img/paper-green.png';
        img.id = 'usrImg'
        usrEscolhe.appendChild(img);
        human = 0;
    }
    else if(value == "rock"){
        const img = document.createElement('img');
        img.src = '../assets/img/rock-green.png';
        usrEscolhe.appendChild(img);
        human = 1;
    }
    else if(value == "scisor"){
        const img = document.createElement('img');
        img.src = '../assets/img/scisor-green.png';
        usrEscolhe.appendChild(img);
        human = 2;
    }
    else console.log(value);
}

function resultText(value){
    if(value == 'empate'){
        let usr1 = document.createElement('h2');
        let cmp1 = document.createElement('h2');
        usr1.innerHTML = 'Empate';
        cmp1.innerHTML = 'Empate';
        usrFrase.appendChild(usr1);
        cmpFrase.appendChild(cmp1);
    }
    else if (value == 'comp'){
        let usr1 = document.createElement('h2');
        let cmp1 = document.createElement('h2');
        let usr2 = document.createElement('h1');
        let cmp2 = document.createElement('h1');
        usr1.innerHTML = 'Humano';
        cmp1.innerHTML = 'Computador';
        usr2.innerHTML = 'Perdeu!!';
        cmp2.innerHTML = 'Ganhou!!';
        usrFrase.appendChild(usr1);
        usrFrase.appendChild(usr2);
        cmpFrase.appendChild(cmp1);
        cmpFrase.appendChild(cmp2);
    }
    else if(value == 'human'){
        let usr1 = document.createElement('h2');
        let cmp1 = document.createElement('h2');
        let usr2 = document.createElement('h1');
        let cmp2 = document.createElement('h1');
        usr1.innerHTML = 'Humano';
        cmp1.innerHTML = 'Computador';
        usr2.innerHTML = 'Ganhou!!';
        cmp2.innerHTML = 'Perdeu!!';
        usrFrase.appendChild(usr1);
        usrFrase.appendChild(usr2);
        cmpFrase.appendChild(cmp1);
        cmpFrase.appendChild(cmp2);
    }
}

function result(){
    if(human == 0 && comp == 1) resultText('human');
    else if(human == 0 && comp == 2) resultText('comp');
    else if(human == 1 && comp == 0) resultText('comp');
    else if(human == 1 && comp == 2) resultText('human');
    else if(human == 2 && comp == 0) resultText('human');
    else if(human == 2 && comp == 1) resultText('comp');
    else resultText('empate');
}
        

jogo.forEach((e) => {
    e.addEventListener('click', ()=>{
        const idItem = e.getAttribute('id');
        choice(idItem);
        compChoice(comp);
        result();
        setTimeout(function() {
            location.reload();
        }, 5000);
    });
});