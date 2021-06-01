var játékmenet = document.querySelector('.játékkimenetele');
var játékaktive = true;
var Játékos = "X";
var játéktér = ["", "", "", "", "", "", "", "", ""];
var győzteskimenetelek = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function megjatszottCella(cellábakattintás, kattintasIndex) {
    játéktér[kattintasIndex] = Játékos;
    cellábakattintás.innerHTML = Játékos;
}
function játékosváltás() {
    Játékos = Játékos === "X" ? "O" : "X";
}
function játékellenorzo() {
    var gyozelem = false;
    for (let i = 0; i <= 7; i++) {
        var gyozelemfeltétel = győzteskimenetelek[i];
        var a = játéktér[gyozelemfeltétel[0]];
        var b = játéktér[gyozelemfeltétel[1]];
        var c = játéktér[gyozelemfeltétel[2]];
        if (a === b && b === c &&!(a === '' )) {
            gyozelem = true;
        }
    }
    if (gyozelem) {
        játékmenet.innerHTML = Játékos+ " játékos nyert";
        játékaktive = false;
        return;
    }
    let dontetlen = !játéktér.includes("");
    if (dontetlen) {
        játékmenet.innerHTML = "A játék döntetlen!";
        játékaktive = false;
        return;
    }
    játékosváltás();
}
function kattintottcella(kattintasesemeny) {
    var cellábakattintás = kattintasesemeny.target;
    var kattintIndex = parseInt(cellábakattintás.getAttribute('id'));
    if (játéktér[kattintIndex] !== "" || !játékaktive) {
        return;
    }
    megjatszottCella(cellábakattintás, kattintIndex);
    játékellenorzo();
}
document.querySelectorAll('.cella').forEach(cella => cella.addEventListener('click', kattintottcella));
