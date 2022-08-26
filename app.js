// permet de selection l'icone dans la barre de nav
let navicons = document.querySelectorAll('.play-pause span');

for (let icon of navicons) {
    icon.addEventListener('click', function(){

        document
        .querySelector('.play-pause span.active')
        .classList.remove('active');

        this.classList.add('active')

    });
}

// CAROUSSELLE

let images = document.querySelectorAll('#galery img');
let imgActive = 0;
images[imgActive].classList.add('show')
//masquer les photos sauf la première
for (let i = 1; i < images.length; i++){
    images[i].classList.add('hidden');
}

// Click sur bouton suivant
document.querySelector('#next').addEventListener('click', function(){
    next();
});

// Fonction pour photo suivante
const next = function(){
    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive += 1;
    if (imgActive >= images.length){
        imgActive = 0;
    }
    images[imgActive].classList.remove('hidden');
    setTimeout(function(){
        images[imgActive].classList.add('show');
    }, 200);
};

// Click sur bouton previous
document.querySelector('#previous').addEventListener('click', function(){
    previous();
});

// Fonction pour photo précédente
const previous = function(){
    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive -= 1;
    if (imgActive < 0){
        imgActive = images.length - 1;
    }
    
    images[imgActive].classList.remove('hidden');
    setTimeout(function(){
        images[imgActive].classList.add('show');
    }, 200);
}


// Variable globale pour stocker l'interval de temps
let interval;
// Click sur bouton play
document.querySelector('#play').addEventListener('click', function(){
    interval = setInterval(next, 3000);// Création de l'interval
});

// Click sur bouton pause
document.querySelector('#pause').addEventListener('click', function(){
    clearInterval(interval); // Destruction de l'interval
});


// gestion touches clavier
window.addEventListener('keydown', function(e){
    if (e.key == 'ArrowRight'){
        next();
    }
    if (e.key == 'ArrowLeft'){
        previous();
    }
});

