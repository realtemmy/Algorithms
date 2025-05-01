// Print a single line containing all of the unique tag names found in the input.
// Your output tags should be semicolon-separated and ordered lexicographically (i.e.: alphabetically).
// Do not print the same tag name more than once.

// Eg
// <p><a href="http://www.quackit.com/html/tutorial/html_links.cfm">Example Link</a></p>
// <div class="more-info"><a href="http://www.quackit.com/html/examples/html_links_examples.cfm">More Link Examples...</a></div>
// Answer: a;div;p

const processData = function (input) {
    let lines = input.split("\n");
    let tags = new Set();

    const regex = /<\s*\/?\s*([a-zA-Z0-9]+)[\s>/]/g;

    for (let line of lines) {
      let match;
      while ((match = regex.exec(line)) !== null) {
        tags.add(match[1]);
      }
    }

    return [...tags].sort().join(";");
};

console.log(processData('<p><a href="http://www.quackit.com/html/tutorial/html_links.cfm">Example Link</a></p><div class="more-info"><a href="http://www.quackit.com/html/examples/html_links_examples.cfm">More Link Examples...</a></div>'));