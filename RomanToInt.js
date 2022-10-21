
function value(r){
  if (r == "I" || r == "i") return 1;
  if (r == "V" || r == "v") return 5;
  if (r == "X" || r == "x") return 10;
  if (r == "L" || r == "l") return 50;
  if (r == "C" || r == "c") return 100;
  if (r == "D" || r == "d") return 500;
  if (r == "M" || r == "m") return 1000;
  return -1;
};
function main(s){
  let number = 0;
  if (1 <= s.length && s.length <= 15) {
    for (let i = 0; i < s.length; i++) {
      if (
        s.charAt(i) == "I" ||
        s.charAt(i) == "V" ||
        s.charAt(i) == "X" ||
        s.charAt(i) == "L" ||
        s.charAt(i) == "C" ||
        s.charAt(i) == "D" ||
        s.charAt(i) == "M" ||
        s.charAt(i) == "i" ||
        s.charAt(i) == "v" ||
        s.charAt(i) == "x" ||
        s.charAt(i) == "c" ||
        s.charAt(i) == "d" ||
        s.charAt(i) == "m" ||
        s.charAt(i) == "l"  
      ) {
        if (i + 1 < s.length) {
          if (value(s.charAt(i)) >= value(s.charAt(i + 1))) {
            number += value(s.charAt(i));
          } else {
            number -= value(s.charAt(i));
          }
        } else {
          number += value(s.charAt(i));
        }
      } else {
        document.write(
          "please enter a valid roman characters ex: III (I V X L C D M):"
        );
      }
    }
  }
  return number;
};
let s;
s = prompt("enter a valid roman characters ex: III (I V X L C D M): ");
document.write(main(s));
