const emojiTree = require("emoji-tree");

const data = require("../data/emoji-to-description.json");

const charOrEmoji = ({ text, type }) =>
  type === "text" ? text : ` ${data[text]} `;

module.exports = string => {
  const parsed = emojiTree(string);
  const replace = parsed.map(charOrEmoji);
  return replace.join("");
};

module.exports.emojis = data;
