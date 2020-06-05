var storeM = []
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