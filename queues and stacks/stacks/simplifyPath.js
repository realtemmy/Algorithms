// Given an absolute path for a Unix-style file system, which begins with a slash '/',
// transform this path into its simplified canonical path.

// In Unix-style file system context, a single period '.' signifies the current directory, a double period ".."
// denotes moving up one directory level, and multiple slashes such as "//" are interpreted as a single
//  slash. In this problem, treat sequences of periods not covered by the previous rules (like "...") as valid names for files or directories.

// The simplified canonical path should adhere to the following rules:
// It must start with a single slash '/'.
// Directories within the path should be separated by only one slash '/'.
// It should not end with a slash '/', unless it's the root directory.
// It should exclude any single or double periods used to denote current or parent directories.
// Return the new path

const simplifyPath = function (path) {
  const splittedPath = path.split("/").filter((a) => a);
  let stack = [];
  for (let i = 0; i < splittedPath.length; i++) {
    let currentElement = splittedPath[i];

    if (currentElement === ".") {
      continue;
    } else if (currentElement === "..") {
      stack.pop();
    } else {
      stack.push(currentElement);
    }
  }
  // add / to beginning and end of array
  stack = ["", ...stack]; //better way, return "/" + stack.join() since that is time - O(N)
  if (stack.length === 1) {
    return "/";
  }

  return stack.join("/");
};

// console.log(simplifyPath("/home//foo/")); // - "/home/foo/"
// console.log(simplifyPath("/home/user/Documents/../Pictures")); // - /home/user/Pictures
// console.log(simplifyPath("/../")); // /
// console.log(simplifyPath("/.../a/../b/c/../d/./")); // - /.../b/d
// console.log(simplifyPath("/abc/..."));

