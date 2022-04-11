/* 
Given a string, check if characters of the string can be rearranged into a 
palindrome.

EXAMPLE
Ace Carr --> true (Can be arranged to Race Car, which is a palindrome)
*/

function canFormPalindrome(phrase) {
    let str = phrase.replace(/\W/ig, "").toLowerCase();

    let charCount = {};

    for (const char of str) {
        charCount[char] = charCount[char] + 1 || 1;
    }

    let oddCount = 0;
    for (const count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            if (oddCount >= 1) {
                return false;
            }
            oddCount++;
        }
    }
    return true;
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Can Form Palindrome", () => {
  it("canFormPalindrome('Ace Carr') returns true", () => {
    assert.equal(canFormPalindrome("Ace Carr"), true);
  });
  it("canFormPalindrome('Ace Car') returns false", () => {
    assert.equal(canFormPalindrome("Ace Car"), false);
  });
});

mocha.run();
