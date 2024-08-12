// reverse the order of a given word separated by at least one space to a single-spaced reversed word

const reverseWords = function(s){
    return s.split(" ").filter(a => a).reverse().join(" ")
}
console.log(reverseWords("  hello world  "))
// "  hello world  " -> "world hello"
// "the sky is blue" -> "blue is sky the"