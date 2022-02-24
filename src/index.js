module.exports = function check(str, bracketsConfig) {
  const bracketsConfigObj = {};
  bracketsConfig.forEach((el) => {
    bracketsConfigObj[el[1]] = el[0];
  });
  const stack = [];
  const brackets = Array.from(str);
  for (const el of brackets) {
    if (bracketsConfigObj[el] == el) {
      stack[stack.length - 1] == el ? stack.pop() : stack.push(el);
    } else {
      if (!bracketsConfigObj[el]) {
        stack.push(el);
      } else {
        if (
          stack.length !== 0 &&
          stack[stack.length - 1] == bracketsConfigObj[el]
        ) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return !stack.length;
};
