module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brackets = bracketsConfig.map(function(bracket){
    return bracket[0]+bracket[1];
  });

  for (let i=0; i<str.length; i++) {
    if (!stack.length) stack.push(str[i]);
    else {
      if (brackets.includes(stack[stack.length-1] + str[i])) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }
  }

  if (!stack.length) return true;
  else return false;
}
