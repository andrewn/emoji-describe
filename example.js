const replace = require("./src/index.js");

const strings = ["This is the 👺", "I hope so 🤞.", "Maybe 🤞🏼", "I'm from 🇬🇧"];

strings.forEach(str =>
  console.log(`
${str}
${replace(str)}
`)
);
