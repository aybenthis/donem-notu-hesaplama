const vize = 50;
const final = 100;
let harfNotu = 'A';
const vizeAgirlik = 0.3;
const finalAgirlik = 0.7;
const donemNotu = vize * vizeAgirlik + final * finalAgirlik;
if (donemNotu >= 90 && donemNotu <= 100) {
  harfNotu = 'A';
} else if (donemNotu >= 80) {
  harfNotu = 'B';
} else if (donemNotu >= 70) {
  harfNotu = 'C';
} else if (donemNotu >= 60) {
  harfNotu = 'D';
} else if (donemNotu >= 50) {
  harfNotu = 'E';
} else {
  harfNotu = 'F';
}
