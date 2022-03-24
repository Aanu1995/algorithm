function anagrams(stringA, stringB) {
let anamMap = {};
  let strA = stringA.toLowerCase().replace(/\W/g, "");
  let strB = stringB.toLowerCase().replace(/\W/g, "");

  if (strA.length != strB.length) {
    return false;
  }

  for (let index = 0; index < strA.length; index++){
      const charA = strA[index];
      anamMap[charA] = anamMap[charA] === undefined ?  1 : anamMap[charA] + 1;

      const charB = strB[index];
      anamMap[charB] = anamMap[charB] === undefined ? - 1 : anamMap[charB] - 1;
  }

  for (let index = 0; index < strA.length; index++) {
    let charA = strA[index];
    if (anamMap[charA] != 0) {
      return false
    }
  }

  return true;
}


console.log(anagrams('heart', 'earth'));
console.log(anagrams('heart', '  earth'));
console.log(anagrams('Heart!', 'EARTH'));
console.log(anagrams('lol', 'lolc'));
