let kolor = document.getElementById("kolor");
let serce = document.querySelector(".serce");
let les = serce.children;

function zmianaKoloru() {
    serce.style.backgroundColor = kolor.value;
    
    for (let i = 0; i < les.length; i++)
    {
        les[i].style.opacity = "0";
    }
}
