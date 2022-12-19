//JS Fundamental part 2:
//003:
function fun() {
    console.log("I am Atiq");
}

fun();

function JuicePro(apples, oranges) {
    console.log(apples, oranges);
    const juice = 'Juice with ' + apples + ' apples and ' + oranges + ' oranges.';
    return juice;
}
const AppleJuice = JuicePro(5,0);
console.log(AppleJuice);

// Arrow functions

const Age = birthYeah => 2037 - birthYeah;
const a = Age(1991);
console.log(a);

const yearsRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return '${firstName} retires in ${retirement} years';
}
console.log(yearsRetirement(1991, 'Jonas')); console.log(yearsRetirement(1980, 'Bob'));

//coding ch#1:
const Average = (a, b, c) => (a + b + c) / 3;
console.log(Average(3, 4, 5));

// Test 1
let DolphinSc = Average(44, 23, 71);
let KoalasSc = Average(65, 54, 49);
console.log(DolphinSc, KoalasSc);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log('Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})');
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log('Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})');
  } else {
    console.log('No team wins...');
  }
}
checkWinner(DolphinSc, KoalasSc);

checkWinner(576, 111);

// Test 2
DolphinSc = Average(85, 54, 41);
KoalasSc = Average(23, 34, 27);
console.log(DolphinSc, KoalasSc);
checkWinner(DolphinSc, KoalasSc);

// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

