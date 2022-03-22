// * For 100, the result should be 1 (1 + 0 + 0 = 1)
// * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
// *
// */

function getSumOfDigits(n) {
    n = String(n)
    n = n.split('')
    s = 0
    for (let i = 0; i < n.length; i++) {
        s += +n[i]
    }
    return s
}

getSumOfDigits(91)