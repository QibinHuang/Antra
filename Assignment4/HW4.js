const nums = [10, 20, 30, 40, 50];

// myMap
Array.prototype.myMap = function(callbackFn) {
  const transformed = [];
  for (let idx = 0; idx < this.length; idx++) {
    transformed[transformed.length] = callbackFn(this[idx], idx, this);
  }
  return transformed;
};
console.log("myMap:", nums.myMap(n => n / 10));

// Expected: [1, 2, 3, 4, 5]


// myFilter
Array.prototype.myFilter = function(predicate) {
  const passed = [];
  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i], i, this)) {
      passed[passed.length] = this[i];
    }
  }
  return passed;
};
console.log("myFilter:", nums.myFilter(n => n >= 30));

// Expected: [30, 40, 50]


// myReduce
Array.prototype.myReduce = function(reducer, initValue) {
  let acc = initValue;
  let startIdx = 0;

  if (acc === undefined) {
    acc = this[0];
    startIdx = 1;
  }

  for (let i = startIdx; i < this.length; i++) {
    acc = reducer(acc, this[i], i, this);
  }

  return acc;
};
console.log("myReduce:", nums.myReduce((sum, cur) => sum + cur, 0));

// Expected: 150


// myIncludes
Array.prototype.myIncludes = function(target) {
  for (let el of this) {
    if (Object.is(el, target)) {
      return true;
    }
  }
  return false;
};
console.log("myIncludes:", nums.myIncludes(40)); // true
console.log("myIncludes:", nums.myIncludes(99)); // false


// myFind
Array.prototype.myFind = function(testFn) {
  for (let i = 0; i < this.length; i++) {
    if (testFn(this[i], i, this)) return this[i];
  }
  return undefined;
};
console.log("myFind:", nums.myFind(n => n % 40 === 0));

// Expected: 40


// mySlice
Array.prototype.mySlice = function(start = 0, end = this.length) {
  const result = [];

  const len = this.length;
  const s = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
  const e = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

  for (let i = s; i < e; i++) {
    result.push(this[i]);
  }

  return result;
};
console.log("mySlice:", nums.mySlice(1, -1));

// Expected: [20, 30, 40]
