const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  depth = 1
  constructor(){}
  calculateDepth(arr){
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        this.depth++
        this.depth = this.calculateDepth.call(this, arr[i])
    }
  }
   return this.depth
 }
}

module.exports = {
  DepthCalculator
};
