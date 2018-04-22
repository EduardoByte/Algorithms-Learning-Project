/* Algorithm to solve the street numbers problem */

function street_numbers(n) {
  if(n <= 3) return -1;
  for(var i = 1, bn, an; i <= n; ++i) {
    bn = ((i * (i + 1)) >> 1) - i;
    an = ((n - i) * (i + 1 + n)) >> 1;
    if(an === bn) return i;
  }
  return -1;
}
