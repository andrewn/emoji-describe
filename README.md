# emoji-describe

Replaces emoji characters in strings with their names.

For example:

    const replaceInString = require('emoji-describe');
    replaceInString("I hope this works 🤞");
    // Returns:
    //   "I hope this works hand with index and middle fingers crossed"

It handles skin tone variants using the same language as Apple's excellent accessibility.

## Install

    npm install --save emoji-describe

## Development

The data is fetched from [`iamcal/emoji-data`](https://github.com/iamcal/emoji-data) and processed into a simple emoji -> description lookup.

To fetch and transform the latest data:

    git clone <repo>
    cd emoji-name
    npm install
    npm run build
