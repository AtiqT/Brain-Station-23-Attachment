const hasDriverL = true;
const hasGoodV = false;
console.log (hasDriverL && hasGoodV);
console.log (hasDriverL || hasGoodV);

const shouldDrive = hasDriverL && hasGoodV;
if(shouldDrive) {
    console.log("Sarah can drive");
}else {
    console.log("cant drive");
}

//Coding Challenge#3:
const DolphineAvg = (96 + 108 + 89) / 3;
const KoalasAvg = (88 + 91 + 110) / 3;

console.log(DolphineAvg);
console.log(KoalasAvg);

if(DolphineAvg > KoalasAvg) {
    console.log("Dolphine win");
} else if(KoalasAvg > DolphineAvg){
    console.log("Koalas win");
}else {
    console.log("Draw");
}

//coding Challenge#4:
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(tip, bill + tip);
