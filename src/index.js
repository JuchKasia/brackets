module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let closeBrackets = [];

  bracketsConfig.forEach(function(pair) {
    openBrackets.push(pair[0]);
    closeBrackets.push(pair[1]);
  });

  let opened = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == closeBrackets[openBrackets.indexOf(opened[opened.length - 1])]) {
      opened.pop();
    } else if (openBrackets.includes(str[i])) {
      opened.push(str[i]);
    } else { 
      return false;
    };
  }
  return opened.length == 0;
}
