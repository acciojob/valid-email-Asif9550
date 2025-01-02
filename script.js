function validEmail(str) {
  // Regular expression to validate email format
  const emailRegex = /^[a-zA-Z0-9_-]+(?:[.-][a-zA-Z0-9_-]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

  // Test if the input string matches the regex
  return emailRegex.test(str);
}

// Do not change the code below
const str = prompt("Enter an email address.");
alert(validEmail(str));
