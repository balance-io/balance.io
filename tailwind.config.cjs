const colors = require(`tailwindcss/colors`);

module.exports = {
    darkMode: `class`,
    fontFamily: {}, // TODO
    plugins: [],
    purge: [`./src/**/*.svelte`, `./src/**/*.css`, `./src/**/*.scss`],
    theme: {
        colors: {
            black: colors.black,
            blue: colors.blue,
            gray: colors.gray,
            green: colors.green,
            indigo: colors.indigo,
            orange: colors.orange,
            red: colors.red,
            white: colors.white,
        },
    },
    variants: {
        extend: {},
    },
};
