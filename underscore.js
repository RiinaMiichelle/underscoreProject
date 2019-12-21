var _ = require('lodash');
const assert = require('assert');

const strNums = ["1","4","1","5","9","2","6","5","3","5","8","9","7","9","3","2","3","8","4","6","2","6","4","3","3","8","3","2","7"];

function chunk(arr, num) {
  return _.chunk(arr, num);
}

function reverse(arr) {
  return _.reverse(arr);
}

function without(arr, ...excludes) {
  return _.without(arr, ...excludes);
}

function shuffle(arr) {
  return _.shuffle(arr);
}

function last(arr) {
  return _.last(arr);
}

if (typeof describe === 'function') {
  describe('lodash', () => {
    it('chunk returns an array of arrays the size of the chunk number', () => {
      const array = chunk(strNums, 5);
      assert.equal(
        array[0].length, 5
      );
    });

    it('reverse should return the same array in reverse order', () => {
      const reversedArray = _.cloneDeep(strNums);
      reverse(reversedArray);

      let reversedArrayIndex = 0;
      let strNumsIndex = strNums.length - 1;

      while (reversedArrayIndex <= strNumsIndex) {
        assert.equal(strNums[strNumsIndex], reversedArray[reversedArrayIndex]);
        reversedArrayIndex++;
        strNumsIndex--;
      }
    });

    it('should return a new array with the shuffled values old the old array', () => {
      const shuffledArray1 = shuffle(_.cloneDeep(strNums));
      const shuffledArray2 = shuffle(_.cloneDeep(strNums));
      assert.notDeepEqual(shuffledArray1, shuffledArray2);
    });

    it('should return the last element in the array', () => {
      let lastElement = last(strNums);
      assert.deepEqual(
        lastElement, "7"
      )
    });

    it('without should return a new array without the specified values excluded', () => {
      const newArray = without(strNums, "1", "2", "3");
      assert.deepEqual(
        newArray, ["4","5","9","6","5","5","8","9","7","9","8","4","6","6","4","8","7"]
      );
    });
  });
} else {
  console.log(chunk(strNums, 5));
  console.log(reverse(strNums));
  console.log(shuffle(strNums));
  console.log(without(strNums, "1", "2", "3"));
}
