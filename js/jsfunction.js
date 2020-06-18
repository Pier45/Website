var storeM = []
const carosS = document.querySelector('.slide');
const carosI = document.querySelectorAll('.slide img');

const prevB = document.querySelector('#prevB');
const nextB = document.querySelector('#nextB');

let counter = 1;
let sizeImages = carosI[0].clientWidth;

nextB.addEventListener('click', function(){
    if (counter >= carosI.length -1) return;
    counter++;
    carosS.style.transition = '0.4s ease-in-out';
    carosS.style.transform = 'translateX('+ (-sizeImages*counter) + 'px)';
    console.log(sizeImages, counter);
})

prevB.addEventListener('click', function(){
    if (counter <= 0) return;
    counter--;
    carosS.style.transition = '0.4s ease-in-out';
    carosS.style.transform = 'translateX('+ (-sizeImages*counter) + 'px)';
    console.log(sizeImages, counter);
})

carosS.addEventListener('transitionend', function(){
    console.log(carosI[counter].id)

    if (carosI[counter].id === 'lastclone'){
        console.log('sono nella f')
        carosS.style.transition = 'none';
        counter = carosI.length - 2;
        carosS.style.transform = 'translateX('+ (-sizeImages*counter) + 'px)';
    }
    if (carosI[counter].id === 'firstclone'){
        console.log('sono nella f')
        counter = carosI.length - counter;
        carosS.style.transform = 'translateX('+ (-sizeImages*counter) + 'px)';
    }
})


function closeMenu(){
    var eclick = document.getElementById("menu-btn");
    eclick.checked = false;
    console.log(eclick.textContent)
}

function eMail(){
    const mail = document.getElementById("Email");
    storeM.push(mail.value)
    console.log(storeM);
}