const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(m) {
  r = []
  for (let i = 0; i < m.length; i++) {
      let tmp = []
      for (let j = 0; j < m[i].length; j++) {
          if (m[i][j]) {
              tmp.push(1)
          } else {
              tmp.push(0)
          }
      }
      r.push(tmp)
  } 
  for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m[i].length; j++) {
          if (m[i][j]) {
              try {
                  if (r[i][j+1] !== undefined && !m[i][j+1]) {
                      r[i][j+1]++
                  } 
              } catch {

              }
              try {
                  if (r[i][j-1] !== undefined && !m[i][j-1]) {
                      r[i][j-1]++
                  } 
              } catch {
                  
              }
              try {
                  if (r[i+1][j] !== undefined && !m[i+1][j]) {
                      r[i+1][j]++

                  } 
              } catch {

              }
              try {

                  if (r[i-1][j] !== undefined && !m[i-1][j]) {
                      r[i-1][j]++
                  }
              } catch {

              }
              try {

                  if (r[i-1][j-1] !== undefined && !m[i-1][j-1]) {
                      r[i-1][j-1]++
                  }
              } catch {

              }
              try {

                  if (r[i+1][j+1] !== undefined && !m[i+1][j+1]) {
                      r[i+1][j+1]++
                  }
              } catch {

              }
              try {

                  if (r[i+1][j-1] !== undefined && !m[i+1][j-1]) {
                      r[i+1][j-1]++
                  }
              } catch {

              }
              try {

                  if (r[i-1][j+1] !== undefined && !m[i-1][j+1]) {
                      r[i-1][j+1]++
                  }
              } catch {

              }
          }
      }
  } 
  return r;
}
module.exports = {
  minesweeper
};
