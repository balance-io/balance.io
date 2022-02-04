`use strict`;
const autoprefixer = require(`autoprefixer`);
const cssnano = require(`cssnano`);
const postcssNested = require(`postcss-nested`);

module.exports = {
    plugins: [
        autoprefixer,
        process.env.NODE_ENV !== `development` && cssnano({
            preset: `default`,
        }),
        postcssNested
    ],
};
