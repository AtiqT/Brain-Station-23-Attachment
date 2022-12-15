Coding challenge 1:

const MarkMass = 50;
const JohnMass = 65;
const MarkH = 5;
const JohnH = 5;

const MarkBMI = MarkMass / (MarkH * MarkH);
const JohnBMI = JohnMass / (JohnH * JohnH);
const markHigherBMI = MarkBMI > JohnBMI;
console.log(MarkBMI, JohnBMI, markHigherBMI);

013:
const age = 12;
const old = age >= 18;

if(old)
{
    console.log('allowed!', old);
}
else
{
    console.log('Not allowed!', old);
}

Coding challenge 2:

const MarkMass = 50;
const JohnMass = 65;
const MarkH = 5;
const JohnH = 7;

const MarkBMI = MarkMass / (MarkH * MarkH);
const JohnBMI = JohnMass / (JohnH * JohnH);
if (MarkBMI > JohnBMI) {
    console.log('Mark BMI(${MarkBMI}) is Higher than John');
}
else{
    console.log('Johns BMI is Higher than Mark')
}
